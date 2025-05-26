import type React from "react"
import { locales } from "@/middleware"
import { getDictionary } from "@/dictionaries"

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <html lang={lang}>
      <head>
        <meta charSet="UTF-8" />
        {/* favico */}
        <link rel="icon" href="2025-05-08_06-40.png" />
        <meta name="google-site-verification" content="OcbEL0psibJMEZkx7TilTM5Ep-Rgvj_V6AiUEfPuX10" />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-269RPEYBSY"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-269RPEYBSY');
            `,
          }}
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  )
}
