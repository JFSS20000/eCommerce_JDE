"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div>
        <strong>Tessa Shop</strong>
        <p>{t("footerText")}</p>
      </div>
      <div className="footer-links">
        <Link href="/catalogo">{t("navCatalog")}</Link>
        <Link href="/acceso">{t("footerAccess")}</Link>
        <Link href="/cotizacion">{t("footerQuote")}</Link>
      </div>
    </footer>
  );
}
