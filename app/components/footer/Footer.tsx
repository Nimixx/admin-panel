'use client'

import React from 'react'
import styles from './footer.module.scss'
import { useThemeContext } from '@/app/context/ThemeContext'

export default function Footer() {

  const { theme } = useThemeContext()
  const year = new Date().getFullYear()

  return (
    <footer data-theme={theme} className={styles.container}><p>&copy; {year} Nimixx.dev</p></footer>
  )
}
