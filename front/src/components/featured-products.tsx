
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products-data"
import { useLanguage } from "@/contexts/language-context"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function FeaturedProducts() {
  const { t } = useLanguage()
  const featuredProducts = products.slice(0, 6)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.products.featured}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.products.featuredDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/products">{t.products.viewAll}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
