'use client'

import styles from './style/contentLayout.module.scss'
import React from 'react'
import { useThemeContext } from '@/app/context/ThemeContext'

type ContentProps = {
  children: React.ReactNode
}

export default function ContentLayout({ children }: ContentProps) {
  const { theme } = useThemeContext()

  return (
    <main data-theme={theme} className={styles.container}>
      {children}
    </main>
  )
}
