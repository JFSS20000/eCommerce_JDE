"use client";

import Link from "next/link";
import { FloatingQuote } from "./FloatingQuote";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

const navigation = [
  { href: "/catalogo", key: "navCatalog" },
  { href: "/cotizacion", key: "navQuote" },
  { href: "/seguimiento", key: "navTracking" },
  { href: "/compras", key: "navPurchases" },
  { href: "/acceso", key: "navAccess" },
  { href: "/admin", key: "navAdmin" }
] as const;

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Tessa Shop inicio">
        <span className="brand-mark">T</span>
        <span>
          <strong>Tessa Shop</strong>
          <small>{t("brandLine")}</small>
        </span>
      </Link>

      <nav className="nav" aria-label="Navegación principal">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {t(item.key)}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <LanguageSwitcher />
        <FloatingQuote />
      </div>
    </header>
  );
}
