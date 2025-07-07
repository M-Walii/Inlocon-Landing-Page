'use client'

// Floating button to scroll the page to the top
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import clsx from 'clsx'

export const ScrollToTopButton = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [isVisible, setIsVisible] = useState(false)

  // Show button when user scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Render floating button if visible
  return (
    <div className="fixed bottom-8 right-8 z-50 scroll-to-top-button">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={clsx(
            'p-3 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
            isDark
              ? 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500'
              : 'bg-white text-[#0060A9] hover:bg-gray-100 focus:ring-gray-900'
          )}
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
} 