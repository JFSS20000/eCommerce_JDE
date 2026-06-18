"use client";

import type { ElementType, HTMLAttributes } from "react";
import type { DictionaryKey } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  textKey: DictionaryKey;
};

export function LocalizedText({ as: Component = "span", textKey, ...props }: Props) {
  const { t } = useLanguage();
  return <Component {...props}>{t(textKey)}</Component>;
}
