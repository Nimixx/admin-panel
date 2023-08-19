"use client"

import Switch from './components/Switch'
import styles from './page.module.scss'

import { useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <main className={`${theme === 'light' ? styles.light : styles.dark} ${styles.container}`}>
      <Switch onClick={toggleTheme} />
    </main>
  )
}
