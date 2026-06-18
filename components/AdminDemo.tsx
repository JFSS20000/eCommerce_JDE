"use client";

import { useEffect, useMemo, useState } from "react";
import { products } from "@/lib/products";
import { trackingRecords, purchases } from "@/lib/demo-data";

type AisConfig = {
  baseUrl: string;
  environment: string;
  role: string;
  username: string;
  password: string;
  productOrchestration: string;
  inventoryOrchestration: string;
  quoteOrchestration: string;
  orderOrchestration: string;
};

type SyncLog = {
  id: string;
  label: string;
  detail: string;
  at: string;
};

const defaultConfig: AisConfig = {
  baseUrl: "https://ais.example.com",
  environment: "JPS920",
  role: "*ALL",
  username: "",
  password: "",
  productOrchestration: "ORCH_TESSA_PRODUCTS",
  inventoryOrchestration: "ORCH_TESSA_INVENTORY",
  quoteOrchestration: "ORCH_TESSA_QUOTE_CREATE",
  orderOrchestration: "ORCH_TESSA_ORDER_STATUS"
};

const modules = [
  { name: "Productos", status: "Activo", detail: `${products.length} variedades Tessa con sourceUrl de tienda pública.` },
  { name: "Clientes", status: "Demo", detail: "Aprobación B2B, segmentos y listas de precio por cliente." },
  { name: "Cotizaciones", status: "Funcional", detail: `${trackingRecords.filter((record) => record.type === "quote").length} cotizaciones demo + cotizaciones creadas en localStorage.` },
  { name: "Pedidos", status: "Funcional", detail: `${trackingRecords.filter((record) => record.type === "order").length} pedidos demo con línea de tiempo.` },
  { name: "Compras", status: "Funcional", detail: `${purchases.length} compras pasadas demo para repetir pedido.` },
  { name: "JD Edwards AIS", status: "Configurable", detail: "Parámetros AIS, prueba serverless y orquestaciones sugeridas." }
];

export function AdminDemo() {
  const [config, setConfig] = useState<AisConfig>(defaultConfig);
  const [logs, setLogs] = useState<SyncLog[]>([]);
  const [activeTab, setActiveTab] = useState<"overview" | "ais" | "sync">("overview");
  const [testResult, setTestResult] = useState<string>("");
  const [testing, setTesting] = useState(false);

  useEffect(() => {
    const storedConfig = window.localStorage.getItem("tessa_ais_config");
    const storedLogs = window.localStorage.getItem("tessa_sync_logs");
    if (storedConfig) setConfig(JSON.parse(storedConfig));
    if (storedLogs) setLogs(JSON.parse(storedLogs));
  }, []);

  const envPreview = useMemo(() => {
    return [
      `JDE_AIS_BASE_URL=${config.baseUrl}`,
      `JDE_AIS_ENVIRONMENT=${config.environment}`,
      `JDE_AIS_ROLE=${config.role}`,
      "JDE_AIS_USERNAME=***",
      "JDE_AIS_PASSWORD=***",
      `JDE_ORCH_PRODUCTS=${config.productOrchestration}`,
      `JDE_ORCH_INVENTORY=${config.inventoryOrchestration}`,
      `JDE_ORCH_QUOTE=${config.quoteOrchestration}`,
      `JDE_ORCH_ORDER_STATUS=${config.orderOrchestration}`
    ].join("\n");
  }, [config]);

  function updateField(field: keyof AisConfig, value: string) {
    setConfig((current) => ({ ...current, [field]: value }));
  }

  function saveConfig() {
    window.localStorage.setItem("tessa_ais_config", JSON.stringify({ ...config, password: "" }));
    addLog("Configuración AIS guardada", "Los parámetros quedaron guardados en localStorage para demo. En producción usar variables de entorno de Vercel.");
  }

  function addLog(label: string, detail: string) {
    const nextLog: SyncLog = {
      id: `${Date.now()}`,
      label,
      detail,
      at: new Date().toLocaleString()
    };
    const nextLogs = [nextLog, ...logs].slice(0, 8);
    setLogs(nextLogs);
    window.localStorage.setItem("tessa_sync_logs", JSON.stringify(nextLogs));
  }

  function simulateSync(type: "products" | "inventory" | "quotes" | "orders") {
    const map = {
      products: ["Productos sincronizados", `${products.length} productos preparados para ${config.productOrchestration}.`],
      inventory: ["Inventario sincronizado", `Disponibilidad simulada enviada a ${config.inventoryOrchestration}.`],
      quotes: ["Cotizaciones exportadas", `Cotizaciones listas para ${config.quoteOrchestration}.`],
      orders: ["Estados de pedido consultados", `Consulta simulada con ${config.orderOrchestration}.`]
    } as const;
    addLog(map[type][0], map[type][1]);
  }

  async function testAisConnection() {
    setTesting(true);
    setTestResult("Probando conexión AIS...");
    try {
      const response = await fetch("/api/jde/ais-test", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(config)
      });
      const data = await response.json();
      const message = `${data.ok ? "OK" : "ERROR"} · ${data.message || "Sin mensaje"} ${data.status ? `(HTTP ${data.status})` : ""}`;
      setTestResult(message);
      addLog("Prueba de conexión AIS", message);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      setTestResult(message);
      addLog("Error de conexión AIS", message);
    } finally {
      setTesting(false);
    }
  }

  return (
    <section className="admin-demo">
      <div className="tabs admin-tabs">
        <button className={activeTab === "overview" ? "active" : ""} onClick={() => setActiveTab("overview")} type="button">Resumen</button>
        <button className={activeTab === "ais" ? "active" : ""} onClick={() => setActiveTab("ais")} type="button">JD Edwards AIS</button>
        <button className={activeTab === "sync" ? "active" : ""} onClick={() => setActiveTab("sync")} type="button">Sincronización</button>
      </div>

      {activeTab === "overview" && (
        <div className="admin-grid">
          {modules.map((module) => (
            <article key={module.name} className="admin-card">
              <span>{module.status}</span>
              <h2>{module.name}</h2>
              <p>{module.detail}</p>
            </article>
          ))}
        </div>
      )}

      {activeTab === "ais" && (
        <div className="admin-two-column">
          <form className="admin-form" onSubmit={(event) => { event.preventDefault(); saveConfig(); }}>
            <p className="eyebrow">Configuración AIS</p>
            <h2>Conexión JD Edwards EnterpriseOne AIS Server</h2>
            <label>
              AIS Base URL
              <input value={config.baseUrl} onChange={(event) => updateField("baseUrl", event.target.value)} placeholder="https://ais.midominio.com" />
            </label>
            <div className="form-row">
              <label>
                Environment
                <input value={config.environment} onChange={(event) => updateField("environment", event.target.value)} placeholder="JPS920" />
              </label>
              <label>
                Role
                <input value={config.role} onChange={(event) => updateField("role", event.target.value)} placeholder="*ALL" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Username
                <input value={config.username} onChange={(event) => updateField("username", event.target.value)} placeholder="jde_user" />
              </label>
              <label>
                Password / token
                <input value={config.password} onChange={(event) => updateField("password", event.target.value)} type="password" placeholder="No guardar en frontend en producción" />
              </label>
            </div>
            <label>
              Orquestación productos
              <input value={config.productOrchestration} onChange={(event) => updateField("productOrchestration", event.target.value)} />
            </label>
            <label>
              Orquestación inventario
              <input value={config.inventoryOrchestration} onChange={(event) => updateField("inventoryOrchestration", event.target.value)} />
            </label>
            <label>
              Orquestación cotización
              <input value={config.quoteOrchestration} onChange={(event) => updateField("quoteOrchestration", event.target.value)} />
            </label>
            <label>
              Orquestación estado de pedido
              <input value={config.orderOrchestration} onChange={(event) => updateField("orderOrchestration", event.target.value)} />
            </label>
            <div className="admin-actions">
              <button className="button" type="submit">Guardar configuración</button>
              <button className="ghost-button" type="button" onClick={testAisConnection} disabled={testing}>Probar conexión</button>
            </div>
            {testResult && <p className="fine-print result-line">{testResult}</p>}
          </form>

          <article className="admin-card env-card">
            <span>Vercel env</span>
            <h2>Variables recomendadas</h2>
            <pre>{envPreview}</pre>
            <p>Para producción, no guardes credenciales en el navegador. Configura estas variables en Vercel y deja el formulario solo para parámetros no sensibles.</p>
          </article>
        </div>
      )}

      {activeTab === "sync" && (
        <div className="admin-two-column">
          <article className="admin-card sync-card">
            <span>Jobs demo</span>
            <h2>Ejecutar sincronizaciones simuladas</h2>
            <p>Estos botones registran actividad local y muestran cómo quedaría el flujo de integración con AIS.</p>
            <div className="admin-actions wrap">
              <button className="button" onClick={() => simulateSync("products")} type="button">Sincronizar productos</button>
              <button className="button" onClick={() => simulateSync("inventory")} type="button">Sincronizar inventario</button>
              <button className="button" onClick={() => simulateSync("quotes")} type="button">Exportar cotizaciones</button>
              <button className="button" onClick={() => simulateSync("orders")} type="button">Consultar pedidos</button>
            </div>
          </article>

          <article className="admin-card log-card">
            <span>Bitácora</span>
            <h2>Últimos eventos</h2>
            {logs.length ? (
              <div className="log-list">
                {logs.map((log) => (
                  <div key={log.id}>
                    <strong>{log.label}</strong>
                    <p>{log.detail}</p>
                    <small>{log.at}</small>
                  </div>
                ))}
              </div>
            ) : (
              <p>No hay eventos todavía. Ejecuta una sincronización o guarda configuración.</p>
            )}
          </article>
        </div>
      )}
    </section>
  );
}
