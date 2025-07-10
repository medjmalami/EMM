
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/language-context"
import { Star, Truck, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "@/lib/products-data"
import { Link } from "react-router-dom"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { language, t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const name = language === "fr" ? product.name.fr : product.name.en
  const description = language === "fr" ? product.description.fr : product.description.en

  // Handle both single image and multiple images
  const images = product.images || [product.image || "/placeholder.svg"]
  const hasMultipleImages = images.length > 1

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Product Image Carousel */}
      <div className="space-y-4">
        <div className="relative aspect-square overflow-hidden rounded-lg group">
          <img
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={`${name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />

          {product.isNew && <Badge className="absolute top-4 left-4 z-10">New</Badge>}

          {/* Navigation Arrows - Only show if multiple images */}
          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black  rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4 text-white" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4 text-white" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail Navigation - Only show if multiple images */}
        {hasMultipleImages && (
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                  index === currentImageIndex
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Dot Indicators - Alternative to thumbnails for fewer images */}
        {hasMultipleImages && images.length <= 5 && (
          <div className="flex justify-center space-x-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(4.0)</span>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-2">{t.product.description}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="space-y-4">
          <Button size="lg" className="w-full">
            <Link to={"/contact"}>{t.product.addToCart}</Link>
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {product.shipping && (
              <Card>
                <CardContent className="flex items-center space-x-2 p-4">
                  <Truck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">{t.product.freeShipping}</p>
                    <p className="text-xs text-muted-foreground">{t.product.freeShippingDesc}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {product.warranty && (
              <Card>
                <CardContent className="flex items-center space-x-2 p-4">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">{t.product.warranty}</p>
                    <p className="text-xs text-muted-foreground">{t.product.warrantyDesc}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {product.returns && (
              <Card>
                <CardContent className="flex items-center space-x-2 p-4">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">{t.product.returns}</p>
                    <p className="text-xs text-muted-foreground">{t.product.returnsDesc}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
