"use client";

import { useMemo, useState } from "react";
import { categories, colors, products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function CatalogClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [color, setColor] = useState("Todos");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesQuery =
        !normalizedQuery ||
        [product.name, product.description, product.category, product.color, product.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesCategory = category === "Todas" || product.category === category;
      const matchesColor = color === "Todos" || product.color === color;
      return matchesQuery && matchesCategory && matchesColor;
    });
  }, [query, category, color]);

  return (
    <section className="catalog-section">
      <div className="filters-panel">
        <label>
          Buscar
          <input
            type="search"
            placeholder="Freedom, bouquet, wedding..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <label>
          Categoría
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option>Todas</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          Color
          <select value={color} onChange={(event) => setColor(event.target.value)}>
            <option>Todos</option>
            {colors.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="catalog-summary">
        <p>
          <strong>{filtered.length}</strong> productos disponibles para explorar. Los precios finales se muestran solo a clientes aprobados.
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
