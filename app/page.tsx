import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const stats = [
  { value: "PWA", label: "Instalable en móvil y escritorio" },
  { value: "B2B", label: "Precios y acceso por cliente" },
  { value: "24/7", label: "Catálogo y recompra disponibles" }
];

const features = [
  "Catálogo visual por variedad, color, largo y temporada",
  "Carrito de cotización antes de checkout transaccional",
  "Listas de compra para pedidos recurrentes",
  "Preparado para integración con ERP, CRM e inventario"
];

export default function HomePage() {
  const highlighted = products.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">PWA eCommerce floral B2B</p>
          <h1>Flores ecuatorianas premium, listas para cotizar en minutos.</h1>
          <p>
            Una experiencia tipo app para clientes mayoristas: catálogo privado, disponibilidad, favoritos,
            listas y solicitudes de pedido desde cualquier dispositivo.
          </p>
          <div className="hero-actions">
            <Link href="/catalogo" className="button">Explorar catálogo</Link>
            <Link href="/acceso" className="ghost-button">Solicitar acceso B2B</Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="flower-card main-flower-card">
            <span>Freedom Rose</span>
            <strong>Alta disponibilidad</strong>
          </div>
          <div className="flower-card secondary-flower-card">
            <span>Wedding Mix</span>
            <strong>Bajo pedido</strong>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        {stats.map((item) => (
          <div key={item.value}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Enfoque recomendado</p>
          <h2>No es una tienda pública tradicional. Es un portal B2B privado.</h2>
          <p>
            El MVP está pensado para validar ventas digitales sin romper el proceso comercial actual:
            clientes aprobados agregan productos a una cotización y el equipo confirma precio, stock y logística.
          </p>
        </div>
        <div className="feature-list">
          {features.map((feature) => (
            <div key={feature}>
              <span>✓</span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Productos destacados</p>
            <h2>Catálogo inicial para demostración comercial</h2>
          </div>
          <Link href="/catalogo" className="text-link">Ver todos</Link>
        </div>
        <div className="product-grid">
          {highlighted.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="cta-panel">
        <p className="eyebrow">Siguiente fase</p>
        <h2>Conecta precios, disponibilidad y clientes aprobados.</h2>
        <p>
          La estructura está preparada para evolucionar hacia login real, listas personalizadas,
          sincronización con ERP y notificaciones PWA.
        </p>
        <Link href="/admin" className="button">Ver admin demo</Link>
      </section>
    </>
  );
}
