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
    "description": "Reloj Breitling Navitimer con esfera negra, cronógrafo y pulsera metálica. Un reloj icónico diseñado para aviadores, con una función de cálculo en vuelo mediante su regla de cálculo circular. Movimiento automático calibre B01. Caja de 43 mm. Cristal de zafiro. Resistencia al agua hasta 30 metros.",
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
  },
  {
    "id": 9,
    "name": "Rolex O.P",
    "price": 16999.99,
    "description": "Rolex Oyster Perpetual Cosmograph con esfera transparente que deja ver el movimiento interno, combinando ingeniería suiza con diseño vanguardista. Caja de acero Oystersteel de alta resistencia, cronógrafo de alto rendimiento y brazalete Oyster. Ideal para quienes valoran la precisión y el diseño técnico.",
    "category": "Relojes",
    "stock": 2,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/21370.jpg"
    ],
    "additionalInfo": "Movimiento automático calibre 4130. Reserva de marcha de 72 horas. Esfera transparente. Caja de 40 mm. Cristal de zafiro. Resistencia al agua hasta 100 metros.",
    "translations": {
      "en": {
        "name": "Rolex O.P",
        "description": "Rolex Oyster Perpetual Cosmograph with transparent dial showcasing its internal mechanism. Combines Swiss engineering with modern design. Oystersteel case, high-performance chronograph, and Oyster bracelet."
      },
      "pt": {
        "name": "Rolex O.P",
        "description": "Rolex Oyster Perpetual Cosmograph com mostrador transparente que revela o mecanismo interno. Combina engenharia suíça com design moderno. Caixa em Oystersteel, cronógrafo de alto desempenho e pulseira Oyster."
      },
      "fr": {
        "name": "Rolex O.P",
        "description": "Rolex Oyster Perpetual Cosmograph avec cadran transparent révélant le mécanisme interne. Allie ingénierie suisse et design contemporain. Boîtier en Oystersteel, chronographe haute performance et bracelet Oyster."
      }
    }
  },
  {
    "id": 10,
    "name": "Rolex O.P DateJust",
    "price": 11499.99,
    "description": "Rolex Oyster Perpetual DateJust para mujer, con elegante esfera blanca y corona engastada en diamantes. Un diseño clásico con toques lujosos, ideal para ocasiones especiales o uso diario refinado. Caja de acero de 31 mm, brazalete Jubilee y movimiento automático calibre 2236.",
    "category": "Relojes",
    "stock": 4,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/58129.jpg"
    ],
    "additionalInfo": "Diseño femenino con detalles en diamantes. Cristal de zafiro resistente a rayaduras. Resistencia al agua hasta 100 metros.",
    "translations": {
      "en": {
        "name": "Rolex O.P DateJust",
        "description": "Rolex Oyster Perpetual DateJust for women, featuring a white dial and diamond-set crown. A classic yet luxurious design, perfect for formal occasions or refined daily wear. 31mm case, Jubilee bracelet, automatic movement calibre 2236."
      },
      "pt": {
        "name": "Rolex O.P DateJust",
        "description": "Rolex Oyster Perpetual DateJust feminino, com mostrador branco e coroa com diamantes. Um design clássico com toques de luxo, ideal para ocasiões especiais ou uso diário refinado. Caixa de 31 mm, pulseira Jubilee, movimento automático calibre 2236."
      },
      "fr": {
        "name": "Rolex O.P DateJust",
        "description": "Rolex Oyster Perpetual DateJust pour femme, avec cadran blanc et couronne sertie de diamants. Un design classique et luxueux, parfait pour les occasions spéciales ou le quotidien raffiné. Boîtier de 31 mm, bracelet Jubilee, mouvement automatique calibre 2236."
      }
    }
  },
  {
    "id": 11,
    "name": "Armani Mecánico",
    "price": 849.99,
    "description": "Reloj Armani metálico con esfera blanca y transparente que revela el mecanismo interno. Movimiento mecánico automático, caja de acero inoxidable, diseño elegante y moderno ideal para uso diario y ocasiones especiales.",
    "category": "Relojes",
    "stock": 3,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/ARMANI%20watch%20mb%20(8)_298533.JPG"
    ],
    "additionalInfo": "Caja de 42 mm, cristal mineral resistente a rayaduras. Correa metálica ajustable. Resistencia al agua hasta 50 metros.",
    "translations": {
      "en": {
        "name": "Armani Mechanical",
        "description": "Armani metallic watch with white and transparent dial showcasing the internal mechanism. Automatic mechanical movement, stainless steel case, elegant and modern design suitable for daily wear and special occasions."
      },
      "pt": {
        "name": "Armani Mecânico",
        "description": "Relógio Armani metálico com mostrador branco e transparente que revela o mecanismo interno. Movimento mecânico automático, caixa em aço inoxidável, design elegante e moderno ideal para uso diário e ocasiões especiais."
      },
      "fr": {
        "name": "Armani Mécanique",
        "description": "Montre Armani métallique avec cadran blanc et transparent révélant le mécanisme interne. Mouvement mécanique automatique, boîtier en acier inoxydable, design élégant et moderne idéal pour un usage quotidien et les occasions spéciales."
      }
    }
  },
  {
    "id": 12,
    "name": "AP Dodaro",
    "price": 47999.99,
    "description": "Audemars Piguet Dodaro con corona de diamantes corte baguette, caja de acero inoxidable de 41 mm y diseño sofisticado que combina lujo y precisión. Movimiento automático de alta gama, ideal para coleccionistas y entusiastas de relojes exclusivos.",
    "category": "Relojes",
    "stock": 4,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/AP%20men%2041mm%2009%20(15)_726810.jpg"
    ],
    "additionalInfo": "Cristal de zafiro, resistencia al agua hasta 50 metros. Detalles finos con acabados de lujo y diseño elegante.",
    "translations": {
      "en": {
        "name": "AP Dodaro",
        "description": "Audemars Piguet Dodaro with baguette-cut diamond crown, 41mm stainless steel case, and sophisticated design combining luxury and precision. High-end automatic movement, ideal for collectors and enthusiasts of exclusive watches."
      },
      "pt": {
        "name": "AP Dodaro",
        "description": "Audemars Piguet Dodaro com coroa de diamantes corte baguete, caixa de aço inoxidável de 41 mm e design sofisticado que combina luxo e precisão. Movimento automático de alta qualidade, ideal para colecionadores e entusiastas de relógios exclusivos."
      },
      "fr": {
        "name": "AP Dodaro",
        "description": "Audemars Piguet Dodaro avec couronne en diamants taille baguette, boîtier en acier inoxydable de 41 mm et design sophistiqué alliant luxe et précision. Mouvement automatique haut de gamme, idéal pour les collectionneurs et amateurs de montres exclusives."
      }
    }
  },
  {
    "id": 13,
    "name": "Gucci Goman",
    "price": 1249.99,
    "description": "Reloj Gucci Goman en acabado dorado, diseño elegante y moderno con caja y correa metálica dorada. Movimiento de cuarzo de alta precisión, ideal para un look sofisticado y atemporal.",
    "category": "Relojes",
    "stock": 3,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/130683.jpg"
    ],
    "additionalInfo": "Cristal mineral resistente a rayaduras. Resistencia al agua hasta 30 metros. Diseño unisex y versátil.",
    "translations": {
      "en": {
        "name": "Gucci Goman",
        "description": "Gucci Goman watch in gold finish, elegant and modern design with gold metal case and bracelet. High-precision quartz movement, perfect for a sophisticated and timeless look."
      },
      "pt": {
        "name": "Gucci Goman",
        "description": "Relógio Gucci Goman com acabamento dourado, design elegante e moderno com caixa e pulseira metálica dourada. Movimento de quartzo de alta precisão, ideal para um visual sofisticado e atemporal."
      },
      "fr": {
        "name": "Gucci Goman",
        "description": "Montre Gucci Goman finition dorée, design élégant et moderne avec boîtier et bracelet métalliques dorés. Mouvement à quartz haute précision, parfait pour un look sophistiqué et intemporel."
      }
    }
  },
  {
    "id": 14,
    "name": "Hublot Gucci",
    "price": 14999.99,
    "description": "Reloj Hublot con correa de cuero y corona Gucci engastada con diamantes en corte baguette. Diseño exclusivo que fusiona la elegancia de Hublot con el lujo distintivo de Gucci. Movimiento automático de alta precisión y caja robusta.",
    "category": "Relojes",
    "stock": 4,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/58984.JPG"
    ],
    "additionalInfo": "Correa de cuero genuino ajustable. Cristal de zafiro resistente a rayaduras. Resistencia al agua hasta 100 metros.",
    "translations": {
      "en": {
        "name": "Hublot Gucy",
        "description": "Hublot watch with leather strap and Gucci crown set with baguette-cut diamonds. Exclusive design combining Hublot's elegance with Gucci's distinctive luxury. High-precision automatic movement and robust case."
      },
      "pt": {
        "name": "Hublot Gucy",
        "description": "Relógio Hublot com pulseira de couro e coroa Gucci cravejada com diamantes corte baguete. Design exclusivo que combina a elegância da Hublot com o luxo distinto da Gucci. Movimento automático de alta precisão e caixa robusta."
      },
      "fr": {
        "name": "Hublot Gucy",
        "description": "Montre Hublot avec bracelet en cuir et couronne Gucci sertie de diamants taille baguette. Design exclusif alliant l'élégance de Hublot au luxe distinctif de Gucci. Mouvement automatique haute précision et boîtier robuste."
      }
    }
  },
  {
    "id": 15,
    "name": "Hublot Genève",
    "price": 23999.99,
    "description": "Reloj Hublot Genève que destaca por su excepcional artesanía mecánica y diamantes incrustados que realzan su lujo y sofisticación. Caja de acero inoxidable con diseño moderno, ideal para amantes de la alta relojería.",
    "category": "Relojes",
    "stock": 5,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/14031.jpg"
    ],
    "additionalInfo": "Movimiento automático de alta precisión. Cristal de zafiro resistente a rayaduras. Resistente al agua hasta 100 metros.",
    "translations": {
      "en": {
        "name": "Hublot Genève",
        "description": "Hublot Genève watch featuring exceptional mechanical craftsmanship and embedded diamonds that enhance its luxury and sophistication. Stainless steel case with a modern design, perfect for haute horology enthusiasts."
      },
      "pt": {
        "name": "Hublot Genève",
        "description": "Relógio Hublot Genève que se destaca pela excepcional artesania mecânica e diamantes incrustados que realçam seu luxo e sofisticação. Caixa em aço inoxidável com design moderno, ideal para amantes da alta relojoaria."
      },
      "fr": {
        "name": "Hublot Genève",
        "description": "Montre Hublot Genève mettant en avant une exceptionnelle artisanerie mécanique et des diamants incrustés qui renforcent son luxe et sa sophistication. Boîtier en acier inoxydable avec un design moderne, parfait pour les amateurs de haute horlogerie."
      }
    }
  },
  {
    "id": 16,
    "name": "Just Cavalli 0128",
    "price": 8999.99,
    "description": "Reloj de mujer Just Cavalli modelo 0128 con corona verde y manilla dorada estilo serpiente, que combina elegancia y un diseño único inspirado en la naturaleza.",
    "category": "Relojes",
    "stock": 7,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/13666.jpg"
    ],
    "additionalInfo": "Movimiento de cuarzo preciso. Resistencia al agua básica. Ideal para uso diario y ocasiones especiales.",
    "translations": {
      "en": {
        "name": "Just Cavalli 0128",
        "description": "Women's Just Cavalli watch model 0128 featuring a green crown and golden snake-style strap, combining elegance and a unique nature-inspired design."
      },
      "pt": {
        "name": "Just Cavalli 0128",
        "description": "Relógio feminino Just Cavalli modelo 0128 com coroa verde e pulseira dourada estilo serpente, combinando elegância e um design único inspirado na natureza."
      },
      "fr": {
        "name": "Just Cavalli 0128",
        "description": "Montre femme Just Cavalli modèle 0128 avec couronne verte et bracelet doré style serpent, alliant élégance et design unique inspiré par la nature."
      }
    }
  },
  {
    "id": 17,
    "name": "Jaeger-LeCoultre 39mm",
    "price": 45999.99,
    "description": "Reloj Jaeger-LeCoultre de 39 mm con diseño clásico y elegante. Caja de acero inoxidable, esfera clara con marcadores minimalistas y correa de cuero negro. Ideal para quienes buscan sofisticación y precisión.",
    "category": "Relojes",
    "stock": 4,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/Jaeger%20LeCoultre%2039mm%2019%20(1)_1751068.jpg"
    ],
    "additionalInfo": "Movimiento automático suizo. Cristal de zafiro resistente a rayaduras. Resistencia al agua hasta 50 metros.",
    "translations": {
      "en": {
        "name": "Jaeger-LeCoultre 39mm",
        "description": "Jaeger-LeCoultre 39mm watch with classic and elegant design. Stainless steel case, clear dial with minimalist markers, and black leather strap. Perfect for those seeking sophistication and precision."
      },
      "pt": {
        "name": "Jaeger-LeCoultre 39mm",
        "description": "Relógio Jaeger-LeCoultre de 39 mm com design clássico e elegante. Caixa de aço inoxidável, mostrador claro com marcadores minimalistas e pulseira de couro preta. Ideal para quem busca sofisticação e precisão."
      },
      "fr": {
        "name": "Jaeger-LeCoultre 39mm",
        "description": "Montre Jaeger-LeCoultre 39mm au design classique et élégant. Boîtier en acier inoxydable, cadran clair avec marqueurs minimalistes et bracelet en cuir noir. Parfait pour ceux qui recherchent sophistication et précision."
      }
    }
  },
  {
    "id": 18,
    "name": "Konstantin Chaykin",
    "price": 69999.99,
    "description": "Reloj Konstantin Chaykin con caja de 42 mm y grosor de 11.8 mm, diseño innovador y audaz que combina arte y mecánica. Esfera detallada con indicadores únicos y acabado sofisticado. Para coleccionistas exigentes.",
    "category": "Relojes",
    "stock": 3,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/Konstantin%20Chaykin%2042X11.8mm%2045%20(5)_1203494.jpg"
    ],
    "additionalInfo": "Movimiento automático de alta precisión. Cristal de zafiro resistente a rayaduras. Resistencia al agua hasta 30 metros.",
    "translations": {
      "en": {
        "name": "Konstantin Chaykin",
        "description": "Konstantin Chaykin watch with a 42 mm case and 11.8 mm thickness, featuring an innovative and bold design that blends art and mechanics. Detailed dial with unique indicators and a sophisticated finish. For demanding collectors."
      },
      "pt": {
        "name": "Konstantin Chaykin",
        "description": "Relógio Konstantin Chaykin com caixa de 42 mm e espessura de 11.8 mm, design inovador e audacioso que combina arte e mecânica. Mostrador detalhado com indicadores únicos e acabamento sofisticado. Para colecionadores exigentes."
      },
      "fr": {
        "name": "Konstantin Chaykin",
        "description": "Montre Konstantin Chaykin avec un boîtier de 42 mm et une épaisseur de 11,8 mm, design innovant et audacieux alliant art et mécanique. Cadran détaillé avec des indicateurs uniques et une finition sophistiquée. Pour les collectionneurs exigeants."
      }
    }
  },
  {
    "id": 19,
    "name": "Mazzucato 42mm",
    "price": 18500.00,
    "description": "Reloj Mazzucato de 42 mm que destaca por su diseño moderno y deportivo, con detalles cuidados y acabado robusto. Ideal para quienes buscan estilo y funcionalidad en un solo accesorio.",
    "category": "Relojes",
    "stock": 6,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/Mazzucato%2042mm%2013%20(9)_1695346.jpg"
    ],
    "additionalInfo": "Movimiento automático suizo. Cristal de zafiro antirreflejo. Resistencia al agua hasta 100 metros.",
    "translations": {
      "en": {
        "name": "Mazzucato 42mm",
        "description": "Mazzucato 42mm watch featuring a modern and sporty design with detailed craftsmanship and a robust finish. Perfect for those seeking style and functionality in one accessory."
      },
      "pt": {
        "name": "Mazzucato 42mm",
        "description": "Relógio Mazzucato de 42 mm que se destaca pelo design moderno e esportivo, com detalhes cuidados e acabamento robusto. Ideal para quem busca estilo e funcionalidade em um único acessório."
      },
      "fr": {
        "name": "Mazzucato 42mm",
        "description": "Montre Mazzucato de 42 mm mettant en avant un design moderne et sportif avec des détails soignés et une finition robuste. Idéal pour ceux qui recherchent style et fonctionnalité en un seul accessoire."
      }
    }
  },
  {
    "id": 22,
    "name": "Torino Lamborghini",
    "price": 35000.00,
    "description": "Reloj Torino Lamborghini que combina un diseño deportivo y elegante inspirado en la marca automovilística de lujo. Caja robusta y detalles llamativos, ideal para quienes buscan exclusividad y estilo.",
    "category": "Relojes",
    "stock": 4,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/6204.jpg"
    ],
    "additionalInfo": "Movimiento automático de alta precisión. Cristal resistente a rayaduras. Resistencia al agua hasta 100 metros.",
    "translations": {
      "en": {
        "name": "Torino Lamborghini",
        "description": "Torino Lamborghini watch combining sporty and elegant design inspired by the luxury automotive brand. Robust case and striking details, perfect for those seeking exclusivity and style."
      },
      "pt": {
        "name": "Torino Lamborghini",
        "description": "Relógio Torino Lamborghini que combina um design esportivo e elegante inspirado na marca automotiva de luxo. Caixa robusta e detalhes marcantes, ideal para quem busca exclusividade e estilo."
      },
      "fr": {
        "name": "Torino Lamborghini",
        "description": "Montre Torino Lamborghini combinant un design sportif et élégant inspiré par la marque automobile de luxe. Boîtier robuste et détails saisissants, parfait pour ceux qui recherchent exclusivité et style."
      }
    }
  },
  {
    "id": 23,
    "name": "Bacheron Constantin",
    "price": 48000.00,
    "description": "Reloj Bacheron Constantin con correa de cuero y corona dorada. Cuenta con una elegante esfera transparente que muestra la complejidad de su movimiento interno, ideal para amantes de la alta relojería clásica.",
    "category": "Relojes",
    "stock": 3,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/59023.jpg"
    ],
    "additionalInfo": "Movimiento mecánico visible a través de la esfera transparente. Correa de cuero de alta calidad. Resistente al agua.",
    "translations": {
      "en": {
        "name": "Bacheron Constantin",
        "description": "Bacheron Constantin watch with leather strap and golden crown. Features an elegant transparent dial revealing the complexity of its internal movement, perfect for classic haute horology enthusiasts."
      },
      "pt": {
        "name": "Bacheron Constantin",
        "description": "Relógio Bacheron Constantin com pulseira de couro e coroa dourada. Apresenta um elegante mostrador transparente que revela a complexidade do seu movimento interno, ideal para amantes da alta relojoaria clássica."
      },
      "fr": {
        "name": "Bacheron Constantin",
        "description": "Montre Bacheron Constantin avec bracelet en cuir et couronne dorée. Dispose d'un élégant cadran transparent révélant la complexité de son mouvement interne, parfait pour les amateurs d'horlogerie classique."
      }
    }
  },
  {
    "id": 24,
    "name": "Van Cleef & Arpels",
    "price": 35000.00,
    "description": "Reloj Van Cleef & Arpels para mujer con corona adornada con diamantes. Diseño elegante y sofisticado, ideal para quienes buscan lujo y distinción en su accesorio.",
    "category": "Relojes",
    "stock": 4,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/1988.jpg"
    ],
    "additionalInfo": "Movimiento de alta precisión. Corona con diamantes incrustados. Resistente al agua.",
    "translations": {
      "en": {
        "name": "Van Cleef & Arpels",
        "description": "Van Cleef & Arpels women's watch featuring a diamond-studded crown. Elegant and sophisticated design, perfect for those seeking luxury and distinction in their accessory."
      },
      "pt": {
        "name": "Van Cleef & Arpels",
        "description": "Relógio Van Cleef & Arpels feminino com coroa adornada com diamantes. Design elegante e sofisticado, ideal para quem busca luxo e distinção no acessório."
      },
      "fr": {
        "name": "Van Cleef & Arpels",
        "description": "Montre Van Cleef & Arpels pour femme avec couronne ornée de diamants. Design élégant et sophistiqué, parfait pour ceux qui recherchent le luxe et la distinction dans leur accessoire."
      }
    }
  },
  {
    "id": 25,
    "name": "Vivienne Westwood",
    "price": 12999.99,
    "description": "Reloj Vivienne Westwood con esfera azul y correa metálica. Diseño moderno y elegante, ideal para un estilo sofisticado y contemporáneo.",
    "category": "Relojes",
    "stock": 7,
    "images": [
      "https://pic3.qiqiyg.com/upfile/category/125712.jpg"
    ],
    "additionalInfo": "Movimiento de cuarzo preciso. Correa metálica resistente y cómoda. Resistente al agua para uso diario.",
    "translations": {
      "en": {
        "name": "Vivienne Westwood",
        "description": "Vivienne Westwood watch with blue dial and metal strap. Modern and elegant design, perfect for a sophisticated and contemporary style."
      },
      "pt": {
        "name": "Vivienne Westwood",
        "description": "Relógio Vivienne Westwood com mostrador azul e pulseira metálica. Design moderno e elegante, ideal para um estilo sofisticado e contemporâneo."
      },
      "fr": {
        "name": "Vivienne Westwood",
        "description": "Montre Vivienne Westwood avec cadran bleu et bracelet métallique. Design moderne et élégant, parfait pour un style sophistiqué et contemporain."
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
    `${dict.whatsapp.productInterest}: ${product.name}, ${dict.whatsapp.availability}
    \n\`(ID: ${product.id})\``,
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
