'use client';

import { useTranslations } from 'next-intl'; // External imports

import { Link } from '@/i18n/routing'; // Alias imports

import LanguageSwitcher from '../core/LanguageSwitcher';
import Hamburger from '../core/Hamburger';
import ThemeSwitcher from '../core/ThemeSwitcher'; // Relative imports

export default function Navbar() {
  const t = useTranslations('Navbar');

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <div className="relative w-full">
      <nav className="fixed top-0 w-full bg-blue-100 dark:bg-slate-800 shadow-md z-50 left-0 right-0">
        <div className="container mx-auto px-0">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-xl font-semibold text-blue-600 dark:text-white leading-none"
              >
                MyApp
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-2 md:space-x-4">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-800 dark:text-white rounded-md text-base font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <ThemeSwitcher />
              <LanguageSwitcher />
              <Hamburger />
            </div>
          </div>
        </div>
      </nav>

      <div className="inline-block mt-14"></div>
    </div>
  );
}
