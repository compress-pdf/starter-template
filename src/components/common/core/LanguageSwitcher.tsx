"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const changeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;

    // Replacing the current route but changing the locale
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div>
      <select
        value={locale}
        onChange={changeLocale}
        className="rounded-sm bg-sky-200 px-2 py-1 text-sky-950"
        title="locale switcher"
      >
        {["en", "de"].map((loc) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()} {/* Display language in uppercase */}
          </option>
        ))}
      </select>
    </div>
  );
}
