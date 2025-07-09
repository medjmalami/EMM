
import { useParams, Navigate } from "react-router-dom"
import { useScrollToTop } from "@/hooks/useScrollToTop"
import { ProductDetail } from "@/components/product-detail"
import { products } from "@/lib/products-data"

export default function ProductDetailPage() {
  useScrollToTop()

  const { id } = useParams<{ id: string }>()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return <Navigate to="/products" replace />
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </main>
  )
}
