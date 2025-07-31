'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    const shouldBeDark =
      savedTheme === 'dark' || (!savedTheme && systemPrefersDark)

    setIsDark(shouldBeDark)
    setIsLoaded(true)
    document.documentElement.setAttribute(
      'data-theme',
      shouldBeDark ? 'dark' : 'light',
    )
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    document.documentElement.setAttribute(
      'data-theme',
      newTheme ? 'dark' : 'light',
    )
  }

  const resetToSystemPreference = () => {
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    if (systemPrefersDark !== isDark) {
      toggleTheme()
    }
  }

  const value = {
    isDark,
    toggleTheme,
    resetToSystemPreference,
    isLoaded,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
