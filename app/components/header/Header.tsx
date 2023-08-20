'use client'

import styles from './header.module.scss'
import { useThemeContext } from '@/app/context/ThemeContext'

import SideBar from './sideBar/SideBar'
import UserMenu from './user/UserMenu'
import ThemeSwitch from './themeSwitch/ThemeSwitch'

export default function Header() {
  const { theme } = useThemeContext()

  return (
    <header data-theme={theme} className={styles.header}>
      <SideBar />
      <section className={styles.user__wrapper}>
        <ThemeSwitch />
        <UserMenu />
      </section>
    </header>
  )
}
