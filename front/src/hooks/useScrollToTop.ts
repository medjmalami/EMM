"use client"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function useScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // Force scroll to top on route change
    const scrollToTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Use setTimeout to ensure DOM is updated
    setTimeout(scrollToTop, 0)
  }, [location.pathname])
}
