import "react-i18next";
import type { TranslationSchema } from "../locales/translationSchema";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: TranslationSchema;
    };
  }
}
