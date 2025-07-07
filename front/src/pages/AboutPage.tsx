import { useScrollToTop } from "@/hooks/useScrollToTop"
import { AboutSection } from "@/components/about-section"

export default function AboutPage() {
  useScrollToTop()

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About EMM Hardware</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about our company, our mission, and what makes us your trusted hardware partner.
          </p>
        </div>
      </div>
      <AboutSection />
    </main>
  )
}
