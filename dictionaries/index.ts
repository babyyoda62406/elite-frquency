export type Dictionary = {
  navigation: {
    home: string
    products: string
    contact: string
    catalog: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  products: {
    title: string
    subtitle: string
    buyButton: string
    stock: string
    units: string
    outOfStock: string
  }
  contact: {
    title: string
    subtitle: string
    button: string
    whatsappMessage: string
  }
  footer: {
    copyright: string
    terms: string
    privacy: string
  }
  whatsapp: {
    productInterest: string
    availability: string
  }
}

// Diccionarios para el servidor
const dictionaries: Record<string, () => Promise<Dictionary>> = {
  es: () => import("./es.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
  pt: () => import("./pt.json").then((module) => module.default),
  fr: () => import("./fr.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Fallback al idioma por defecto si el solicitado no existe
  return (dictionaries[locale] || dictionaries.es)()
}
