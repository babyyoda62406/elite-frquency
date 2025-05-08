import type React from "react"
import { locales } from "@/middleware"
import { getDictionary } from "@/dictionaries"

import type { ReactNode } from "react"

interface RootLayoutProps {
  children: ReactNode
  params: {
    lang: string
  }
}


export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="2025-05-08_06-40.png" />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  )
}
