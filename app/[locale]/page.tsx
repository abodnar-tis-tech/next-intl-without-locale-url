import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/locale-switcher";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-start gap-6 p-8">
      <LocaleSwitcher />
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="text-lg text-neutral-600">{t("description")}</p>
    </main>
  );
}
