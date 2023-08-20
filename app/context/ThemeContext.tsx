'use client'

import React, { createContext, useState, useContext } from 'react'

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
  const [theme, setTheme] = useState<Theme>('dark')

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
