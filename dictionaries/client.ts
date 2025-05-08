// Este archivo contiene los diccionarios para componentes cliente
// No usa "server-only" por lo que puede ser importado desde componentes cliente

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

// Versión del diccionario para componentes cliente
const clientDictionaries: Record<string, Dictionary> = {
  es: {
    navigation: {
      home: "Inicio",
      products: "Productos",
      contact: "Contacto",
      catalog: "Catálogo",
    },
    hero: {
      title: "Descubre Nuestros Productos",
      subtitle: "Explora nuestra selección de productos de alta calidad. Compra fácilmente a través de WhatsApp.",
      cta: "Ver Productos",
    },
    products: {
      title: "Nuestros Productos",
      subtitle: "Explora nuestra colección y encuentra lo que necesitas.",
      buyButton: "Comprar",
      stock: "Stock",
      units: "unidades",
      outOfStock: "Agotado",
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes preguntas? Contáctanos directamente.",
      button: "Contactar por WhatsApp",
      whatsappMessage: "Hola, estoy interesado en tus productos",
    },
    footer: {
      copyright: "© 2020 - 2025 Elite Frequency. Todos los derechos reservados.",
      terms: "Términos",
      privacy: "Privacidad",
    },
    whatsapp: {
      productInterest: "Hola, estoy interesado en el producto",
      availability: "¿Está disponible?",
    },
  },
  en: {
    navigation: {
      home: "Home",
      products: "Products",
      contact: "Contact",
      catalog: "Catalog",
    },
    hero: {
      title: "Discover Our Products",
      subtitle: "Explore our selection of high-quality products. Shop easily through WhatsApp.",
      cta: "View Products",
    },
    products: {
      title: "Our Products",
      subtitle: "Explore our collection and find what you need.",
      buyButton: "Buy",
      stock: "Stock",
      units: "units",
      outOfStock: "Sold out",
    },
    contact: {
      title: "Contact",
      subtitle: "Have questions? Contact us directly.",
      button: "Contact via WhatsApp",
      whatsappMessage: "Hello, I'm interested in your products",
    },
    footer: {
      copyright: "© 2020 - 2025 Elite Frequency. All rights reserved.",
      terms: "Terms",
      privacy: "Privacy",
    },
    whatsapp: {
      productInterest: "Hello, I'm interested in the product",
      availability: "Is it available?",
    },
  },
  pt: {
    navigation: {
      home: "Início",
      products: "Produtos",
      contact: "Contato",
      catalog: "Catálogo",
    },
    hero: {
      title: "Descubra Nossos Produtos",
      subtitle: "Explore nossa seleção de produtos de alta qualidade. Compre facilmente pelo WhatsApp.",
      cta: "Ver Produtos",
    },
    products: {
      title: "Nossos Produtos",
      subtitle: "Explore nossa coleção e encontre o que você precisa.",
      buyButton: "Comprar",
      stock: "Estoque",
      units: "unidades",
      outOfStock: "Esgotado",
    },
    contact: {
      title: "Contato",
      subtitle: "Tem perguntas? Entre em contato diretamente.",
      button: "Contato via WhatsApp",
      whatsappMessage: "Olá, estou interessado em seus produtos",
    },
    footer: {
      copyright: "© 2020 - 2025 Elite Frequency. Todos os direitos reservados.",
      terms: "Termos",
      privacy: "Privacidade",
    },
    whatsapp: {
      productInterest: "Olá, estou interessado no produto",
      availability: "Está disponível?",
    },
  },
  fr: {
    navigation: {
      home: "Accueil",
      products: "Produits",
      contact: "Contact",
      catalog: "Catalogue",
    },
    hero: {
      title: "Découvrez Nos Produits",
      subtitle: "Explorez notre sélection de produits de haute qualité. Achetez facilement via WhatsApp.",
      cta: "Voir les Produits",
    },
    products: {
      title: "Nos Produits",
      subtitle: "Explorez notre collection et trouvez ce dont vous avez besoin.",
      buyButton: "Acheter",
      stock: "Stock",
      units: "unités",
      outOfStock: "Épuisé",
    },
    contact: {
      title: "Contact",
      subtitle: "Vous avez des questions? Contactez-nous directement.",
      button: "Contacter par WhatsApp",
      whatsappMessage: "Bonjour, je suis intéressé par vos produits",
    },
    footer: {
      copyright: "© 2020 - 2025 Elite Frequency. Tous droits réservés.",
      terms: "Conditions",
      privacy: "Confidentialité",
    },
    whatsapp: {
      productInterest: "Bonjour, je suis intéressé par le produit",
      availability: "Est-il disponible?",
    },
  },
}

export const getDictionaryClient = (locale: string): Dictionary => {
  return clientDictionaries[locale] || clientDictionaries.es
}
