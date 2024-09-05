// import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/routing";

import LanguageSwitcher from "@/components/common/core/LanguageSwitcher";
import ThemeSwitcher from "@/components/common/core/ThemeSwitcher";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="container bg-blue-200 dark:bg-slate-950 py-10">
      <h1 className="text-center">Content Container</h1>

      <p className="font-semibold text-center text-base hidden xl:block">
        (Large Desktop)
      </p>
      <p className="font-semibold text-center text-base hidden lg:block xl:hidden">
        (Desktop)
      </p>
      <p className="font-semibold text-center text-base hidden md:block lg:hidden">
        (Tablet)
      </p>
      <p className="font-semibold text-center text-base block md:hidden">
        (Mobile)
      </p>
      <ThemeSwitcher />
      <LanguageSwitcher />
      <h1 className="text-center">{t("title")}</h1>
      {/* <Link href="/about">{t("about")}</Link> */}
    </div>
  );
}
