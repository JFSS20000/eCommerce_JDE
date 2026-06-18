import { AccessForm } from "@/components/AccessForm";
import { LocalizedText } from "@/components/LocalizedText";

export const metadata = {
  title: "Acceso B2B | Tessa Shop",
  description: "Formulario de acceso para clientes comerciales."
};

export default function AccessPage() {
  return (
    <section className="access-page">
      <div className="page-hero compact access-copy">
        <LocalizedText as="p" textKey="accessEyebrow" className="eyebrow" />
        <LocalizedText as="h1" textKey="accessTitle" />
        <LocalizedText as="p" textKey="accessBody" />
        <div className="mini-steps">
          <div><strong>1</strong><LocalizedText as="span" textKey="step1" /></div>
          <div><strong>2</strong><LocalizedText as="span" textKey="step2" /></div>
          <div><strong>3</strong><LocalizedText as="span" textKey="step3" /></div>
        </div>
      </div>

      <AccessForm />
    </section>
  );
}
