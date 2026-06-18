import { Suspense } from "react";
import { LocalizedText } from "@/components/LocalizedText";
import { TrackingClient } from "@/components/TrackingClient";

export const metadata = {
  title: "Seguimiento | Tessa Shop",
  description: "Seguimiento demo de cotizaciones y pedidos B2B."
};

export default function TrackingPage() {
  return (
    <>
      <section className="page-hero compact">
        <LocalizedText as="p" textKey="trackingEyebrow" className="eyebrow" />
        <LocalizedText as="h1" textKey="trackingTitle" />
        <LocalizedText as="p" textKey="trackingBody" />
      </section>
      <Suspense fallback={<div className="empty-state">Cargando seguimiento...</div>}>
        <TrackingClient />
      </Suspense>
    </>
  );
}
