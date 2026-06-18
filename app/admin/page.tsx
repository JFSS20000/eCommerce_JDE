import { AdminDemo } from "@/components/AdminDemo";
import { LocalizedText } from "@/components/LocalizedText";

export const metadata = {
  title: "Admin demo | Tessa Shop",
  description: "Módulos administrativos y configuración JD Edwards AIS para Tessa Shop."
};

export default function AdminPage() {
  return (
    <>
      <section className="page-hero compact">
        <LocalizedText as="p" textKey="adminEyebrow" className="eyebrow" />
        <LocalizedText as="h1" textKey="adminTitle" />
        <LocalizedText as="p" textKey="adminBody" />
      </section>
      <AdminDemo />
    </>
  );
}
