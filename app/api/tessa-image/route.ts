import { NextRequest, NextResponse } from "next/server";

function toAbsolute(candidate: string, baseUrl: string) {
  try {
    return new URL(candidate.replaceAll("\\/", "/"), baseUrl).toString();
  } catch {
    return null;
  }
}

function fromSrcset(srcset: string) {
  return srcset
    .split(",")
    .map((item) => item.trim().split(/\s+/)[0])
    .find(Boolean);
}

function unique(values: Array<string | null | undefined>) {
  return Array.from(new Set(values.filter(Boolean))) as string[];
}

function extractImageUrl(html: string, sourceUrl: string) {
  const candidates: Array<string | null | undefined> = [];
  const patterns = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
    /<link[^>]+rel=["']image_src["'][^>]+href=["']([^"']+)["']/i,
    /<img[^>]+class=["'][^"']*wp-post-image[^"']*["'][^>]+src=["']([^"']+)["']/i,
    /<img[^>]+src=["']([^"']+)["'][^>]+class=["'][^"']*wp-post-image[^"']*["']/i,
    /<img[^>]+class=["'][^"']*woocommerce-product-gallery__image[^"']*["'][^>]+src=["']([^"']+)["']/i,
    /<img[^>]+src=["']([^"']+)["'][^>]+class=["'][^"']*woocommerce-product-gallery__image[^"']*["']/i,
    /"image"\s*:\s*"([^"]+)"/i
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) candidates.push(match[1]);
  }

  const srcsetMatch = html.match(/<img[^>]+(?:wp-post-image|woocommerce-product-gallery__image)[^>]+srcset=["']([^"']+)["']/i);
  if (srcsetMatch?.[1]) candidates.push(fromSrcset(srcsetMatch[1]));

  const normalized = unique(candidates)
    .map((candidate) => toAbsolute(candidate, sourceUrl))
    .filter((candidate): candidate is string => !!candidate)
    .filter((candidate) => /\.(jpg|jpeg|png|webp)(\?|$)/i.test(candidate));

  return normalized[0] || null;
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ imageUrl: null, error: "Missing url" }, { status: 400 });
  }

  let source: URL;
  try {
    source = new URL(url);
  } catch {
    return NextResponse.json({ imageUrl: null, error: "Invalid url" }, { status: 400 });
  }

  if (!source.hostname.endsWith("tessacorporation.com")) {
    return NextResponse.json({ imageUrl: null, error: "Only tessacorporation.com is allowed" }, { status: 403 });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const response = await fetch(source.toString(), {
      headers: {
        "user-agent": "Mozilla/5.0 TessaShopPWA/1.0",
        accept: "text/html,application/xhtml+xml"
      },
      signal: controller.signal,
      next: { revalidate: 86400 }
    });
    clearTimeout(timeout);

    if (!response.ok) {
      return NextResponse.json({ imageUrl: null, error: `Fetch failed: ${response.status}` }, { status: 200 });
    }

    const html = await response.text();
    const imageUrl = extractImageUrl(html, source.toString());

    return NextResponse.json(
      { imageUrl, sourceUrl: source.toString() },
      {
        headers: {
          "cache-control": "public, s-maxage=86400, stale-while-revalidate=604800"
        }
      }
    );
  } catch (error) {
    return NextResponse.json({ imageUrl: null, error: error instanceof Error ? error.message : "Unknown error" }, { status: 200 });
  }
}
