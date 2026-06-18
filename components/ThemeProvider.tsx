"use client";

import { useEffect, type ReactNode } from "react";
import { applyTheme, loadStoredTheme } from "@/lib/theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    applyTheme(loadStoredTheme());
  }, []);

  return <>{children}</>;
}
