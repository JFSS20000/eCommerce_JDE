import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteButton } from "@/components/QuoteButton";
import { getProductBySlug, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado | Tessa Shop" };
  return {
    title: `${product.name} | Tessa Shop`,
    description: product.description
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <section className="product-detail">
      <Link href="/catalogo" className="text-link">← Volver al catálogo</Link>
      <div className="product-detail-grid">
        <div className="detail-image-panel">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{product.category} · {product.color}</p>
          <h1>{product.name}</h1>
          <p className="detail-description">{product.description}</p>
          <div className="tag-row large">
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="spec-grid">
            <div>
              <span>Disponibilidad</span>
              <strong>{product.availability}</strong>
            </div>
            <div>
              <span>Temporada</span>
              <strong>{product.season}</strong>
            </div>
            <div>
              <span>Largos</span>
              <strong>{product.stemLengths.join(", ")}</strong>
            </div>
            <div>
              <span>Empaque</span>
              <strong>{product.packing}</strong>
            </div>
            <div>
              <span>Bunch</span>
              <strong>{product.bunch}</strong>
            </div>
            <div>
              <span>Caja</span>
              <strong>{product.box}</strong>
            </div>
          </div>

          <div className="price-panel">
            <span>{product.priceLabel}</span>
            <p>Los precios finales se asignan por cliente, volumen, destino y temporada.</p>
          </div>

          <div className="detail-actions">
            <QuoteButton product={product} />
            <Link href="/acceso" className="ghost-button">Solicitar acceso</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
