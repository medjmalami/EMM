import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import HomePage from "@/pages/HomePage"
import ProductsPage from "@/pages/ProductsPage"
import ProductDetailPage from "@/pages/ProductDetailPage"
import AboutPage from "@/pages/AboutPage"
import ContactPage from "@/pages/ContactPage"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="emm-theme">
      <LanguageProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
