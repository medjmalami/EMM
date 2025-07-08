"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { Send } from "lucide-react"

export function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Using formsubmit.co - Note: This service has HTTPS security concerns
      // Alternative: You could use a server action or other form service
      const response = await fetch("https://formsubmit.co/emmsfax@gmail.com", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✓</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{t.contact.success}</h3>
          <p className="text-muted-foreground">{t.contact.successMessage}</p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
            {t.contact.sendAnother}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.contact.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hidden fields for formsubmit.co configuration */}
          <input type="hidden" name="_subject" value="New Contact Form Submission - EMM Hardware" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t.contact.name}</Label>
              <Input id="name" name="name" type="text" required placeholder={t.contact.namePlaceholder} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.contact.email}</Label>
              <Input id="email" name="email" type="email" required placeholder={t.contact.emailPlaceholder} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t.contact.phone}</Label>
            <Input id="phone" name="phone" type="tel" placeholder={t.contact.phonePlaceholder} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">{t.contact.subject}</Label>
            <Input id="subject" name="subject" type="text" required placeholder={t.contact.subjectPlaceholder} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t.contact.message}</Label>
            <Textarea id="message" name="message" required rows={5} placeholder={t.contact.messagePlaceholder} />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                {t.contact.sending}
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                {t.contact.send}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
