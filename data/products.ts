// Este archivo contiene todos los datos de tus productos
// Puedes modificarlo fácilmente para añadir, eliminar o actualizar productos
import { getDictionaryClient } from "@/dictionaries/client"

// Tu número de WhatsApp en formato internacional (sin el +)
// Ejemplo: 5491112345678 (Argentina)
export const whatsappNumber = "19129804725"

// Interfaz que define la estructura de un producto
export interface Product {
  id: number
  name: string
  price: number
  description: string
  // Puedes añadir categorías si lo deseas
  category?: string
  // Array de URLs de imágenes
  images: string[]
  // Stock disponible (opcional)
  stock?: number
  // Cualquier información adicional que quieras incluir
  additionalInfo?: string
  // Traducciones para diferentes idiomas
  translations?: {
    [key: string]: {
      name?: string
      description?: string
      additionalInfo?: string
    }
  }
}

// Lista de productos
// Modifica esta lista para añadir o actualizar tus productos
export const products: Product[] = [
  {
    "id": 4,
    "name": "Rolex Submariner",
    "price": 13499.99,
    "description": "Reloj de lujo suizo Rolex Submariner con bisel cerámico azul, esfera azul y caja de acero Oystersteel.",
    "category": "Relojes",
    "stock": 6,
    "images": [
      "https://ihkhspzxahdktmnwshhs.supabase.co/storage/v1/object/public/products/watches/aWhatsApp%20Image%202025-05-06%20at%2011.08.32%20AM.jpeg"
    ],
    "additionalInfo": "Movimiento automático calibre 3235. Resistencia al agua hasta 300 metros. Caja de 41 mm. Cristal de zafiro resistente a rayones.",
    "translations": {
      "en": {
        "name": "Rolex Submariner",
        "description": "Luxury Swiss Rolex Submariner watch with blue ceramic bezel, blue dial and Oystersteel case.",
        "additionalInfo": "Automatic movement caliber 3235. Water resistant up to 300 meters. 41mm case. Scratch-resistant sapphire crystal."
      },
      "pt": {
        "name": "Rolex Submariner",
        "description": "Relógio suíço de luxo Rolex Submariner com aro cerâmico azul, mostrador azul e caixa Oystersteel.",
        "additionalInfo": "Movimento automático calibre 3235. Resistência à água até 300 metros. Caixa de 41 mm. Cristal de safira resistente a riscos."
      },
      "fr": {
        "name": "Rolex Submariner",
        "description": "Montre de luxe suisse Rolex Submariner avec lunette en céramique bleue, cadran bleu et boîtier Oystersteel.",
        "additionalInfo": "Mouvement automatique calibre 3235. Étanche jusqu'à 300 mètres. Boîtier de 41 mm. Verre saphir résistant aux rayures."
      }
    }
  },
  {
    "id": 5,
    "name": "Rolex Submariner",
    "price": 13999.99,
    "description": "Reloj de lujo suizo Rolex Submariner con bisel cerámico verde y esfera verde, caja de acero Oystersteel y brazalete Oyster.",
    "category": "Relojes",
    "stock": 3,
    "images": [
      "https://ihkhspzxahdktmnwshhs.supabase.co/storage/v1/object/public/products/watches/WhatsApp%20Image%202025-05-06%20at%2011.07.13%20AM.jpeg"
    ],
    "additionalInfo": "Movimiento automático calibre 3235. Resistencia al agua hasta 300 metros. Caja de 41 mm. Cristal de zafiro resistente a rayones.",
    "translations": {
      "en": {
        "name": "Rolex Submariner Green",
        "description": "Luxury Swiss Rolex Submariner watch with green ceramic bezel and dial, Oystersteel case and Oyster bracelet.",
        "additionalInfo": "Automatic movement caliber 3235. Water resistant up to 300 meters. 41mm case. Scratch-resistant sapphire crystal."
      },
      "pt": {
        "name": "Rolex Submariner",
        "description": "Relógio suíço de luxo Rolex Submariner com aro e mostrador verdes em cerâmica, caixa Oystersteel e pulseira Oyster.",
        "additionalInfo": "Movimento automático calibre 3235. Resistência à água até 300 metros. Caixa de 41 mm. Cristal de safira resistente a riscos."
      },
      "fr": {
        "name": "Rolex Submariner",
        "description": "Montre de luxe suisse Rolex Submariner avec lunette et cadran en céramique verts, boîtier Oystersteel et bracelet Oyster.",
        "additionalInfo": "Mouvement automatique calibre 3235. Étanche jusqu'à 300 mètres. Boîtier de 41 mm. Verre saphir résistant aux rayures."
      }
    }
  },
  {
    "id": 6,
    "name": "Rolex Daytona",
    "price": 15999.99,
    "description": "Reloj Rolex Cosmograph Daytona con esfera negra, caja de acero Oystersteel y bisel taquimétrico. Diseñado para la alta competición automovilística.",
    "category": "Relojes",
    "stock": 4,
    "images": [
      "https://ihkhspzxahdktmnwshhs.supabase.co/storage/v1/object/public/products/watches/WhatsApp%20Image%202025-05-06%20at%2011.07.33%20AM.jpeg"
    ],
    "additionalInfo": "Movimiento automático calibre 4130. Cronógrafo con reserva de marcha de 72 horas. Caja de 40 mm. Cristal de zafiro. Resistencia al agua hasta 100 metros.",
    "translations": {
      "en": {
        "name": "Rolex Daytona",
        "description": "Rolex Cosmograph Daytona watch with black dial, Oystersteel case and tachymetric bezel. Designed for professional motor racing.",
        "additionalInfo": "Automatic movement caliber 4130. Chronograph with 72-hour power reserve. 40mm case. Sapphire crystal. Water resistant up to 100 meters."
      },
      "pt": {
        "name": "Rolex Daytona",
        "description": "Relógio Rolex Cosmograph Daytona com mostrador preto, caixa Oystersteel e aro taquimétrico. Projetado para corridas automobilísticas profissionais.",
        "additionalInfo": "Movimento automático calibre 4130. Cronógrafo com reserva de marcha de 72 horas. Caixa de 40 mm. Cristal de safira. Resistência à água até 100 metros."
      },
      "fr": {
        "name": "Rolex Daytona",
        "description": "Montre Rolex Cosmograph Daytona avec cadran noir, boîtier Oystersteel et lunette tachymétrique. Conçue pour la course automobile professionnelle.",
        "additionalInfo": "Mouvement automatique calibre 4130. Chronographe avec réserve de marche de 72 heures. Boîtier de 40 mm. Verre saphir. Étanche jusqu'à 100 mètres."
      }
    }
  }, 
  {
    "id": 7,
    "name": "Rolex GMT-Master II",
    "price": 14499.99,
    "description": "Reloj Rolex GMT-Master II con esfera negra, números dorados y bisel giratorio bidireccional. Ideal para viajeros frecuentes y exploradores. Movimiento automático calibre 3285. Función GMT para leer dos husos horarios simultáneamente. Caja de 40 mm. Cristal de zafiro. Resistencia al agua hasta 100 metros.",
    "category": "Relojes",
    "stock": 3,
    "images": [
      "https://ihkhspzxahdktmnwshhs.supabase.co/storage/v1/object/public/products/watches/WhatsApp%20Image%202025-05-06%20at%2011.10.12%20AM.jpeg"
    ],
    "additionalInfo": "Ideal para viajeros frecuentes, con capacidad para dos husos horarios y resistencia al agua hasta 100 metros.",
    "translations": {
      "en": {
        "name": "Rolex GMT-Master II",
        "description": "Rolex GMT-Master II watch with black dial, gold numbers and bidirectional rotatable bezel. Perfect for frequent travelers and explorers. Automatic movement caliber 3285. GMT function for simultaneous time tracking in two time zones. 40mm case. Sapphire crystal. Water resistant up to 100 meters."
      },
      "pt": {
        "name": "Rolex GMT-Master II",
        "description": "Relógio Rolex GMT-Master II com mostrador preto, números dourados e luneta giratória bidirecional. Ideal para viajantes frequentes e exploradores. Movimento automático calibre 3285. Função GMT para ler dois fusos horários simultaneamente. Caixa de 40 mm. Cristal de safira. Resistência à água até 100 metros."
      },
      "fr": {
        "name": "Rolex GMT-Master II",
        "description": "Montre Rolex GMT-Master II avec cadran noir, chiffres dorés et lunette rotative bidirectionnelle. Idéale pour les voyageurs fréquents et les explorateurs. Mouvement automatique calibre 3285. Fonction GMT pour lire deux fuseaux horaires simultanément. Boîtier de 40 mm. Verre saphir. Étanche jusqu'à 100 mètres."
      }
    }
  },
  {
    "id": 8,
    "name": "Breitling Navitimer",
    "price": 7999.99,
    "description": "Reloj Breitling Navitimer con esfera negra, cronógrafo y manilla metálica. Un reloj icónico diseñado para aviadores, con una función de cálculo en vuelo mediante su regla de cálculo circular. Movimiento automático calibre B01. Caja de 43 mm. Cristal de zafiro. Resistencia al agua hasta 30 metros.",
    "category": "Relojes",
    "stock": 2,
    "images": [
      "https://ihkhspzxahdktmnwshhs.supabase.co/storage/v1/object/public/products/watches/WhatsApp%20Image%202025-05-06%20at%2011.10.28%20AM.jpeg"
    ],
    "additionalInfo": "Cronógrafo con función de cálculo en vuelo, calibre B01. Resistencia al agua hasta 30 metros.",
    "translations": {
      "en": {
        "name": "Breitling Navitimer",
        "description": "Breitling Navitimer watch with black dial, chronograph, and metal bracelet. An iconic pilot's watch with a flight calculation function using its circular slide rule. Automatic movement caliber B01. 43mm case. Sapphire crystal. Water resistant up to 30 meters."
      },
      "pt": {
        "name": "Breitling Navitimer",
        "description": "Relógio Breitling Navitimer com mostrador preto, cronógrafo e pulseira metálica. Um relógio icônico projetado para aviadores, com função de cálculo em voo através de sua regra de cálculo circular. Movimento automático calibre B01. Caixa de 43 mm. Cristal de safira. Resistência à água até 30 metros."
      },
      "fr": {
        "name": "Breitling Navitimer",
        "description": "Montre Breitling Navitimer avec cadran noir, chronographe et bracelet métallique. Une montre iconique conçue pour les pilotes, avec une fonction de calcul de vol utilisant sa règle à calcul circulaire. Mouvement automatique calibre B01. Boîtier de 43 mm. Verre saphir. Étanche jusqu'à 30 mètres."
      }
    }
  }    
]

// Función para obtener productos localizados según el idioma
export function getLocalizedProducts(lang: string): Product[] {
  return products.map((product) => {
    // Si no hay traducciones para este idioma o no es el idioma por defecto (es), devolver el producto original
    if (lang === "es" || !product.translations || !product.translations[lang]) {
      return product
    }

    // Crear una copia del producto con los campos traducidos
    const translation = product.translations[lang]
    return {
      ...product,
      name: translation.name || product.name,
      description: translation.description || product.description,
      additionalInfo: translation.additionalInfo || product.additionalInfo,
    }
  })
}

// Función para crear el enlace de WhatsApp con la información del producto
export function createWhatsAppLink(product: Product, lang: string): string {
  const dict = getDictionaryClient(lang)

  const message = encodeURIComponent(
    `${dict.whatsapp.productInterest}: ${product.name} (ID: ${product.id}) por $${product.price}. ${product.additionalInfo ? product.additionalInfo + ". " : ""
    }${dict.whatsapp.availability}`,
  )

  return `https://wa.me/${whatsappNumber}?text=${message}`
}

// Función para obtener productos por categoría (si decides implementar filtros)
export function getProductsByCategory(category: string, lang: string): Product[] {
  return getLocalizedProducts(lang).filter((product) => product.category === category)
}

// Función para obtener un producto por ID
export function getProductById(id: number, lang: string): Product | undefined {
  const localizedProducts = getLocalizedProducts(lang)
  return localizedProducts.find((product) => product.id === id)
}
