import { useScrollToTop } from "@/hooks/useScrollToTop"
import { ProductGrid } from "@/components/product-grid"

export default function ProductsPage() {
  useScrollToTop()

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <p className="text-muted-foreground">Discover our complete range of high-quality hardware products</p>
      </div>
      <ProductGrid />
    </main>
  )
}
