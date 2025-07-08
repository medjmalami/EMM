import { useScrollToTop } from "@/hooks/useScrollToTop"
import { AboutSection } from "@/components/about-section"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()
  useScrollToTop()

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.about.firsttitle}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.about.firstdescription}
          </p>
        </div>
      </div>
      <AboutSection />
    </main>
  )
}
