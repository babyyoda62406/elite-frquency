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
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body>
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  )
}
