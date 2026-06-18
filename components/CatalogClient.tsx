"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { useLanguage } from "./LanguageProvider";

export function CatalogClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("__all");
  const [color, setColor] = useState("__all");
  const { l, t } = useLanguage();

  const categories = useMemo(() => Array.from(new Set(products.map((product) => l(product.category)))).sort(), [l]);
  const colors = useMemo(() => Array.from(new Set(products.map((product) => l(product.color)))).sort(), [l]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const productCategory = l(product.category);
      const productColor = l(product.color);
      const matchesQuery =
        !normalizedQuery ||
        [product.name, l(product.description), productCategory, productColor, product.tags.map((tag) => l(tag)).join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesCategory = category === "__all" || productCategory === category;
      const matchesColor = color === "__all" || productColor === color;
      return matchesQuery && matchesCategory && matchesColor;
    });
  }, [query, category, color, l]);

  return (
    <section className="catalog-section">
      <div className="filters-panel">
        <label>
          {t("search")}
          <input
            type="search"
            placeholder={t("searchPlaceholder")}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <label>
          {t("category")}
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="__all">{t("allCategories")}</option>
            {categories.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          {t("color")}
          <select value={color} onChange={(event) => setColor(event.target.value)}>
            <option value="__all">{t("allColors")}</option>
            {colors.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="catalog-summary">
        <p>
          <strong>{filtered.length}</strong> {t("catalogSummary")}
        </p>
      </div>

      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
