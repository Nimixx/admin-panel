import React from 'react'
import styles from './userMenu.module.scss'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useThemeContext } from '@/app/context/ThemeContext'

export default function UserMenu() {
  const { theme } = useThemeContext()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={styles.profile__btn} aria-label="Customise options">
        <img className={styles.avatar} src="avatar.jpg" alt="user profile avatar" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          data-theme={theme}
          className={styles.content}
          sideOffset={5}
          align="end"
        >
          <DropdownMenu.Label className={styles.userName}>Josh</DropdownMenu.Label>
          <DropdownMenu.Separator className={styles.separator} />
          <DropdownMenu.Group className={styles.group}>
            <DropdownMenu.Label className={styles.label}>Profile</DropdownMenu.Label>
            <DropdownMenu.Item className={styles.item}>Information</DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>Settings</DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator className={styles.separator} />
          <DropdownMenu.Group className={styles.group}>
            <DropdownMenu.Label className={styles.label}>Help</DropdownMenu.Label>
            <DropdownMenu.Item className={styles.item}>FAQ</DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>Contacts</DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Arrow className={styles.arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
