import { useScrollToTop } from "@/hooks/useScrollToTop"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutSection } from "@/components/about-section"

export default function HomePage() {
  useScrollToTop()

  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
    </main>
  )
}
