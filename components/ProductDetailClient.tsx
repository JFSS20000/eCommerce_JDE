"use client";

import Link from "next/link";
import type { Product } from "@/lib/products";
import { availabilityLabels } from "@/lib/i18n";
import { ProductImage } from "./ProductImage";
import { QuoteButton } from "./QuoteButton";
import { useLanguage } from "./LanguageProvider";

export function ProductDetailClient({ product }: { product: Product }) {
  const { l, locale, t } = useLanguage();
  const availability = availabilityLabels[product.availability];

  return (
    <section className="product-detail">
      <Link href="/catalogo" className="text-link">{t("backCatalog")}</Link>
      <div className="product-detail-grid">
        <div className="detail-image-panel">
          <ProductImage sourceUrl={product.sourceUrl} fallback={product.image} alt={product.name} />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{l(product.category)} · {l(product.color)}</p>
          <h1>{product.name}</h1>
          <p className="detail-description">{l(product.description)}</p>
          <div className="tag-row large">
            {product.tags.map((tag) => (
              <span key={`${product.slug}-${tag.es}`}>{tag[locale]}</span>
            ))}
          </div>

          <div className="spec-grid">
            <div>
              <span>{t("availability")}</span>
              <strong>{availability ? l(availability) : product.availability}</strong>
            </div>
            <div>
              <span>{t("season")}</span>
              <strong>{l(product.season)}</strong>
            </div>
            <div>
              <span>{t("lengths")}</span>
              <strong>{product.stemLengths.join(", ")}</strong>
            </div>
            <div>
              <span>{t("packing")}</span>
              <strong>{product.packing}</strong>
            </div>
            <div>
              <span>{t("bunch")}</span>
              <strong>{l(product.bunch)}</strong>
            </div>
            <div>
              <span>{t("box")}</span>
              <strong>{l(product.box)}</strong>
            </div>
            <div>
              <span>JDE Item Number</span>
              <strong>{product.jdeItemNumber}</strong>
            </div>
            <div>
              <span>{t("source")}</span>
              <a href={product.sourceUrl} target="_blank" rel="noreferrer" className="source-link">Tessa Shop</a>
            </div>
          </div>

          <div className="price-panel">
            <span>{l(product.priceLabel)}</span>
            <p>{t("priceNote")}</p>
          </div>

          <div className="detail-actions">
            <QuoteButton product={product} />
            <Link href="/acceso" className="ghost-button">{t("requestAccess")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
