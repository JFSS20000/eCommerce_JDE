import { QuoteCart } from "@/components/QuoteCart";
import { LocalizedText } from "@/components/LocalizedText";

export const metadata = {
  title: "Cotización | Tessa Shop",
  description: "Carrito de cotización B2B para Tessa Shop."
};

export default function QuotePage() {
  return (
    <>
      <section className="page-hero compact">
        <LocalizedText as="p" textKey="quoteEyebrow" className="eyebrow" />
        <LocalizedText as="h1" textKey="quoteTitle" />
        <LocalizedText as="p" textKey="quoteBody" />
      </section>
      <QuoteCart />
    </>
  );
}
