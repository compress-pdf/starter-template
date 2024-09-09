import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/common/blocks/Header";
import Image from "next/image";
import Footer from "@/components/common/blocks/Footer";
import ReduxProvider from "../../../providers/redux";
import { RootLayoutType } from "@/types/Layout";

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
                {/* Left ad space - scrollable horizontally if not enough width */}
                <div className="hidden xl:flex min-h-[800px] overflow-x-clip justify-end bg-yellow-50 dark:bg-slate-700">
                  <div className="sticky top-[88px] min-w-[320px] h-[800px]">
                    <Image
                      alt="xyz"
                      width={300}
                      height={640}
                      className="ml-auto"
                      src={"https://via.placeholder.com/300x640"}
                      unoptimized={true}
                      priority
                    />
                  </div>
                </div>

                {/* Main container with min width of 988px */}
                <main className="w-full mx-auto min-h-screen px-0 bg-blue-300 dark:bg-slate-700 xl:max-w-[1920px]">
                  <h1 className="text-center text-xl py-6">Main Container</h1>
                  {children}
                </main>

                {/* Right ad space - scrollable horizontally if not enough width */}
                <div className="hidden xl:flex min-h-[800px] overflow-x-clip justify-start bg-yellow-50 dark:bg-slate-700">
                  <div className="sticky top-[88px] min-w-[320px] h-[800px]">
                    <Image
                      alt="xyz"
                      width={300}
                      height={640}
                      src={"https://via.placeholder.com/300x640"}
                      unoptimized={true}
                      priority
                    />
                  </div>
                </div>
              </div>
              <Footer />
            </NextIntlClientProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
