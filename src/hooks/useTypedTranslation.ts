import { useTranslation } from "react-i18next";
import type { TranslationSchema } from "../locales/translationSchema";

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

type LeafKeys<T> = {
  [K in keyof T]: T[K] extends object ? Join<K, LeafKeys<T[K]>> : K;
}[keyof T];

export function useTypedTranslation() {
  const { t } = useTranslation();

  return {
    t: t as (key: LeafKeys<TranslationSchema>, options?: any) => string,
  };
}
