
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { useLanguage } from "@/contexts/language-context"
import type { Product } from "@/lib/products-data"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage()

  const name = language === "fr" ? product.name.fr : product.name.en
  const description = language === "fr" ? product.description.fr : product.description.en

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isNew && <Badge className="absolute top-2 left-2">New</Badge>}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center justify-between w-full">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          <Button asChild size="sm">
            <Link to={`/products/${product.id}`}>{t.product.view}</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
