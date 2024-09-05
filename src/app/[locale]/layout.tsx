import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import { ThemeProvider } from "next-themes";

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-blue-400 dark:bg-slate-500 flex flex-col items-center justify-center w-full">
        <ThemeProvider attribute="class">
          <h1 className="text-center py-2">Body</h1>
          <NextIntlClientProvider messages={messages}>
            <div className="bg-blue-300 dark:bg-slate-700 max-w-[1920px] mx-auto py-10 w-full">
              <h1 className="text-center py-2">Main Container</h1>
              {children}
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
