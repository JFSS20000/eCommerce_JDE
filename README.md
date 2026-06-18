# Tessa Shop PWA

PWA eCommerce B2B para Tessa Ecuador, inspirada en un portal profesional de catálogo, listas, recompra y cotización, pero adaptada al negocio floral y preparada para publicar en Vercel.

## Novedades de esta versión

- Cambio de idioma desde la interfaz: Español, Inglés y Ruso.
- `Admin demo` funcional con pestañas, configuración local y bitácora.
- Configuración para conexión con JD Edwards EnterpriseOne AIS Server.
- API serverless `/api/jde/ais-test` para probar conexión AIS desde Vercel.
- API serverless `/api/tessa-image` para obtener imágenes desde páginas públicas de producto de Tessa.
- Página de seguimiento de cotizaciones y pedidos: `/seguimiento`.
- Página de compras pasadas y repetición de pedidos: `/compras`.
- Catálogo actualizado con productos reales de la tienda pública de Tessa y `sourceUrl` por flor.
- Cotizaciones generadas en localStorage con código tipo `Q-2026-1234`.
- Historial demo de pedidos y compras pasadas.

## Rutas principales

```txt
/                         Home B2B
/catalogo                 Catálogo floral
/producto/[slug]          Ficha de flor
/cotizacion               Carrito y solicitud B2B
/seguimiento              Seguimiento de cotización o pedido
/compras                  Compras pasadas y repetir pedido
/acceso                   Solicitud de acceso B2B
/admin                    Admin demo + JD Edwards AIS
/api/tessa-image          Proxy de imagen pública desde Tessa Shop
/api/jde/ais-test         Prueba serverless de conexión AIS
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

## Publicar en Vercel desde GitHub

1. Sube el contenido del proyecto al repositorio.
2. Entra a Vercel.
3. Crea un nuevo proyecto.
4. Importa el repositorio de GitHub.
5. Framework Preset: `Next.js`.
6. Build Command: `npm run build`.
7. Output Directory: dejar vacío.
8. Deploy.

## Variables de entorno para JD Edwards AIS

Configura estas variables en Vercel en **Project Settings > Environment Variables**:

```env
JDE_AIS_BASE_URL=https://ais.example.com
JDE_AIS_ENVIRONMENT=JPS920
JDE_AIS_ROLE=*ALL
JDE_AIS_USERNAME=
JDE_AIS_PASSWORD=
JDE_ORCH_PRODUCTS=ORCH_TESSA_PRODUCTS
JDE_ORCH_INVENTORY=ORCH_TESSA_INVENTORY
JDE_ORCH_QUOTE=ORCH_TESSA_QUOTE_CREATE
JDE_ORCH_ORDER_STATUS=ORCH_TESSA_ORDER_STATUS
```

El admin demo permite guardar parámetros en `localStorage` para la demostración. Para producción, las credenciales reales deben vivir en variables de entorno de Vercel, no en el navegador.

## Flujo JD Edwards AIS sugerido

- Productos: catálogo Tessa → `ORCH_TESSA_PRODUCTS`.
- Inventario/disponibilidad: stock por variedad/largo/empaque → `ORCH_TESSA_INVENTORY`.
- Cotización: carrito B2B → `ORCH_TESSA_QUOTE_CREATE`.
- Pedido: seguimiento y estado logístico → `ORCH_TESSA_ORDER_STATUS`.

La ruta `/api/jde/ais-test` intenta consultar:

- `/jderest/tokenrequest` si hay usuario y contraseña.
- `/jderest/defaultconfig` si solo se configura la URL base.

## Imágenes desde Tessa Shop

Cada producto tiene un `sourceUrl` hacia su página pública en `https://tessacorporation.com/product/...`. El componente `ProductImage` llama a `/api/tessa-image`, que intenta leer la imagen pública desde la página de Tessa y la cachea en el navegador. Si la imagen no se puede obtener, se usa un SVG fallback local para que la PWA nunca quede rota.

## Códigos demo para seguimiento

Puedes probar:

```txt
Q-2026-0048
Q-2026-0052
P-2026-0091
P-2026-0087
```

Las nuevas cotizaciones creadas desde `/cotizacion` también generan códigos de seguimiento y se guardan en `localStorage`.

## Nota de alcance

Este proyecto es un MVP publicable y navegable en Vercel. La autenticación, precios reales, inventario real, persistencia de base de datos y ejecución final de orquestaciones JDE deben conectarse en la siguiente fase.

- Footer eCommerce actualizado con navegación B2B, soporte, cuenta, bloque JDE/AIS, newsletter y enlace para volver arriba.

## Configuración de colores

La PWA incluye un configurador visual de colores en `Admin demo > Colores`.

Funciones incluidas:

- Presets: Tessa clásico, Premium oscuro, Rose export y Clean B2B.
- Edición de tokens de marca: primario, títulos, acento, fondos, textos y footer.
- Vista previa en tiempo real.
- Persistencia demo en `localStorage`.
- Restauración del tema Tessa clásico.

Archivos principales:

- `lib/theme.ts`: tokens, presets y funciones de aplicar/guardar/restaurar tema.
- `components/ThemeProvider.tsx`: carga el tema guardado al abrir la PWA.
- `components/AdminDemo.tsx`: pestaña visual para configurar colores.
- `app/globals.css`: variables CSS usadas por toda la interfaz.

En producción, si se desea que la configuración sea global para todos los usuarios, conectar estos tokens a una tabla/configuración en base de datos o a una orquestación AIS/JDE administrada desde backend.
