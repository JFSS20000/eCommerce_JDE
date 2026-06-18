"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";

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

export function QuoteCart() {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("tessa_quote");
    setItems(stored ? JSON.parse(stored) : []);
  }, []);

  const totalUnits = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items]);

  function persist(nextItems: QuoteItem[]) {
    setItems(nextItems);
    window.localStorage.setItem("tessa_quote", JSON.stringify(nextItems));
    window.dispatchEvent(new Event("quote-updated"));
  }

  function updateQuantity(slug: string, quantity: number) {
    const nextItems = items.map((item) => (item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item));
    persist(nextItems);
  }

  function removeItem(slug: string) {
    persist(items.filter((item) => item.slug !== slug));
  }

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    persist([]);
  }

  if (sent) {
    return (
      <div className="success-panel">
        <span className="success-icon">✓</span>
        <h2>Solicitud enviada</h2>
        <p>Este MVP simula el envío de la solicitud. En producción se conectaría con email, CRM, WhatsApp o ERP.</p>
        <Link href="/catalogo" className="button">Volver al catálogo</Link>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="empty-state">
        <h2>Tu cotización está vacía</h2>
        <p>Agrega variedades, bouquets o productos de temporada desde el catálogo.</p>
        <Link href="/catalogo" className="button">Explorar catálogo</Link>
      </div>
    );
  }

  return (
    <div className="quote-layout">
      <section className="quote-list" aria-label="Productos en cotización">
        {items.map((item) => (
          <article key={item.slug} className="quote-item">
            <img src={item.image} alt={item.name} />
            <div>
              <p className="eyebrow">{item.category} · {item.color}</p>
              <h3>{item.name}</h3>
              <p>{item.stemLength} · {item.packing}</p>
            </div>
            <label>
              Cajas / unidades
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(event) => updateQuantity(item.slug, Number(event.target.value))}
              />
            </label>
            <button type="button" className="ghost-button" onClick={() => removeItem(item.slug)}>
              Quitar
            </button>
          </article>
        ))}
      </section>

      <form className="quote-form" onSubmit={submitQuote}>
        <p className="eyebrow">Resumen</p>
        <h2>{totalUnits} unidades en solicitud</h2>
        <label>
          Empresa
          <input required placeholder="Nombre de empresa" />
        </label>
        <label>
          Email comercial
          <input required type="email" placeholder="compras@empresa.com" />
        </label>
        <label>
          País destino
          <input required placeholder="Estados Unidos, España, Chile..." />
        </label>
        <label>
          Fecha estimada de despacho
          <input required type="date" />
        </label>
        <label>
          Observaciones
          <textarea placeholder="Longitudes, packing, ruta logística, certificaciones o preferencias." />
        </label>
        <button className="button" type="submit">Enviar solicitud B2B</button>
        <p className="fine-print">La confirmación final depende de disponibilidad, precio asignado y logística.</p>
      </form>
    </div>
  );
}
