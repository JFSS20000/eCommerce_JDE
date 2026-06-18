"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { ProductImage } from "./ProductImage";
import { useLanguage } from "./LanguageProvider";

type QuoteItem = {
  slug: string;
  name: string;
  category: string;
  color: string;
  image: string;
  sourceUrl: string;
  quantity: number;
  stemLength: string;
  packing: string;
  jdeItemNumber: string;
};

type SavedQuote = {
  id: string;
  type: "quote";
  status: "received";
  company: string;
  email: string;
  country: string;
  dispatchDate: string;
  notes: string;
  createdAt: string;
  items: QuoteItem[];
};

function createQuoteId() {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `Q-${year}-${random}`;
}

export function QuoteCart() {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [sentId, setSentId] = useState<string | null>(null);
  const { t } = useLanguage();

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
    const form = new FormData(event.currentTarget);
    const id = createQuoteId();
    const savedQuote: SavedQuote = {
      id,
      type: "quote",
      status: "received",
      company: String(form.get("company") || ""),
      email: String(form.get("email") || ""),
      country: String(form.get("country") || ""),
      dispatchDate: String(form.get("dispatchDate") || ""),
      notes: String(form.get("notes") || ""),
      createdAt: new Date().toISOString(),
      items
    };
    const stored = window.localStorage.getItem("tessa_quotes");
    const quotes: SavedQuote[] = stored ? JSON.parse(stored) : [];
    window.localStorage.setItem("tessa_quotes", JSON.stringify([savedQuote, ...quotes]));
    setSentId(id);
    persist([]);
  }

  if (sentId) {
    return (
      <div className="success-panel">
        <span className="success-icon">✓</span>
        <h2>{t("quoteSent")}</h2>
        <p>{t("quoteSentBody")}</p>
        <p className="tracking-code">{sentId}</p>
        <Link href={`/seguimiento?code=${sentId}`} className="button">{t("goTracking")}</Link>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="empty-state">
        <h2>{t("emptyQuoteTitle")}</h2>
        <p>{t("emptyQuoteBody")}</p>
        <Link href="/catalogo" className="button">{t("homeCatalogCta")}</Link>
      </div>
    );
  }

  return (
    <div className="quote-layout">
      <section className="quote-list" aria-label="Productos en cotización">
        {items.map((item) => (
          <article key={item.slug} className="quote-item">
            <ProductImage sourceUrl={item.sourceUrl} fallback={item.image} alt={item.name} />
            <div>
              <p className="eyebrow">{item.category} · {item.color}</p>
              <h3>{item.name}</h3>
              <p>{item.stemLength} · {item.packing}</p>
              <p className="fine-print">JDE: {item.jdeItemNumber}</p>
            </div>
            <label>
              {t("quantity")}
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(event) => updateQuantity(item.slug, Number(event.target.value))}
              />
            </label>
            <button type="button" className="ghost-button" onClick={() => removeItem(item.slug)}>
              {t("remove")}
            </button>
          </article>
        ))}
      </section>

      <form className="quote-form" onSubmit={submitQuote}>
        <p className="eyebrow">{t("quoteSummary")}</p>
        <h2>{totalUnits} {t("unitsInRequest")}</h2>
        <label>
          {t("company")}
          <input name="company" required placeholder="Nombre de empresa" />
        </label>
        <label>
          {t("businessEmail")}
          <input name="email" required type="email" placeholder="compras@empresa.com" />
        </label>
        <label>
          {t("destinationCountry")}
          <input name="country" required placeholder="Estados Unidos, España, Chile..." />
        </label>
        <label>
          {t("dispatchDate")}
          <input name="dispatchDate" required type="date" />
        </label>
        <label>
          {t("notes")}
          <textarea name="notes" placeholder={t("notesPlaceholder")} />
        </label>
        <button className="button" type="submit">{t("sendB2B")}</button>
        <p className="fine-print">{t("quoteFinePrint")}</p>
      </form>
    </div>
  );
}
