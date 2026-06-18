export type ThemeConfig = {
  forest: string;
  forestDark: string;
  sage: string;
  sageStrong: string;
  rose: string;
  roseSoft: string;
  cream: string;
  sand: string;
  ink: string;
  muted: string;
  footerBg: string;
  footerText: string;
  footerMuted: string;
  footerAccent: string;
};

export type ThemePreset = {
  id: string;
  name: string;
  description: string;
  colors: ThemeConfig;
};

export const themeStorageKey = "tessa_theme_config";

export const defaultTheme: ThemeConfig = {
  forest: "#294236",
  forestDark: "#17271f",
  sage: "#dce7df",
  sageStrong: "#b7c8bd",
  rose: "#d95162",
  roseSoft: "#ffe6ea",
  cream: "#fffaf1",
  sand: "#f4ead8",
  ink: "#17221c",
  muted: "#64736b",
  footerBg: "#050706",
  footerText: "#ffffff",
  footerMuted: "rgba(255, 255, 255, 0.72)",
  footerAccent: "#f0445f"
};

export const themePresets: ThemePreset[] = [
  {
    id: "tessa-classic",
    name: "Tessa clásico",
    description: "Verde floral, crema cálido y acento rosa Tessa.",
    colors: defaultTheme
  },
  {
    id: "premium-dark",
    name: "Premium oscuro",
    description: "Fondo oscuro elegante para catálogo B2B de alto impacto.",
    colors: {
      forest: "#1f3a2d",
      forestDark: "#0c1712",
      sage: "#d7e5d6",
      sageStrong: "#a6bca7",
      rose: "#ed3f5f",
      roseSoft: "#ffe1e8",
      cream: "#f9f4ea",
      sand: "#eadbc4",
      ink: "#101611",
      muted: "#66746b",
      footerBg: "#030403",
      footerText: "#ffffff",
      footerMuted: "rgba(255, 255, 255, 0.72)",
      footerAccent: "#ed3f5f"
    }
  },
  {
    id: "rose-export",
    name: "Rose export",
    description: "Más cálido y comercial, ideal para campañas de temporada.",
    colors: {
      forest: "#5a2632",
      forestDark: "#2a1018",
      sage: "#f3dbe0",
      sageStrong: "#e1b5be",
      rose: "#c9163a",
      roseSoft: "#ffe8ee",
      cream: "#fff7f3",
      sand: "#f2dfcf",
      ink: "#271216",
      muted: "#7a6066",
      footerBg: "#12070a",
      footerText: "#ffffff",
      footerMuted: "rgba(255, 255, 255, 0.74)",
      footerAccent: "#ff4b68"
    }
  },
  {
    id: "clean-b2b",
    name: "Clean B2B",
    description: "Más corporativo, claro y sobrio para uso comercial diario.",
    colors: {
      forest: "#204c5d",
      forestDark: "#102a34",
      sage: "#dfeaf0",
      sageStrong: "#b9ccd5",
      rose: "#d14b63",
      roseSoft: "#fde7ec",
      cream: "#f8fbfc",
      sand: "#e9f0f3",
      ink: "#102028",
      muted: "#5c6b73",
      footerBg: "#07151b",
      footerText: "#ffffff",
      footerMuted: "rgba(255, 255, 255, 0.72)",
      footerAccent: "#58bdd7"
    }
  }
];

export const themeFields: Array<{ key: keyof ThemeConfig; label: string; group: string }> = [
  { key: "forest", label: "Marca primaria", group: "Marca" },
  { key: "forestDark", label: "Marca oscura / títulos", group: "Marca" },
  { key: "rose", label: "Acento / CTA", group: "Marca" },
  { key: "roseSoft", label: "Acento suave", group: "Marca" },
  { key: "cream", label: "Fondo principal", group: "Superficies" },
  { key: "sand", label: "Fondo secundario", group: "Superficies" },
  { key: "sage", label: "Badges / bloques suaves", group: "Superficies" },
  { key: "sageStrong", label: "Bordes activos", group: "Superficies" },
  { key: "ink", label: "Texto principal", group: "Texto" },
  { key: "muted", label: "Texto secundario", group: "Texto" },
  { key: "footerBg", label: "Footer fondo", group: "Footer" },
  { key: "footerText", label: "Footer texto", group: "Footer" },
  { key: "footerAccent", label: "Footer acento", group: "Footer" }
];

const cssVariableMap: Record<keyof ThemeConfig, string> = {
  forest: "--forest",
  forestDark: "--forest-dark",
  sage: "--sage",
  sageStrong: "--sage-strong",
  rose: "--rose",
  roseSoft: "--rose-soft",
  cream: "--cream",
  sand: "--sand",
  ink: "--ink",
  muted: "--muted",
  footerBg: "--footer-bg",
  footerText: "--footer-text",
  footerMuted: "--footer-muted",
  footerAccent: "--footer-accent"
};

export function applyTheme(theme: ThemeConfig) {
  if (typeof document === "undefined") return;
  Object.entries(cssVariableMap).forEach(([key, variable]) => {
    document.documentElement.style.setProperty(variable, theme[key as keyof ThemeConfig]);
  });
  document.documentElement.style.setProperty("--line", `color-mix(in srgb, ${theme.forest} 18%, transparent)`);
  document.documentElement.style.setProperty("--shadow", `0 24px 80px color-mix(in srgb, ${theme.ink} 16%, transparent)`);
}

export function loadStoredTheme(): ThemeConfig {
  if (typeof window === "undefined") return defaultTheme;
  const raw = window.localStorage.getItem(themeStorageKey);
  if (!raw) return defaultTheme;
  try {
    return { ...defaultTheme, ...JSON.parse(raw) };
  } catch {
    return defaultTheme;
  }
}

export function saveTheme(theme: ThemeConfig) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(themeStorageKey, JSON.stringify(theme));
  applyTheme(theme);
}

export function resetTheme() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(themeStorageKey);
  applyTheme(defaultTheme);
}
