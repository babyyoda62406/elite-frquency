"use client"
import { useRouter, usePathname } from "next/navigation"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { locales } from "@/middleware"

// Nombres de los idiomas para mostrar en el selector
const languageNames: Record<string, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
  fr: "Français",
}

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (locale: string) => {
    // Obtener la ruta actual sin el prefijo de idioma
    const currentPathWithoutLang = pathname.replace(/^\/[^/]+/, "")

    // Construir la nueva ruta con el idioma seleccionado
    const newPath = `/${locale}${currentPathWithoutLang}`

    // Navegar a la nueva ruta
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Cambiar idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className={locale === currentLang ? "bg-muted font-medium" : ""}
          >
            {languageNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
