"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/language-context"
import { Star, Truck, Shield, RotateCcw } from "lucide-react"
import type { Product } from "@/lib/products-data"
import { Link } from "react-router-dom"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { language, t } = useLanguage()

  const name = language === "fr" ? product.name.fr : product.name.en
  const description = language === "fr" ? product.description.fr : product.description.en

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="space-y-4">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <img src={product.image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          {product.isNew && <Badge className="absolute top-4 left-4">New</Badge>}
        </div>
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
          <p className="text-3xl font-bold text-primary mb-4">${product.price}</p>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-2">{t.product.description}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="space-y-4">
          <Button size="lg" className="w-full">
            <Link to={'/contact'}>{t.product.addToCart}</Link>
            
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardContent className="flex items-center space-x-2 p-4">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">{t.product.freeShipping}</p>
                  <p className="text-xs text-muted-foreground">{t.product.freeShippingDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center space-x-2 p-4">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">{t.product.warranty}</p>
                  <p className="text-xs text-muted-foreground">{t.product.warrantyDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center space-x-2 p-4">
                <RotateCcw className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">{t.product.returns}</p>
                  <p className="text-xs text-muted-foreground">{t.product.returnsDesc}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
