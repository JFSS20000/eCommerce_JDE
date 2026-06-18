# Tessa Shop PWA

PWA eCommerce B2B para Tessa Ecuador, inspirada en el flujo de catálogo, listas y recompra rápida de un portal profesional, pero adaptada al negocio floral.

## Qué incluye

- Next.js App Router
- Diseño responsive listo para móvil y escritorio
- PWA instalable con `manifest.webmanifest` y `sw.js`
- Home comercial B2B
- Catálogo floral con búsqueda y filtros
- Fichas de producto
- Carrito de cotización en `localStorage`
- Formulario de solicitud de acceso B2B
- Pantalla de admin demo para explicar módulos futuros
- Assets SVG propios para productos de demostración
- Configuración base para Vercel

## Estructura principal

```txt
app/
  page.tsx                 Home
  catalogo/page.tsx        Catálogo B2B
  producto/[slug]/page.tsx Ficha de producto
  cotizacion/page.tsx      Carrito de cotización
  acceso/page.tsx          Solicitud de acceso B2B
  admin/page.tsx           Admin demo
components/                Componentes UI
lib/products.ts            Catálogo demo
public/                    Manifest, service worker, íconos y productos SVG
vercel.json                Headers para PWA
```

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abrir:

```txt
http://localhost:3000
```

## Publicar en Vercel

### Opción 1: desde GitHub

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a Vercel.
3. Crea un nuevo proyecto.
4. Importa el repositorio.
5. Vercel detectará Next.js automáticamente.
6. Usa estos comandos:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: dejar vacío
7. Publica.

### Opción 2: con Vercel CLI

```bash
npm install
npm run build
npx vercel
```

Para producción:

```bash
npx vercel --prod
```

## Próximas integraciones recomendadas

Este MVP es visual y funcional en frontend. Para producción se recomienda agregar:

- Autenticación real para clientes B2B
- Base de datos PostgreSQL
- Panel admin real para productos, clientes y precios
- Email transaccional para solicitudes de cotización
- CRM o ERP para disponibilidad y pedidos
- Listas de precios por cliente o segmento
- Notificaciones push PWA
- Formularios conectados a backend o Vercel Functions

## Variables de entorno futuras

Cuando se conecte backend, se podrían usar variables como:

```env
DATABASE_URL=
NEXT_PUBLIC_SITE_URL=
SMTP_HOST=
SMTP_USER=
SMTP_PASSWORD=
CRM_API_KEY=
```

## Nota de alcance

Este proyecto deja preparada la experiencia recomendada para una primera publicación en Vercel. El envío de formularios está simulado; para producción se debe conectar a un backend, CRM, correo o endpoint serverless.
