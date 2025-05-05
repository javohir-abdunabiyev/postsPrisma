import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SwitchLang from '@/components/SwitchLang';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className='flex justify-between items-center p-4 bg-gray-100'>
          <h1 className='text-black'>Logo</h1>
          <SwitchLang />
        </header>
        <div className='flex justify-center'>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
