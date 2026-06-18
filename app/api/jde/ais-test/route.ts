import { NextRequest, NextResponse } from "next/server";

type Payload = {
  baseUrl?: string;
  username?: string;
  password?: string;
  environment?: string;
  role?: string;
};

function cleanBaseUrl(value: string) {
  return value.replace(/\/+$/, "");
}

export async function POST(request: NextRequest) {
  const payload = (await request.json().catch(() => ({}))) as Payload;
  const baseUrl = cleanBaseUrl(payload.baseUrl || process.env.JDE_AIS_BASE_URL || "");

  if (!baseUrl) {
    return NextResponse.json({ ok: false, mode: "demo", message: "AIS URL not configured." }, { status: 200 });
  }

  let url: URL;
  try {
    url = new URL(baseUrl);
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid AIS URL." }, { status: 400 });
  }

  if (!["http:", "https:"].includes(url.protocol)) {
    return NextResponse.json({ ok: false, message: "AIS URL must be http or https." }, { status: 400 });
  }

  const username = payload.username || process.env.JDE_AIS_USERNAME;
  const password = payload.password || process.env.JDE_AIS_PASSWORD;
  const environment = payload.environment || process.env.JDE_AIS_ENVIRONMENT;
  const role = payload.role || process.env.JDE_AIS_ROLE;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    if (username && password) {
      const response = await fetch(`${baseUrl}/jderest/tokenrequest`, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify({ username, password, environment, role }),
        signal: controller.signal
      });
      clearTimeout(timeout);

      const text = await response.text();
      let body: unknown = text;
      try {
        body = JSON.parse(text);
      } catch {
        body = text.slice(0, 300);
      }

      return NextResponse.json({
        ok: response.ok,
        status: response.status,
        endpoint: "/jderest/tokenrequest",
        message: response.ok ? "AIS token request responded successfully." : "AIS token request returned an error.",
        body
      });
    }

    const response = await fetch(`${baseUrl}/jderest/defaultconfig`, {
      method: "GET",
      headers: { accept: "application/json" },
      signal: controller.signal
    });
    clearTimeout(timeout);
    const text = await response.text();

    return NextResponse.json({
      ok: response.ok,
      status: response.status,
      endpoint: "/jderest/defaultconfig",
      message: response.ok ? "AIS default config responded successfully." : "AIS default config returned an error.",
      body: text.slice(0, 500)
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      message: error instanceof Error ? error.message : "Unknown AIS connection error."
    });
  }
}
