import React from 'react'
import NavSpacer from '@/app/components/ui/NavSpacer'
import styles from './navigation.module.scss'

export default function Navigation() {
  const primaryLinks = [
    { text: 'Profile', url: '#' },
    { text: 'Settings', url: '#' },
    { text: 'Logout', url: '#' },
  ]

  const secondaryLinks = [
    { text: 'Support', url: '#' },
    { text: 'Contact', url: '#' },
    { text: 'FAQ', url: '#' },
  ]

  return (
    <nav className={styles.navigation}>
      <h4 className={styles.username}>Marcus</h4>
      <NavSpacer />
      <ul className={styles.navList}>
        {primaryLinks.map((link, index) => (
          <li className={styles.navItem} key={index}>
            <a className={styles.navLink} href={link.url}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <NavSpacer />
      <ul className={styles.navList}>
        {secondaryLinks.map((link, index) => (
          <li className={styles.navItem} key={index}>
            <a className={styles.navLink} href={link.url}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
