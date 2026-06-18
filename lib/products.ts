import type { LocalizedString } from "./i18n";

export type Availability = "high" | "medium" | "low" | "onRequest";

export type Product = {
  slug: string;
  name: string;
  category: LocalizedString;
  color: LocalizedString;
  tone: LocalizedString;
  stemLengths: string[];
  packing: string;
  availability: Availability;
  season: LocalizedString;
  description: LocalizedString;
  image: string;
  sourceUrl: string;
  tags: LocalizedString[];
  priceLabel: LocalizedString;
  bunch: LocalizedString;
  box: LocalizedString;
  jdeItemNumber: string;
};

const premiumRoses: LocalizedString = {
  es: "Rosas premium",
  en: "Premium Roses",
  ru: "Премиальные розы"
};

const gardenRoses: LocalizedString = {
  es: "Rosas garden-like",
  en: "Garden Like Roses",
  ru: "Садовые розы"
};

const sprayRoses: LocalizedString = {
  es: "Spray roses",
  en: "Spray Roses",
  ru: "Кустовые розы"
};

const hashtagSprays: LocalizedString = {
  es: "Hashtag spray roses",
  en: "Hashtag Spray Roses",
  ru: "Hashtag кустовые розы"
};

const privatePrice: LocalizedString = {
  es: "Precio B2B bajo sesión",
  en: "B2B price after login",
  ru: "B2B цена после входа"
};

const longVaseLife: LocalizedString = {
  es: "Vida en florero larga",
  en: "Long vase life",
  ru: "Долгая жизнь в вазе"
};

const standardBox: LocalizedString = {
  es: "Según largo y empaque",
  en: "By stem length and packing",
  ru: "По длине стебля и упаковке"
};

export const products: Product[] = [
  {
    slug: "explorer",
    name: "Explorer",
    category: premiumRoses,
    color: { es: "Rojo", en: "Red", ru: "Красный" },
    tone: { es: "Rojo profundo", en: "Deep red", ru: "Глубокий красный" },
    stemLengths: ["40 cm", "50 cm", "60 cm", "70 cm", "80 cm"],
    packing: "HB / QB / FB",
    availability: "high",
    season: { es: "Todo el año", en: "Year round", ru: "Круглый год" },
    description: {
      es: "Rosa roja premium para San Valentín, aniversarios y programas retail de alto impacto.",
      en: "Premium red rose for Valentine's Day, anniversaries and high-impact retail programs.",
      ru: "Премиальная красная роза для Дня святого Валентина, юбилеев и retail-программ."
    },
    image: "/products/explorer.svg",
    sourceUrl: "https://tessacorporation.com/product/explorer-2/",
    tags: [
      { es: "Más vendido", en: "Best seller", ru: "Бестселлер" },
      { es: "Premium", en: "Premium", ru: "Премиум" },
      { es: "Rojo", en: "Red", ru: "Красный" }
    ],
    priceLabel: privatePrice,
    bunch: { es: "25 tallos por bunch", en: "25 stems per bunch", ru: "25 стеблей в пучке" },
    box: standardBox,
    jdeItemNumber: "FLR-ROS-EXP"
  },
  {
    slug: "fortune",
    name: "Fortune",
    category: premiumRoses,
    color: { es: "Rojo", en: "Red", ru: "Красный" },
    tone: { es: "Rojo pasión", en: "Passion red", ru: "Красный passion" },
    stemLengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
    packing: "HB / QB",
    availability: "medium",
    season: { es: "Todo el año", en: "Year round", ru: "Круглый год" },
    description: {
      es: "Rosa roja ecuatoriana con presencia intensa para arreglos, bouquets y programas comerciales.",
      en: "Ecuadorian red rose with intense presence for arrangements, bouquets and commercial programs.",
      ru: "Эквадорская красная роза с ярким эффектом для букетов и коммерческих программ."
    },
    image: "/products/fortune.svg",
    sourceUrl: "https://tessacorporation.com/product/fortune-2/",
    tags: [
      { es: "Cotopaxi", en: "Cotopaxi", ru: "Котопакси" },
      { es: "Premium", en: "Premium", ru: "Премиум" },
      { es: "Retail", en: "Retail", ru: "Retail" }
    ],
    priceLabel: privatePrice,
    bunch: { es: "25 tallos por bunch", en: "25 stems per bunch", ru: "25 стеблей в пучке" },
    box: standardBox,
    jdeItemNumber: "FLR-ROS-FOR"
  },
  {
    slug: "esperance",
    name: "Esperance",
    category: premiumRoses,
    color: { es: "Bicolor", en: "Bicolor", ru: "Биколор" },
    tone: { es: "Crema con centro rosado", en: "Cream with pale pink center", ru: "Кремовый с розовым центром" },
    stemLengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
    packing: "HB / QB",
    availability: "high",
    season: { es: "Bodas y todo el año", en: "Weddings and year round", ru: "Свадьбы и круглый год" },
    description: {
      es: "Rosa bicolor cremosa con centro rosado, versátil para arreglos elegantes durante todo el año.",
      en: "Creamy bicolor rose with a pale pink center, versatile for elegant arrangements year-round.",
      ru: "Кремовая биколорная роза с розовым центром для элегантных композиций круглый год."
    },
    image: "/products/esperance.svg",
    sourceUrl: "https://tessacorporation.com/product/esperance-2/",
    tags: [
      { es: "Wedding", en: "Wedding", ru: "Свадьбы" },
      { es: "Bicolor", en: "Bicolor", ru: "Биколор" },
      { es: "Elegante", en: "Elegant", ru: "Элегантная" }
    ],
    priceLabel: privatePrice,
    bunch: { es: "25 tallos por bunch", en: "25 stems per bunch", ru: "25 стеблей в пучке" },
    box: standardBox,
    jdeItemNumber: "FLR-ROS-ESP"
  },
  {
    slug: "pomarosa",
    name: "Pomarosa",
    category: premiumRoses,
    color: { es: "Rosado", en: "Pink", ru: "Розовый" },
    tone: { es: "Rosado claro", en: "Light pink", ru: "Светло-розовый" },
    stemLengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
    packing: "HB / QB",
    availability: "medium",
    season: { es: "Todo el año", en: "Year round", ru: "Круглый год" },
    description: {
      es: "Rosa rosada clara asociada con feminidad, elegancia y dulzura para bouquets premium.",
      en: "Light pink rose associated with femininity, elegance and sweetness for premium bouquets.",
      ru: "Светло-розовая роза, символизирующая женственность, элегантность и нежность."
    },
    image: "/products/pomarosa.svg",
    sourceUrl: "https://tessacorporation.com/product/pomarosa-2/",
    tags: [
      { es: "Rosado", en: "Pink", ru: "Розовый" },
      { es: "Bouquets", en: "Bouquets", ru: "Букеты" },
      { es: "Dulce", en: "Soft", ru: "Нежная" }
    ],
    priceLabel: privatePrice,
    bunch: { es: "25 tallos por bunch", en: "25 stems per bunch", ru: "25 стеблей в пучке" },
    box: standardBox,
    jdeItemNumber: "FLR-ROS-POM"
  },
  {
    slug: "antonia-gardens",
    name: "Antonia Gardens",
    category: gardenRoses,
    color: { es: "Crema", en: "Cream", ru: "Кремовый" },
    tone: { es: "Marfil con centro amarillo", en: "Ivory with yellow center", ru: "Айвори с желтым центром" },
    stemLengths: ["40 cm", "50 cm", "60 cm"],
    packing: "QB / HB",
    availability: "onRequest",
    season: { es: "Eventos y bodas", en: "Events and weddings", ru: "События и свадьбы" },
    description: {
      es: "Garden-like rose de pétalos marfil rizados y centro amarillo para arreglos sofisticados.",
      en: "Garden-like rose with ruffled ivory petals and a yellow center for sophisticated designs.",
      ru: "Садовая роза с волнистыми лепестками айвори и желтым центром для изысканных композиций."
    },
    image: "/products/antonia-gardens.svg",
    sourceUrl: "https://tessacorporation.com/product/antonia-gardens/",
    tags: [
      { es: "Garden", en: "Garden", ru: "Garden" },
      { es: "Wedding", en: "Wedding", ru: "Свадьбы" },
      { es: "Lujo", en: "Luxury", ru: "Люкс" }
    ],
    priceLabel: privatePrice,
    bunch: { es: "12 o 25 tallos por bunch", en: "12 or 25 stems per bunch", ru: "12 или 25 стеблей в пучке" },
    box: { es: "Packing especial", en: "Special packing", ru: "Специальная упаковка" },
    jdeItemNumber: "FLR-GRD-ANT"
  },
  {
    slug: "aurora-gardens",
    name: "Aurora Gardens",
    category: gardenRoses,
    color: { es: "Crema", en: "Cream", ru: "Кремовый" },
    tone: { es: "Amarillo pastel", en: "Soft pastel yellow", ru: "Пастельно-желтый" },
    stemLengths: ["40 cm", "50 cm", "60 cm"],
    packing: "QB / HB",
    availability: "medium",
    season: { es: "Eventos especiales", en: "Special events", ru: "Особые события" },
    description: {
      es: "Rosa delicada con textura espiralada y tono cálido, ideal para colecciones sofisticadas.",
      en: "Delicate rose with spiraled texture and warm tone, ideal for sophisticated collections.",
      ru: "Деликатная роза со спиральной текстурой и теплым тоном для изысканных коллекций."
    },
    image: "/products/aurora-gardens.svg",
    sourceUrl: "https://tessacorporation.com/product/aurora-gardens/",
    tags: [
      { es: "Garden", en: "Garden", ru: "Garden" },
      { es: "Pastel", en: "Pastel", ru: "Пастель" },
      { es: "Eventos", en: "Events", ru: "События" }
    ],
    priceLabel: privatePrice,
    bunch: { es: "12 o 25 tallos por bunch", en: "12 or 25 stems per bunch", ru: "12 или 25 стеблей в пучке" },
    box: { es: "Packing especial", en: "Special packing", ru: "Специальная упаковка" },
    jdeItemNumber: "FLR-GRD-AUR"
  },
  {
    slug: "garden-spirit",
    name: "Garden Spirit",
    category: gardenRoses,
    color: { es: "Crema", en: "Cream", ru: "Кремовый" },
    tone: { es: "Peachy blush", en: "Peachy blush", ru: "Персиково-румяный" },
    stemLengths: ["40 cm", "50 cm", "60 cm"],
    packing: "QB / HB",
    availability: "medium",
    season: { es: "Bodas", en: "Weddings", ru: "Свадьбы" },
    description: {
      es: "Rosa romántica con forma clásica garden y alto conteo de pétalos para diseños de boda.",
      en: "Romantic garden-shaped rose with high petal count for wedding and centerpiece designs.",
      ru: "Романтичная роза garden-формы с большим количеством лепестков для свадебных дизайнов."
    },
    image: "/products/garden-spirit.svg",
    sourceUrl: "https://tessacorporation.com/product/garden-spirit-2/",
    tags: [
      { es: "Wedding", en: "Wedding", ru: "Свадьбы" },
      { es: "Romántica", en: "Romantic", ru: "Романтичная" },
      { es: "Garden", en: "Garden", ru: "Garden" }
    ],
    priceLabel: privatePrice,
    bunch: { es: "12 o 25 tallos por bunch", en: "12 or 25 stems per bunch", ru: "12 или 25 стеблей в пучке" },
    box: { es: "Packing especial", en: "Special packing", ru: "Специальная упаковка" },
    jdeItemNumber: "FLR-GRD-SPI"
  },
  {
    slug: "constellation",
    name: "Constellation",
    category: sprayRoses,
    color: { es: "Rosado", en: "Pink", ru: "Розовый" },
    tone: { es: "Rosado potente", en: "Powerful pink", ru: "Насыщенный розовый" },
    stemLengths: ["40 cm", "50 cm", "60 cm"],
    packing: "HB / QB",
    availability: "medium",
    season: { es: "Todo el año", en: "Year round", ru: "Круглый год" },
    description: {
      es: "Garden spray rose rosada con ruffles y cabezas llamativas para arreglos elegantes.",
      en: "Pink garden spray rose with ruffles and standout heads for elegant arrangements.",
      ru: "Розовая garden spray rose с волнистыми лепестками для элегантных композиций."
    },
    image: "/products/constellation.svg",
    sourceUrl: "https://tessacorporation.com/product/constellation/",
    tags: [
      { es: "5+ blooms", en: "5+ blooms", ru: "5+ бутонов" },
      { es: "Spray", en: "Spray", ru: "Spray" },
      { es: "Elegante", en: "Elegant", ru: "Элегантная" }
    ],
    priceLabel: privatePrice,
    bunch: { es: "10 tallos por bunch", en: "10 stems per bunch", ru: "10 стеблей в пучке" },
    box: { es: "Según receta del cliente", en: "By customer recipe", ru: "По рецепту клиента" },
    jdeItemNumber: "FLR-SPR-CON"
  },
  {
    slug: "treasure",
    name: "# Treasure",
    category: hashtagSprays,
    color: { es: "Rojo", en: "Red", ru: "Красный" },
    tone: { es: "Rojo vibrante", en: "Vibrant red", ru: "Яркий красный" },
    stemLengths: ["40 cm", "50 cm", "60 cm"],
    packing: "HB / QB",
    availability: "onRequest",
    season: { es: "Nueva colección", en: "New collection", ru: "Новая коллекция" },
    description: {
      es: "Spray rose roja de la línea Hashtag con forma de pétalos única y alto impacto visual.",
      en: "Red Hashtag spray rose with unique petal formation and bold visual impact.",
      ru: "Красная spray rose линии Hashtag с уникальной формой лепестков и ярким эффектом."
    },
    image: "/products/treasure.svg",
    sourceUrl: "https://tessacorporation.com/product/treasure/",
    tags: [
      { es: "Nuevo", en: "New", ru: "Новинка" },
      { es: "5+ blooms", en: "5+ blooms", ru: "5+ бутонов" },
      { es: "Hashtag", en: "Hashtag", ru: "Hashtag" }
    ],
    priceLabel: privatePrice,
    bunch: { es: "10 tallos por bunch", en: "10 stems per bunch", ru: "10 стеблей в пучке" },
    box: { es: "Según receta del cliente", en: "By customer recipe", ru: "По рецепту клиента" },
    jdeItemNumber: "FLR-HSP-TRE"
  },
  {
    slug: "pink",
    name: "# Pink",
    category: hashtagSprays,
    color: { es: "Rosado", en: "Pink", ru: "Розовый" },
    tone: { es: "Rosado suave", en: "Soft pink", ru: "Нежно-розовый" },
    stemLengths: ["40 cm", "50 cm", "60 cm"],
    packing: "HB / QB",
    availability: "medium",
    season: { es: "Nueva colección", en: "New collection", ru: "Новая коллекция" },
    description: {
      es: "Spray rose rosada con múltiples blooms por tallo para bodas y arreglos modernos.",
      en: "Pink spray rose with multiple blooms per stem for weddings and modern arrangements.",
      ru: "Розовая spray rose с несколькими бутонами на стебле для свадеб и современных композиций."
    },
    image: "/products/pink.svg",
    sourceUrl: "https://tessacorporation.com/product/pink/",
    tags: [
      { es: "Romántica", en: "Romantic", ru: "Романтичная" },
      { es: "5+ blooms", en: "5+ blooms", ru: "5+ бутонов" },
      { es: "Wedding", en: "Wedding", ru: "Свадьбы" }
    ],
    priceLabel: privatePrice,
    bunch: { es: "10 tallos por bunch", en: "10 stems per bunch", ru: "10 стеблей в пучке" },
    box: { es: "Según receta del cliente", en: "By customer recipe", ru: "По рецепту клиента" },
    jdeItemNumber: "FLR-HSP-PIN"
  },
  {
    slug: "opala",
    name: "Opala",
    category: premiumRoses,
    color: { es: "Rosado", en: "Pink", ru: "Розовый" },
    tone: { es: "Rosado aterciopelado", en: "Velvety light pink", ru: "Бархатный светло-розовый" },
    stemLengths: ["40 cm", "50 cm", "60 cm", "70 cm"],
    packing: "HB / QB",
    availability: "low",
    season: { es: "Easter y programas especiales", en: "Easter and special programs", ru: "Пасха и специальные программы" },
    description: {
      es: "Rosa rosada clara y aterciopelada para programas de temporada, bouquets y arreglos suaves.",
      en: "Light pink velvety rose for seasonal programs, bouquets and soft arrangements.",
      ru: "Светло-розовая бархатная роза для сезонных программ и нежных букетов."
    },
    image: "/products/opala.svg",
    sourceUrl: "https://tessacorporation.com/product/opala-2/",
    tags: [
      { es: "Easter", en: "Easter", ru: "Пасха" },
      { es: "Rosado", en: "Pink", ru: "Розовый" },
      { es: "Premium", en: "Premium", ru: "Премиум" }
    ],
    priceLabel: privatePrice,
    bunch: { es: "25 tallos por bunch", en: "25 stems per bunch", ru: "25 стеблей в пучке" },
    box: standardBox,
    jdeItemNumber: "FLR-ROS-OPA"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
