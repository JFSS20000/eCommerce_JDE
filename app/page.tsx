import Link from "next/link";
import { LocalizedText } from "@/components/LocalizedText";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const stats = [
  { value: "PWA", key: "statPwa" },
  { value: "B2B", key: "statB2b" },
  { value: "24/7", key: "statAlways" }
] as const;

const features = ["featureCatalog", "featureQuote", "featureLists", "featureJde"] as const;

export default function HomePage() {
  const highlighted = products.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <LocalizedText as="p" textKey="homeEyebrow" className="eyebrow" />
          <LocalizedText as="h1" textKey="homeTitle" />
          <LocalizedText as="p" textKey="homeIntro" />
          <div className="hero-actions">
            <Link href="/catalogo" className="button"><LocalizedText textKey="homeCatalogCta" /></Link>
            <Link href="/acceso" className="ghost-button"><LocalizedText textKey="homeAccessCta" /></Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="flower-card main-flower-card">
            <span>Explorer</span>
            <strong>Premium Roses</strong>
          </div>
          <div className="flower-card secondary-flower-card">
            <span>Antonia Gardens</span>
            <strong>Wedding collection</strong>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        {stats.map((item) => (
          <div key={item.value}>
            <strong>{item.value}</strong>
            <LocalizedText as="span" textKey={item.key} />
          </div>
        ))}
      </section>

      <section className="section split-section">
        <div>
          <LocalizedText as="p" textKey="approachEyebrow" className="eyebrow" />
          <LocalizedText as="h2" textKey="approachTitle" />
          <LocalizedText as="p" textKey="approachBody" />
        </div>
        <div className="feature-list">
          {features.map((feature) => (
            <div key={feature}>
              <span>✓</span>
              <LocalizedText as="p" textKey={feature} />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <LocalizedText as="p" textKey="featuredEyebrow" className="eyebrow" />
            <LocalizedText as="h2" textKey="featuredTitle" />
          </div>
          <Link href="/catalogo" className="text-link"><LocalizedText textKey="viewAll" /></Link>
        </div>
        <div className="product-grid">
          {highlighted.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="cta-panel">
        <LocalizedText as="p" textKey="ctaEyebrow" className="eyebrow" />
        <LocalizedText as="h2" textKey="ctaTitle" />
        <LocalizedText as="p" textKey="ctaBody" />
        <Link href="/admin" className="button"><LocalizedText textKey="ctaAdmin" /></Link>
      </section>
    </>
  );
}
