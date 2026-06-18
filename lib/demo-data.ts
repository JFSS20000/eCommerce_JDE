export type TimelineStep = {
  label: string;
  date: string;
  done: boolean;
};

export type TrackingRecord = {
  id: string;
  type: "quote" | "order";
  customer: string;
  status: string;
  destination: string;
  totalBoxes: number;
  createdAt: string;
  eta: string;
  items: string[];
  timeline: TimelineStep[];
};

export type Purchase = {
  id: string;
  customer: string;
  destination: string;
  date: string;
  totalBoxes: number;
  totalStems: number;
  status: string;
  items: Array<{
    slug: string;
    name: string;
    image: string;
    sourceUrl: string;
    category: string;
    color: string;
    stemLength: string;
    packing: string;
    quantity: number;
    jdeItemNumber: string;
  }>;
};

export const trackingRecords: TrackingRecord[] = [
  {
    id: "Q-2026-0048",
    type: "quote",
    customer: "Andes Floral Imports",
    status: "Precio y disponibilidad en revisión",
    destination: "Miami, USA",
    totalBoxes: 18,
    createdAt: "2026-06-12",
    eta: "2026-06-20",
    items: ["Explorer", "Esperance", "Antonia Gardens"],
    timeline: [
      { label: "Solicitud recibida", date: "2026-06-12 09:20", done: true },
      { label: "Validación comercial", date: "2026-06-12 11:15", done: true },
      { label: "Confirmación de disponibilidad", date: "En proceso", done: false },
      { label: "Cotización enviada al cliente", date: "Pendiente", done: false }
    ]
  },
  {
    id: "Q-2026-0052",
    type: "quote",
    customer: "Madrid Floral Group",
    status: "Cotización enviada",
    destination: "Madrid, Spain",
    totalBoxes: 24,
    createdAt: "2026-06-10",
    eta: "2026-06-19",
    items: ["Pomarosa", "# Pink", "Garden Spirit"],
    timeline: [
      { label: "Solicitud recibida", date: "2026-06-10 14:02", done: true },
      { label: "Disponibilidad confirmada", date: "2026-06-10 15:30", done: true },
      { label: "Cotización enviada", date: "2026-06-10 16:45", done: true },
      { label: "Esperando aprobación", date: "Pendiente", done: false }
    ]
  },
  {
    id: "P-2026-0091",
    type: "order",
    customer: "Pacific Flower Wholesale",
    status: "En empaque",
    destination: "Los Angeles, USA",
    totalBoxes: 36,
    createdAt: "2026-06-09",
    eta: "2026-06-18",
    items: ["Explorer", "Fortune", "Esperance"],
    timeline: [
      { label: "Pedido confirmado", date: "2026-06-09 10:10", done: true },
      { label: "Corte y clasificación", date: "2026-06-10 07:00", done: true },
      { label: "Empaque", date: "En proceso", done: false },
      { label: "Despacho", date: "Pendiente", done: false }
    ]
  },
  {
    id: "P-2026-0087",
    type: "order",
    customer: "Tokyo Flower Partners",
    status: "Despachado",
    destination: "Tokyo, Japan",
    totalBoxes: 42,
    createdAt: "2026-06-04",
    eta: "2026-06-13",
    items: ["Antonia Gardens", "Aurora Gardens", "Constellation"],
    timeline: [
      { label: "Pedido confirmado", date: "2026-06-04 08:30", done: true },
      { label: "Corte y clasificación", date: "2026-06-05 06:45", done: true },
      { label: "Empaque", date: "2026-06-05 14:20", done: true },
      { label: "Despacho", date: "2026-06-06 04:10", done: true }
    ]
  }
];

export const purchases: Purchase[] = [
  {
    id: "P-2026-0091",
    customer: "Pacific Flower Wholesale",
    destination: "Los Angeles, USA",
    date: "2026-06-09",
    totalBoxes: 36,
    totalStems: 21600,
    status: "En empaque",
    items: [
      {
        slug: "explorer",
        name: "Explorer",
        image: "/products/explorer.svg",
        sourceUrl: "https://tessacorporation.com/product/explorer-2/",
        category: "Premium Roses",
        color: "Red",
        stemLength: "60 cm",
        packing: "HB / QB / FB",
        quantity: 18,
        jdeItemNumber: "FLR-ROS-EXP"
      },
      {
        slug: "fortune",
        name: "Fortune",
        image: "/products/fortune.svg",
        sourceUrl: "https://tessacorporation.com/product/fortune-2/",
        category: "Premium Roses",
        color: "Red",
        stemLength: "60 cm",
        packing: "HB / QB",
        quantity: 10,
        jdeItemNumber: "FLR-ROS-FOR"
      },
      {
        slug: "esperance",
        name: "Esperance",
        image: "/products/esperance.svg",
        sourceUrl: "https://tessacorporation.com/product/esperance-2/",
        category: "Premium Roses",
        color: "Bicolor",
        stemLength: "50 cm",
        packing: "HB / QB",
        quantity: 8,
        jdeItemNumber: "FLR-ROS-ESP"
      }
    ]
  },
  {
    id: "P-2026-0087",
    customer: "Tokyo Flower Partners",
    destination: "Tokyo, Japan",
    date: "2026-06-04",
    totalBoxes: 42,
    totalStems: 16800,
    status: "Despachado",
    items: [
      {
        slug: "antonia-gardens",
        name: "Antonia Gardens",
        image: "/products/antonia-gardens.svg",
        sourceUrl: "https://tessacorporation.com/product/antonia-gardens/",
        category: "Garden Like Roses",
        color: "Cream",
        stemLength: "50 cm",
        packing: "QB / HB",
        quantity: 12,
        jdeItemNumber: "FLR-GRD-ANT"
      },
      {
        slug: "aurora-gardens",
        name: "Aurora Gardens",
        image: "/products/aurora-gardens.svg",
        sourceUrl: "https://tessacorporation.com/product/aurora-gardens/",
        category: "Garden Like Roses",
        color: "Cream",
        stemLength: "50 cm",
        packing: "QB / HB",
        quantity: 15,
        jdeItemNumber: "FLR-GRD-AUR"
      },
      {
        slug: "constellation",
        name: "Constellation",
        image: "/products/constellation.svg",
        sourceUrl: "https://tessacorporation.com/product/constellation/",
        category: "Spray Roses",
        color: "Pink",
        stemLength: "50 cm",
        packing: "HB / QB",
        quantity: 15,
        jdeItemNumber: "FLR-SPR-CON"
      }
    ]
  },
  {
    id: "P-2026-0074",
    customer: "Madrid Floral Group",
    destination: "Madrid, Spain",
    date: "2026-05-28",
    totalBoxes: 28,
    totalStems: 12600,
    status: "Entregado",
    items: [
      {
        slug: "pomarosa",
        name: "Pomarosa",
        image: "/products/pomarosa.svg",
        sourceUrl: "https://tessacorporation.com/product/pomarosa-2/",
        category: "Premium Roses",
        color: "Pink",
        stemLength: "50 cm",
        packing: "HB / QB",
        quantity: 14,
        jdeItemNumber: "FLR-ROS-POM"
      },
      {
        slug: "pink",
        name: "# Pink",
        image: "/products/pink.svg",
        sourceUrl: "https://tessacorporation.com/product/pink/",
        category: "Hashtag Spray Roses",
        color: "Pink",
        stemLength: "50 cm",
        packing: "HB / QB",
        quantity: 14,
        jdeItemNumber: "FLR-HSP-PIN"
      }
    ]
  }
];
