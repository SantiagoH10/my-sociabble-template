'use client'

import { useTheme } from '@/context/ThemeContext'
import { Sun, Moon, TvMinimal } from 'lucide-react'

const ThemeToggle = () => {
  const { isDark, toggleTheme, resetToSystemPreference, isLoaded } = useTheme()

  // Show placeholder while loading to prevent hydration mismatch
  if (!isLoaded) {
    return (
      <div className="flex rounded-lg bg-gray-100 p-1 dark:border-2 dark:border-gray-300 dark:bg-gray-800">
        {/* Placeholder buttons with same dimensions */}
        <div className="h-[42px] w-[42px] rounded-md p-2" />
        <div className="h-[42px] w-[42px] rounded-md p-2" />
      </div>
    )
  }

  return (
    <div className="flex rounded-lg bg-gray-100 p-1 dark:border-2 dark:border-gray-300 dark:bg-gray-800">
      {/* Toggle Button (Moon/Sun) */}
      <button
        onClick={toggleTheme}
        className="rounded-md p-2 text-gray-600 transition-all duration-200 hover:bg-white hover:text-red-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* System Preference Reset Button */}
      <button
        onClick={resetToSystemPreference}
        className="rounded-md p-2 text-gray-600 transition-all duration-200 hover:bg-white hover:text-red-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        aria-label="Use system preference"
        title="Use system preference"
      >
        <TvMinimal size={18} />
      </button>
    </div>
  )
}

export default ThemeToggle
