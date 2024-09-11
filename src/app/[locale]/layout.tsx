import '../globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';

import { RootLayoutType } from '@/types/Layout';
import Header from '@/components/common/blocks/Header';
import Footer from '@/components/common/blocks/Footer';
import { SideAd } from '@/components/common/blocks/ads/SideAds';

import ReduxProvider from '../../../providers/redux';

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutType) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex flex-col items-center justify-center w-full">
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            <NextIntlClientProvider messages={messages}>
              <Header />
              <div className="w-full grid grid-cols-1 xl:grid-cols-[320px_1fr_320px] gap-5">
                <SideAd position="left" />
                <main className="w-full mx-auto min-h-screen px-0 bg-blue-300 dark:bg-slate-700 xl:max-w-[1920px]">
                  <h1 className="text-center text-xl py-6">Main Container</h1>
                  {children}
                </main>
                <SideAd position="left" />
              </div>
              <Footer />
            </NextIntlClientProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
