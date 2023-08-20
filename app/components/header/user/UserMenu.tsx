'use client'

import styles from './userMenu.module.scss'
import { ChevronDown } from 'lucide-react'

import { useState } from 'react'
import Navigation from './navigation/Navigation'

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <section className={styles.container}>
      <button onClick={toggleMenu} className={styles.profile__btn}>
        <img className={styles.avatar} src="avatar.jpg" alt="user profile avatar" />
        <ChevronDown
          className={`${styles.arrow} ${isOpen ? styles.arrow__open : styles.arrow__close}`}
        />
      </button>
      {isOpen ? <Navigation /> : null}
    </section>
  )
}
