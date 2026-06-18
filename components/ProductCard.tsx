"use client";

import Link from "next/link";
import type { Product } from "@/lib/products";
import { QuoteButton } from "./QuoteButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/producto/${product.slug}`} className="product-image-wrap" aria-label={`Ver ${product.name}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <span className={`availability ${product.availability.toLowerCase().replaceAll(" ", "-")}`}>
          {product.availability}
        </span>
      </Link>

      <div className="product-card-content">
        <div className="eyebrow-row">
          <span>{product.category}</span>
          <span>{product.color}</span>
        </div>
        <Link href={`/producto/${product.slug}`} className="product-title-link">
          <h3>{product.name}</h3>
        </Link>
        <p>{product.description}</p>
        <div className="tag-row">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="card-actions">
          <span className="price-lock">{product.priceLabel}</span>
          <QuoteButton product={product} compact />
        </div>
      </div>
    </article>
  );
}
