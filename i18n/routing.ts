import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "uk", "pl"],
  defaultLocale: "en",
  localePrefix: "never",
  localeCookie: {
    name: "NEXT_LOCALE_CUSTOM_ID",
    maxAge: 60 * 60 * 24 * 365,
  },
});
