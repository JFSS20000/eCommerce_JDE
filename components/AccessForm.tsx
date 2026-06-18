"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export function AccessForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="success-panel inline-success">
        <span className="success-icon">✓</span>
        <h2>Solicitud registrada</h2>
        <p>Demo del MVP: en producción esta solicitud se enviaría al CRM, email comercial o backend.</p>
      </div>
    );
  }

  return (
    <form className="access-form" onSubmit={handleSubmit}>
      <label>
        Nombre completo
        <input required placeholder="Fernando Sarmiento" />
      </label>
      <label>
        Empresa
        <input required placeholder="Nombre de empresa" />
      </label>
      <label>
        Email corporativo
        <input required type="email" placeholder="compras@empresa.com" />
      </label>
      <label>
        WhatsApp
        <input required placeholder="+593..." />
      </label>
      <label>
        País destino
        <input required placeholder="Estados Unidos, España, Chile..." />
      </label>
      <label>
        Tipo de negocio
        <select required defaultValue="">
          <option value="" disabled>Seleccionar</option>
          <option>Importador</option>
          <option>Mayorista</option>
          <option>Floristería</option>
          <option>Retailer</option>
          <option>Wedding planner</option>
          <option>Otro</option>
        </select>
      </label>
      <label>
        Volumen estimado
        <select required defaultValue="">
          <option value="" disabled>Seleccionar</option>
          <option>Menos de 10 cajas / semana</option>
          <option>10 a 50 cajas / semana</option>
          <option>50 a 150 cajas / semana</option>
          <option>Más de 150 cajas / semana</option>
        </select>
      </label>
      <label className="full-field">
        Mensaje
        <textarea placeholder="Cuéntanos qué variedades, colores o temporadas te interesan." />
      </label>
      <button type="submit" className="button full-field">Enviar solicitud de acceso</button>
      <p className="fine-print full-field">MVP visual: el envío real se configura al conectar backend o formularios de Vercel/CRM.</p>
    </form>
  );
}
