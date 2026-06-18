import { QuoteCart } from "@/components/QuoteCart";

export const metadata = {
  title: "Cotización | Tessa Shop",
  description: "Carrito de cotización B2B para Tessa Shop."
};

export default function QuotePage() {
  return (
    <>
      <section className="page-hero compact">
        <p className="eyebrow">Solicitud de pedido</p>
        <h1>Revisa productos y envía una cotización comercial.</h1>
        <p>Este flujo está diseñado para confirmar disponibilidad, precio asignado y logística antes del pedido final.</p>
      </section>
      <QuoteCart />
    </>
  );
}
