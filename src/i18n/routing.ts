import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'de'],
    // localePrefix: 'never',
    // Used when no locale matches
    // domains: ["en", "de"],
    defaultLocale: 'en'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation(routing);