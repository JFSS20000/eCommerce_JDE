"use client";

import Link from "next/link";
import type { Product } from "@/lib/products";
import { availabilityLabels } from "@/lib/i18n";
import { ProductImage } from "./ProductImage";
import { QuoteButton } from "./QuoteButton";
import { useLanguage } from "./LanguageProvider";

export function ProductCard({ product }: { product: Product }) {
  const { l, locale } = useLanguage();
  const availability = availabilityLabels[product.availability];

  return (
    <article className="product-card">
      <Link href={`/producto/${product.slug}`} className="product-image-wrap" aria-label={`Ver ${product.name}`}>
        <ProductImage sourceUrl={product.sourceUrl} fallback={product.image} alt={product.name} className="product-image" />
        <span className={`availability ${product.availability}`}>
          {availability ? l(availability) : product.availability}
        </span>
      </Link>

      <div className="product-card-content">
        <div className="eyebrow-row">
          <span>{l(product.category)}</span>
          <span>{l(product.color)}</span>
        </div>
        <Link href={`/producto/${product.slug}`} className="product-title-link">
          <h3>{product.name}</h3>
        </Link>
        <p>{l(product.description)}</p>
        <div className="tag-row">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={`${product.slug}-${tag.es}`}>{tag[locale]}</span>
          ))}
        </div>
        <div className="card-actions">
          <span className="price-lock">{l(product.priceLabel)}</span>
          <QuoteButton product={product} compact />
        </div>
      </div>
    </article>
  );
}
