"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const locales = ["en", "uk", "pl"] as const;

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">{t("label")}:</span>

      <div className="flex gap-2">
        {locales.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => router.replace(pathname, { locale: item })}
            className={`rounded border px-3 py-1 text-sm transition ${
              locale === item
                ? "border-black bg-black text-white"
                : "border-neutral-300 bg-white text-black hover:bg-neutral-100"
            }`}
          >
            {t(item)}
          </button>
        ))}
      </div>
    </div>
  );
}
