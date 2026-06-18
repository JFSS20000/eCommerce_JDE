"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { trackingRecords, type TrackingRecord } from "@/lib/demo-data";
import { useLanguage } from "./LanguageProvider";

type StoredQuote = {
  id: string;
  type: "quote";
  status: "received";
  company: string;
  country: string;
  createdAt: string;
  dispatchDate: string;
  items: Array<{ name: string; quantity: number }>;
};

function fromStoredQuote(quote: StoredQuote): TrackingRecord {
  return {
    id: quote.id,
    type: "quote",
    customer: quote.company || "Cliente B2B",
    status: "Solicitud recibida",
    destination: quote.country || "Por confirmar",
    totalBoxes: quote.items.reduce((total, item) => total + item.quantity, 0),
    createdAt: quote.createdAt.slice(0, 10),
    eta: quote.dispatchDate || "Por confirmar",
    items: quote.items.map((item) => item.name),
    timeline: [
      { label: "Solicitud recibida", date: new Date(quote.createdAt).toLocaleString(), done: true },
      { label: "Validación comercial", date: "Pendiente", done: false },
      { label: "Confirmación de disponibilidad", date: "Pendiente", done: false },
      { label: "Cotización enviada al cliente", date: "Pendiente", done: false }
    ]
  };
}

export function TrackingClient() {
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const initialCode = searchParams.get("code") || "";
  const [query, setQuery] = useState(initialCode);
  const [storedRecords, setStoredRecords] = useState<TrackingRecord[]>([]);
  const [selectedType, setSelectedType] = useState<"quote" | "order">("quote");

  useEffect(() => {
    const stored = window.localStorage.getItem("tessa_quotes");
    const quotes: StoredQuote[] = stored ? JSON.parse(stored) : [];
    setStoredRecords(quotes.map(fromStoredQuote));
  }, []);

  useEffect(() => {
    if (initialCode.toUpperCase().startsWith("P-")) setSelectedType("order");
  }, [initialCode]);

  const records = useMemo(() => [...storedRecords, ...trackingRecords], [storedRecords]);
  const filteredByType = records.filter((record) => record.type === selectedType);
  const result = records.find((record) => record.id.toLowerCase() === query.trim().toLowerCase());
  const visibleRecord = result || filteredByType[0];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const match = records.find((record) => record.id.toLowerCase() === query.trim().toLowerCase());
    if (match) setSelectedType(match.type);
  }

  return (
    <section className="tracking-layout">
      <div className="tracking-search-card">
        <div className="tabs">
          <button className={selectedType === "quote" ? "active" : ""} onClick={() => setSelectedType("quote")} type="button">
            {t("quoteTab")}
          </button>
          <button className={selectedType === "order" ? "active" : ""} onClick={() => setSelectedType("order")} type="button">
            {t("orderTab")}
          </button>
        </div>

        <form onSubmit={submit} className="tracking-form">
          <label>
            Código
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("trackingSearchPlaceholder")}
            />
          </label>
          <button className="button" type="submit">{t("consult")}</button>
        </form>

        <div className="record-list">
          {filteredByType.map((record) => (
            <button key={record.id} type="button" onClick={() => setQuery(record.id)} className={record.id === visibleRecord?.id ? "record-row active" : "record-row"}>
              <strong>{record.id}</strong>
              <span>{record.customer}</span>
            </button>
          ))}
        </div>
      </div>

      {visibleRecord ? (
        <article className="tracking-detail-card">
          <p className="eyebrow">{visibleRecord.type === "quote" ? t("quoteTab") : t("orderTab")}</p>
          <div className="tracking-title-row">
            <h2>{visibleRecord.id}</h2>
            <span>{visibleRecord.status}</span>
          </div>
          <div className="tracking-metrics">
            <div><span>Cliente</span><strong>{visibleRecord.customer}</strong></div>
            <div><span>Destino</span><strong>{visibleRecord.destination}</strong></div>
            <div><span>Cajas</span><strong>{visibleRecord.totalBoxes}</strong></div>
            <div><span>ETA</span><strong>{visibleRecord.eta}</strong></div>
          </div>
          <div className="timeline">
            {visibleRecord.timeline.map((step) => (
              <div key={step.label} className={step.done ? "done" : ""}>
                <span />
                <div>
                  <strong>{step.label}</strong>
                  <p>{step.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="tracked-items">
            <strong>Productos</strong>
            <p>{visibleRecord.items.join(" · ")}</p>
          </div>
        </article>
      ) : (
        <article className="tracking-detail-card">
          <h2>No se encontró el registro</h2>
          <p>Prueba con Q-2026-0048 o P-2026-0091.</p>
        </article>
      )}
    </section>
  );
}
