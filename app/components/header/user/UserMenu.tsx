import styles from './userMenu.module.scss'
import React from 'react'

export default function UserMenu() {
  return (
    <nav className={styles.nav}>
        <img className={styles.avatar} src="avatar.jpg" alt="" />
    </nav>
  )
}
