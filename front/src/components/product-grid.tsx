
import { useState, useMemo, useRef, useEffect } from "react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products-data"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ProductGrid() {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Extract unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map((product) => product.category))]
    return ["all", ...uniqueCategories]
  }, [])

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products
    }
    return products.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setIsDropdownOpen(false)
  }

  const getDisplayName = (category: string) => {
    if (language === "fr") {
      if (category === "all") {
        return "Toutes les catégories"
      }
      else if (category === "locks") {
        return "Serrures"
      }
      else if (category === "Tools") {
        return "Outils"
      }
      else {
        return category
      }
    }
    else {
      return category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)
    }
  }

  return (
    <div className="space-y-6">
      {/* Custom Filter Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <Button variant="outline" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-48 justify-between">
          {getDisplayName(selectedCategory)}
          <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
        </Button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`w-full text-left px-3 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-md last:rounded-b-md transition-colors ${
                  selectedCategory === category
                    ? "bg-gray-100 dark:bg-gray-700 font-medium text-gray-900 dark:text-white"
                    : ""
                }`}
              >
                {getDisplayName(category)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Products Count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredProducts.length} of {products.length} products
        {selectedCategory !== "all" && (
          <span className="ml-2">
            in <span className="font-medium capitalize">{selectedCategory}</span>
          </span>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No products message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No products found in the <span className="capitalize font-medium">{selectedCategory}</span> category.
          </p>
          <Button variant="outline" onClick={() => setSelectedCategory("all")} className="mt-4">
            View All Products
          </Button>
        </div>
      )}
    </div>
  )
}
