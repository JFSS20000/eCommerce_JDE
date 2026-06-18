"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function FloatingQuote() {
  const [count, setCount] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const update = () => {
      try {
        const stored = window.localStorage.getItem("tessa_quote");
        const items = stored ? JSON.parse(stored) : [];
        setCount(items.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0));
      } catch {
        setCount(0);
      }
    };

    update();
    window.addEventListener("quote-updated", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("quote-updated", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  return (
    <Link href="/cotizacion" className="quote-pill" aria-label={`${t("quotePill")} ${count}`}>
      <span>{t("quotePill")}</span>
      <strong>{count}</strong>
    </Link>
  );
}
