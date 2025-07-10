
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Users, Award, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Wrench,
      title: t.about.quality.title,
      description: t.about.quality.description,
    },
    {
      icon: Users,
      title: t.about.support.title,
      description: t.about.support.description,
    },
    {
      icon: Award,
      title: t.about.experience.title,
      description: t.about.experience.description,
    },
    {
      icon: Globe,
      title: t.about.shipping.title,
      description: t.about.shipping.description,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.about.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
