export type Product = {
  slug: string;
  name: string;
  category: string;
  color: string;
  tone: string;
  stemLengths: string[];
  packing: string;
  availability: "Alta" | "Media" | "Baja" | "Bajo pedido";
  season: string;
  description: string;
  image: string;
  tags: string[];
  priceLabel: string;
  bunch: string;
  box: string;
};

export const products: Product[] = [
  {
    slug: "freedom-rose",
    name: "Freedom Rose",
    category: "Rosas",
    color: "Rojo",
    tone: "Rojo intenso",
    stemLengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
    packing: "HB / QB / FB",
    availability: "Alta",
    season: "Todo el año",
    description: "Rosa roja premium ideal para San Valentín, retail y bouquets de alto impacto.",
    image: "/products/freedom-rose.svg",
    tags: ["Más vendido", "San Valentín", "Premium"],
    priceLabel: "Precio B2B bajo sesión",
    bunch: "25 tallos por bunch",
    box: "Según largo y empaque"
  },
  {
    slug: "mondial-rose",
    name: "Mondial Rose",
    category: "Rosas",
    color: "Blanco",
    tone: "Blanco crema",
    stemLengths: ["40 cm", "50 cm", "60 cm", "70 cm", "80 cm"],
    packing: "HB / QB",
    availability: "Alta",
    season: "Bodas y eventos",
    description: "Variedad blanca elegante para eventos, bodas y arreglos florales sofisticados.",
    image: "/products/mondial-rose.svg",
    tags: ["Wedding", "Elegante", "Eventos"],
    priceLabel: "Precio B2B bajo sesión",
    bunch: "25 tallos por bunch",
    box: "Full box o half box"
  },
  {
    slug: "pink-floyd-rose",
    name: "Pink Floyd Rose",
    category: "Rosas",
    color: "Fucsia",
    tone: "Fucsia vibrante",
    stemLengths: ["50 cm", "60 cm", "70 cm", "80 cm"],
    packing: "HB / FB",
    availability: "Media",
    season: "Todo el año",
    description: "Rosa de color vibrante con excelente presencia en floristería y vitrinas retail.",
    image: "/products/pink-floyd-rose.svg",
    tags: ["Color intenso", "Retail", "Novedad"],
    priceLabel: "Precio B2B bajo sesión",
    bunch: "25 tallos por bunch",
    box: "Según disponibilidad"
  },
  {
    slug: "playa-blanca-garden",
    name: "Playa Blanca Garden",
    category: "Garden Roses",
    color: "Blanco",
    tone: "Blanco perlado",
    stemLengths: ["40 cm", "50 cm", "60 cm"],
    packing: "QB / HB",
    availability: "Bajo pedido",
    season: "Eventos especiales",
    description: "Garden rose de apariencia romántica para wedding planners y arreglos de lujo.",
    image: "/products/playa-blanca-garden.svg",
    tags: ["Luxury", "Wedding", "Bajo pedido"],
    priceLabel: "Precio B2B bajo sesión",
    bunch: "12 o 25 tallos por bunch",
    box: "Packing especial"
  },
  {
    slug: "sweet-sara-spray",
    name: "Sweet Sara Spray",
    category: "Spray Roses",
    color: "Rosado",
    tone: "Rosado suave",
    stemLengths: ["40 cm", "50 cm", "60 cm"],
    packing: "HB / QB",
    availability: "Media",
    season: "Todo el año",
    description: "Spray rose delicada para bouquets mixtos, eCommerce floral y floristerías premium.",
    image: "/products/sweet-sara-spray.svg",
    tags: ["Bouquets", "Delicado", "Premium"],
    priceLabel: "Precio B2B bajo sesión",
    bunch: "10 tallos por bunch",
    box: "Según receta del cliente"
  },
  {
    slug: "sunny-mix-bouquet",
    name: "Sunny Mix Bouquet",
    category: "Bouquets",
    color: "Mixto",
    tone: "Amarillo y naranja",
    stemLengths: ["Receta personalizada"],
    packing: "Sleeve / Caja exportación",
    availability: "Alta",
    season: "Primavera / Verano",
    description: "Bouquet mixto listo para retail con receta adaptable por temporada y mercado.",
    image: "/products/sunny-mix-bouquet.svg",
    tags: ["Retail ready", "Mix", "Temporada"],
    priceLabel: "Cotización por receta",
    bunch: "Receta por unidad",
    box: "Unidades por caja configurable"
  },
  {
    slug: "baby-blue-eucalyptus",
    name: "Baby Blue Eucalyptus",
    category: "Fillers",
    color: "Verde",
    tone: "Verde azulado",
    stemLengths: ["50 cm", "60 cm", "70 cm"],
    packing: "HB / QB",
    availability: "Baja",
    season: "Según cultivo",
    description: "Filler aromático para bouquets, decoración y composiciones florales naturales.",
    image: "/products/baby-blue-eucalyptus.svg",
    tags: ["Filler", "Aromático", "Natural"],
    priceLabel: "Precio B2B bajo sesión",
    bunch: "10 tallos por bunch",
    box: "Según volumen"
  },
  {
    slug: "mother-day-red-mix",
    name: "Mother's Day Red Mix",
    category: "Temporada",
    color: "Mixto",
    tone: "Rojo, rosado y blanco",
    stemLengths: ["Receta personalizada"],
    packing: "Retail sleeve / Caja exportación",
    availability: "Bajo pedido",
    season: "Día de la Madre",
    description: "Mix estacional diseñado para campañas de alto volumen y ventas de temporada.",
    image: "/products/mother-day-red-mix.svg",
    tags: ["Día de la Madre", "Campaña", "Alto volumen"],
    priceLabel: "Cotización por volumen",
    bunch: "Receta por unidad",
    box: "Packing por campaña"
  }
];

export const categories = Array.from(new Set(products.map((product) => product.category)));
export const colors = Array.from(new Set(products.map((product) => product.color)));

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
