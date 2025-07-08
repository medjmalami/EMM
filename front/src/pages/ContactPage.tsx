import { useScrollToTop } from "@/hooks/useScrollToTop"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { language,t } = useLanguage()
  useScrollToTop()

  const phone = language === "fr" ? "Téléphone" : "Phone"

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.contact.firsttitle}</h1>
          <p className="text-lg text-muted-foreground">{t.contact.firstdescription}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">{t.contact.subtitle}</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-foreground text-sm">📧</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">emm.sfax@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-foreground text-sm">📞</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{phone}</h3>
                    <p className="text-muted-foreground">+(216) 98 241 790</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">{t.contact.boxtitle}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t.contact.firstpoint}</li>
                <li>• {t.contact.secondpoint}</li>
                <li>• {t.contact.thirdpoint}</li>
                <li>• {t.contact.fourthpoint}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
