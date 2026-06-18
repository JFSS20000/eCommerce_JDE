import { CatalogClient } from "@/components/CatalogClient";

export const metadata = {
  title: "Catálogo | Tessa Shop",
  description: "Catálogo B2B de flores, bouquets y productos de temporada."
};

export default function CatalogPage() {
  return (
    <>
      <section className="page-hero compact">
        <p className="eyebrow">Catálogo B2B</p>
        <h1>Explora variedades, colores, disponibilidad y temporadas.</h1>
        <p>Los precios finales y condiciones comerciales se muestran solo para clientes aprobados.</p>
      </section>
      <CatalogClient />
    </>
  );
}
