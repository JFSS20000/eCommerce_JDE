import Link from "next/link";
import { FloatingQuote } from "./FloatingQuote";

const navigation = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/cotizacion", label: "Cotización" },
  { href: "/acceso", label: "Acceso B2B" },
  { href: "/admin", label: "Admin demo" }
];

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Tessa Shop inicio">
        <span className="brand-mark">T</span>
        <span>
          <strong>Tessa Shop</strong>
          <small>Floral B2B Ecuador</small>
        </span>
      </Link>

      <nav className="nav" aria-label="Navegación principal">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <FloatingQuote />
    </header>
  );
}
