"use client";

import { useRouter } from "next/navigation";
import { purchases } from "@/lib/demo-data";
import { ProductImage } from "./ProductImage";
import { useLanguage } from "./LanguageProvider";

export function PurchaseHistoryClient() {
  const router = useRouter();
  const { t } = useLanguage();

  function repeatPurchase(id: string) {
    const purchase = purchases.find((item) => item.id === id);
    if (!purchase) return;
    window.localStorage.setItem("tessa_quote", JSON.stringify(purchase.items));
    window.dispatchEvent(new Event("quote-updated"));
    router.push("/cotizacion");
  }

  return (
    <section className="purchase-list">
      {purchases.map((purchase) => (
        <article key={purchase.id} className="purchase-card">
          <div className="purchase-card-header">
            <div>
              <p className="eyebrow">{purchase.status}</p>
              <h2>{purchase.id}</h2>
              <p>{purchase.customer} · {purchase.destination}</p>
            </div>
            <div className="purchase-totals">
              <strong>{purchase.totalBoxes}</strong>
              <span>cajas</span>
            </div>
          </div>

          <div className="purchase-items">
            {purchase.items.map((item) => (
              <div key={`${purchase.id}-${item.slug}`}>
                <ProductImage sourceUrl={item.sourceUrl} fallback={item.image} alt={item.name} />
                <span>{item.name}</span>
                <small>{item.quantity} cajas · {item.stemLength}</small>
              </div>
            ))}
          </div>

          <div className="purchase-actions">
            <span>{purchase.date} · {purchase.totalStems.toLocaleString()} tallos</span>
            <button className="button" type="button" onClick={() => repeatPurchase(purchase.id)}>{t("repeatOrder")}</button>
          </div>
        </article>
      ))}
    </section>
  );
}
