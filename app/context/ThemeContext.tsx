'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'

type ThemeContextProviderProp = {
  children: React.ReactNode
}

type Theme = 'dark' | 'light'

type ThemeContextType = {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeProvider({ children }: ThemeContextProviderProp) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme')
    return (storedTheme as Theme) || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
