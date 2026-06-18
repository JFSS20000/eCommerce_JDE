import { CatalogClient } from "@/components/CatalogClient";
import { LocalizedText } from "@/components/LocalizedText";

export const metadata = {
  title: "Catálogo | Tessa Shop",
  description: "Catálogo B2B de flores Tessa, con filtros y cotización."
};

export default function CatalogPage() {
  return (
    <>
      <section className="page-hero compact">
        <LocalizedText as="p" textKey="catalogEyebrow" className="eyebrow" />
        <LocalizedText as="h1" textKey="catalogTitle" />
        <LocalizedText as="p" textKey="catalogBody" />
      </section>
      <CatalogClient />
    </>
  );
}
