import { LocalizedText } from "@/components/LocalizedText";
import { PurchaseHistoryClient } from "@/components/PurchaseHistoryClient";

export const metadata = {
  title: "Compras pasadas | Tessa Shop",
  description: "Historial demo de compras B2B y repetición de pedidos."
};

export default function PurchasesPage() {
  return (
    <>
      <section className="page-hero compact">
        <LocalizedText as="p" textKey="purchasesEyebrow" className="eyebrow" />
        <LocalizedText as="h1" textKey="purchasesTitle" />
        <LocalizedText as="p" textKey="purchasesBody" />
      </section>
      <PurchaseHistoryClient />
    </>
  );
}
