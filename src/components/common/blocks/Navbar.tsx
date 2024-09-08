"use client";

// import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LanguageSwitcher from "../core/LanguageSwitcher";
import { Link } from "@/i18n/routing";
import SunIcon from "@/assets/icons/svgs/SunIcon";
import MoonIcon from "@/assets/icons/svgs/MoonIcon";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("Navbar");

  // When mounted, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full">
      <nav className="fixed top-0 w-full bg-blue-100 dark:bg-slate-800 shadow-md z-50 left-0 right-0">
        <div className="container mx-auto px-0">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-xl font-bold text-blue-600 dark:text-white leading-none"
              >
                MyApp
              </Link>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 md:space-x-4">
                <Link
                  href="/"
                  className="text-gray-800 dark:text-white rounded-md text-base font-medium"
                >
                  {t("home")}
                </Link>
                <Link
                  href="/about"
                  className="text-gray-800 dark:text-white rounded-md text-base font-medium"
                >
                  {t("about")}
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-800 dark:text-white rounded-md text-base font-medium"
                >
                  {t("contact")}
                </Link>
              </div>
            </div>

            {/* Right Side - Theme Switcher and Language Switcher */}
            <div className="flex gap-2 items-center">
              {/* Theme Switcher */}
              {mounted && (
                <button
                  type="button"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-gray-800 dark:text-white rounded-md text-sm font-medium"
                >
                  {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                </button>
              )}
              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* for covering up navbar space */}
      <div className="inline-block mt-14"></div>
    </div>
  );
}
