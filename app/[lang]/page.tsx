import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { whatsappNumber } from "@/data/products"
import { getDictionary } from "@/dictionaries"
import LanguageSwitcher from "@/components/language-switcher"

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  // Resolvemos el promise params
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            {/* <ShoppingBag className="h-6 w-6" /> */}
            <span className="text-xl font-bold">Elite Frequency</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href={`/${lang}`} className="text-sm font-medium">
              {dict.navigation.home}
            </Link>
            <Link href={`/${lang}#productos`} className="text-sm font-medium">
              {dict.navigation.products}
            </Link>
            <Link href={`/${lang}#contacto`} className="text-sm font-medium">
              {dict.navigation.contact}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLang={lang} />
            {/* <Button variant="outline" size="sm">
              <ShoppingBag className="mr-2 h-4 w-4" />
              {dict.navigation.catalog}
            </Button> */}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {dict.hero.title}
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {dict.hero.subtitle}
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <a href="#productos">{dict.hero.cta}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="productos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {dict.products.title}
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {dict.products.subtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl pt-10">
              <ProductGrid lang={lang} />
            </div>
          </div>
        </section>

        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {dict.contact.title}
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {dict.contact.subtitle}
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      dict.contact.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dict.contact.button}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {dict.footer.copyright}
          </p>
          {/* <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium">
              {dict.footer.terms}
            </Link>
            <Link href="#" className="text-sm font-medium">
              {dict.footer.privacy}
            </Link>
          </div> */}
        </div>
      </footer>
    </div>
  )
}
