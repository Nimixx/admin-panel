'use client'

import { useThemeContext } from './context/ThemeContext'
import Switch from './components/Switch'
import styles from './page.module.scss'

export default function Home() {
  const { theme, setTheme } = useThemeContext()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <main className={`${theme === 'light' ? styles.light : styles.dark} ${styles.container}`}>
      <Switch onClick={toggleTheme} />
    </main>
  )
}
