"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const footerCopy = {
  es: {
    motto: "LA MEJOR CALIDAD NO OCURRE POR CASUALIDAD: REQUIERE PROCESO, DEDICACIÓN Y CONTROL.",
    description:
      "Portal eCommerce B2B para consultar flores ecuatorianas premium, armar cotizaciones, repetir compras y dar seguimiento a pedidos.",
    ecommerce: "ECOMMERCE B2B",
    account: "CUENTA",
    support: "SOPORTE",
    jde: "JDE / AIS",
    newsletter: "Recibe disponibilidad, novedades y campañas por temporada.",
    subscribe: "Suscribirme",
    emailPlaceholder: "email@empresa.com",
    catalog: "Catálogo floral",
    quote: "Cotización actual",
    tracking: "Seguimiento",
    purchases: "Compras pasadas",
    access: "Solicitar acceso",
    admin: "Admin demo",
    terms: "Términos comerciales",
    privacy: "Privacidad",
    contact: "Contacto comercial",
    logistics: "Logística y despacho",
    aisConfig: "Configuración AIS",
    sync: "Sincronización demo",
    security: "Seguridad API",
    copyright: "Tessa Shop PWA. Demo eCommerce B2B para flores premium de Ecuador.",
    backTop: "↑"
  },
  en: {
    motto: "THE FINEST QUALITY DOESN'T HAPPEN BY CHANCE — IT TAKES PROCESS, DEDICATION AND CONTROL.",
    description:
      "B2B eCommerce portal to browse premium Ecuadorian flowers, build quotes, repeat purchases and track orders.",
    ecommerce: "B2B ECOMMERCE",
    account: "ACCOUNT",
    support: "SUPPORT",
    jde: "JDE / AIS",
    newsletter: "Receive availability updates, new varieties and seasonal campaigns.",
    subscribe: "Subscribe",
    emailPlaceholder: "email@company.com",
    catalog: "Flower catalog",
    quote: "Current quote",
    tracking: "Tracking",
    purchases: "Past purchases",
    access: "Request access",
    admin: "Admin demo",
    terms: "Commercial terms",
    privacy: "Privacy",
    contact: "Sales contact",
    logistics: "Logistics and dispatch",
    aisConfig: "AIS settings",
    sync: "Demo sync",
    security: "API security",
    copyright: "Tessa Shop PWA. B2B eCommerce demo for premium Ecuadorian flowers.",
    backTop: "↑"
  },
  ru: {
    motto: "ЛУЧШЕЕ КАЧЕСТВО НЕ БЫВАЕТ СЛУЧАЙНЫМ — ЭТО ПРОЦЕСС, КОНТРОЛЬ И ПРЕДАННОСТЬ ДЕЛУ.",
    description:
      "B2B eCommerce портал для просмотра премиальных эквадорских цветов, котировок, повторных покупок и отслеживания заказов.",
    ecommerce: "B2B ECOMMERCE",
    account: "АККАУНТ",
    support: "ПОДДЕРЖКА",
    jde: "JDE / AIS",
    newsletter: "Получайте наличие, новые сорта и сезонные кампании.",
    subscribe: "Подписаться",
    emailPlaceholder: "email@company.com",
    catalog: "Каталог цветов",
    quote: "Текущая котировка",
    tracking: "Отслеживание",
    purchases: "Прошлые покупки",
    access: "Запросить доступ",
    admin: "Админ демо",
    terms: "Коммерческие условия",
    privacy: "Конфиденциальность",
    contact: "Коммерческий контакт",
    logistics: "Логистика и отправка",
    aisConfig: "Настройки AIS",
    sync: "Демо синхронизация",
    security: "Безопасность API",
    copyright: "Tessa Shop PWA. B2B eCommerce демо для премиальных цветов Эквадора.",
    backTop: "↑"
  }
} as const;

const socialLinks = [
  { label: "Facebook", value: "f" },
  { label: "Instagram", value: "◎" },
  { label: "LinkedIn", value: "in" },
  { label: "YouTube", value: "▶" },
  { label: "Pinterest", value: "p" }
];

export function Footer() {
  const { locale } = useLanguage();
  const copy = footerCopy[locale];

  return (
    <footer className="ecommerce-footer">
      <div className="footer-motto">{copy.motto}</div>

      <div className="footer-main">
        <section className="footer-brand-panel" aria-label="Tessa Shop">
          <Link href="/" className="footer-brand" aria-label="Tessa Shop inicio">
            <span className="footer-brand-mark">T</span>
            <span className="footer-brand-name">TESSA</span>
          </Link>
          <p>{copy.description}</p>
          <div className="footer-social" aria-label="Redes sociales">
            {socialLinks.map((item) => (
              <a key={item.label} href="#" aria-label={item.label}>
                {item.value}
              </a>
            ))}
          </div>
        </section>

        <nav className="footer-column" aria-label={copy.ecommerce}>
          <h3>{copy.ecommerce}</h3>
          <Link href="/catalogo">{copy.catalog}</Link>
          <Link href="/cotizacion">{copy.quote}</Link>
          <Link href="/seguimiento">{copy.tracking}</Link>
          <Link href="/compras">{copy.purchases}</Link>
        </nav>

        <nav className="footer-column" aria-label={copy.account}>
          <h3>{copy.account}</h3>
          <Link href="/acceso">{copy.access}</Link>
          <Link href="/admin">{copy.admin}</Link>
          <a href="#">{copy.terms}</a>
          <a href="#">{copy.privacy}</a>
        </nav>

        <nav className="footer-column" aria-label={copy.support}>
          <h3>{copy.support}</h3>
          <a href="mailto:sales@tessacorporation.com">{copy.contact}</a>
          <Link href="/seguimiento">{copy.logistics}</Link>
          <Link href="/cotizacion">{copy.quote}</Link>
          <Link href="/catalogo">{copy.catalog}</Link>
        </nav>

        <section className="footer-newsletter" aria-label="Newsletter">
          <h3>{copy.jde}</h3>
          <Link href="/admin">{copy.aisConfig}</Link>
          <Link href="/admin">{copy.sync}</Link>
          <Link href="/admin">{copy.security}</Link>
          <p>{copy.newsletter}</p>
          <form className="footer-subscribe" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder={copy.emailPlaceholder} aria-label={copy.emailPlaceholder} />
            <button type="submit">{copy.subscribe}</button>
          </form>
        </section>
      </div>

      <div className="footer-bottom">
        <span>Copyright © 2026 {copy.copyright}</span>
        <a className="back-to-top" href="#top" aria-label="Back to top">
          {copy.backTop}
        </a>
      </div>
    </footer>
  );
}
