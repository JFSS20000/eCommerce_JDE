const modules = [
  { name: "Productos", status: "Listo para carga manual", detail: "Variedades, colores, largos, empaques y fotos." },
  { name: "Clientes", status: "Demo", detail: "Aprobación de clientes B2B y roles." },
  { name: "Precios", status: "Preparado", detail: "Listas por cliente o grupo comercial." },
  { name: "Disponibilidad", status: "Preparado", detail: "Stock por semana, finca, largo y empaque." },
  { name: "Cotizaciones", status: "MVP", detail: "Recepción y seguimiento de solicitudes." },
  { name: "Promociones", status: "Preparado", detail: "Banners, campañas y temporadas." }
];

export const metadata = {
  title: "Admin demo | Tessa Shop",
  description: "Módulos administrativos propuestos para Tessa Shop."
};

export default function AdminPage() {
  return (
    <>
      <section className="page-hero compact">
        <p className="eyebrow">Backoffice propuesto</p>
        <h1>Panel administrativo para operar catálogo, clientes y cotizaciones.</h1>
        <p>Esta pantalla es una maqueta funcional para explicar el alcance administrativo del MVP.</p>
      </section>
      <section className="admin-grid">
        {modules.map((module) => (
          <article key={module.name} className="admin-card">
            <span>{module.status}</span>
            <h2>{module.name}</h2>
            <p>{module.detail}</p>
          </article>
        ))}
      </section>
    </>
  );
}
