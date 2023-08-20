'use client'

import styles from './header.module.scss'
import { useThemeContext } from '@/app/context/ThemeContext'

import SideBar from './sideBar/SideBar'
import UserMenu from './user/UserMenu'

export default function Header() {
  const { theme } = useThemeContext()

  return (
    <header data-theme={theme} className={styles.header}>
      <SideBar />
      <UserMenu />
    </header>
  )
}
