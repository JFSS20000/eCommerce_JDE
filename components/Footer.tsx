import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Tessa Shop</strong>
        <p>Portal PWA B2B para compra y cotización de flores ecuatorianas premium.</p>
      </div>
      <div className="footer-links">
        <Link href="/catalogo">Catálogo</Link>
        <Link href="/acceso">Solicitar acceso</Link>
        <Link href="/cotizacion">Ver cotización</Link>
      </div>
    </footer>
  );
}
