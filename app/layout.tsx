import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ELITE FREQUENCY',
  description: 'Descubre una selección exclusiva de productos de lujo que definen el estilo de vida más sofisticado. Desde artículos de moda, relojes de alta gama, hasta accesorios de diseño, cada pieza está cuidadosamente elegida para quienes buscan calidad, elegancia y distinción. Eleva tu vida con las mejores marcas y crea un ambiente único de lujo y exclusividad. Visítanos y haz de cada momento una experiencia premium.',
  generator: 'v0.dev',
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang='es'>
//       <body>{children}</body>
//     </html>
//   )
// }


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    children
  )
}

