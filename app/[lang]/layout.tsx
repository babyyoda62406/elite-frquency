// app/[lang]/layout.tsx
import type { ReactNode } from 'react';
import { locales } from '@/middleware';
import { getDictionary } from '@/dictionaries';

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  // Await the dynamic route params
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="2025-05-08_06-40.png" />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
