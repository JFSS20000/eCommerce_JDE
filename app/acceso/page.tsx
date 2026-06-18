import { AccessForm } from "@/components/AccessForm";

export const metadata = {
  title: "Acceso B2B | Tessa Shop",
  description: "Formulario de acceso para clientes comerciales."
};

export default function AccessPage() {
  return (
    <section className="access-page">
      <div className="page-hero compact access-copy">
        <p className="eyebrow">Acceso privado</p>
        <h1>Solicita acceso al portal B2B.</h1>
        <p>
          En producción este formulario se conectaría con CRM, email transaccional o el equipo comercial de Tessa.
        </p>
        <div className="mini-steps">
          <div><strong>1</strong><span>Registro de empresa</span></div>
          <div><strong>2</strong><span>Validación comercial</span></div>
          <div><strong>3</strong><span>Catálogo y precios privados</span></div>
        </div>
      </div>

      <AccessForm />
    </section>
  );
}
