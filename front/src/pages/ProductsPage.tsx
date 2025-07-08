import { useScrollToTop } from "@/hooks/useScrollToTop"
import { ProductGrid } from "@/components/product-grid"
import { useLanguage } from "@/contexts/language-context"
export default function ProductsPage() {
  const { t } = useLanguage()
  useScrollToTop()

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{t.products.title}</h1>
        <p className="text-muted-foreground">{t.products.description}</p>
      </div>
      <ProductGrid />
    </main>
  )
}
