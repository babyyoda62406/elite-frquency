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
  const {lang }= await params
  const dict = await getDictionary(lang)

  return (
    <html lang={lang}>
      <head>
        <meta charSet="UTF-8" />
        {/* favico */}
        <link rel="icon" href="2025-05-08_06-40.png" />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  )
}
