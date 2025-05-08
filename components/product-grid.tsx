"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Importamos los datos de productos desde el archivo separado
import { type Product, getLocalizedProducts, createWhatsAppLink } from "@/data/products"
// Cambiar la importación de getDictionaryClient
import { getDictionaryClient } from "@/dictionaries/client"

// Componente para la galería de imágenes de cada producto
const ProductImageGallery = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative aspect-square overflow-hidden rounded-t-lg">
      <Image
        src={images[currentImageIndex] || "/placeholder.svg"}
        alt="Imagen del producto"
        unoptimized
        fill
        className="object-cover transition-all"
      />
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1"
            onClick={prevImage}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Imagen anterior</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1"
            onClick={nextImage}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Siguiente imagen</span>
          </Button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
            {images.map((_, index) => (
              <span
                key={index}
                className={`block h-1.5 w-1.5 rounded-full ${
                  currentImageIndex === index ? "bg-primary" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// Componente para cada tarjeta de producto
const ProductCard = ({ product, lang }: { product: Product; lang: string }) => {
  const dict = getDictionaryClient(lang)

  return (
    <Card className="overflow-hidden">
      <ProductImageGallery images={product.images} />
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
            {product.stock !== undefined && (
              <p className="text-xs mt-1">
                {product.stock > 0
                  ? `${dict.products.stock}: ${product.stock} ${dict.products.units}`
                  : dict.products.outOfStock}
              </p>
            )}
          </div>
          {/* <Badge variant="outline" className="ml-2">
            ${product.price}
          </Badge> */}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" asChild disabled={product.stock === 0}>
          <a
            href={createWhatsAppLink(product, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            {product.stock === 0 ? dict.products.outOfStock : dict.products.buyButton}{" "}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function ProductGrid({ lang }: { lang: string }) {
  const products = getLocalizedProducts(lang)

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} lang={lang} />
      ))}
    </>
  )
}
