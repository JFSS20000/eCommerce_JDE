"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

type QuoteItem = {
  slug: string;
  name: string;
  category: string;
  color: string;
  image: string;
  quantity: number;
  stemLength: string;
  packing: string;
};

export function QuoteButton({ product, compact = false }: { product: Product; compact?: boolean }) {
  const [added, setAdded] = useState(false);

  function addToQuote() {
    const current = window.localStorage.getItem("tessa_quote");
    const items: QuoteItem[] = current ? JSON.parse(current) : [];
    const existing = items.find((item) => item.slug === product.slug);

    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({
        slug: product.slug,
        name: product.name,
        category: product.category,
        color: product.color,
        image: product.image,
        quantity: 1,
        stemLength: product.stemLengths[0],
        packing: product.packing
      });
    }

    window.localStorage.setItem("tessa_quote", JSON.stringify(items));
    window.dispatchEvent(new Event("quote-updated"));
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  }

  return (
    <button className={compact ? "button small" : "button"} onClick={addToQuote} type="button">
      {added ? "Agregado" : "Agregar a cotización"}
    </button>
  );
}
