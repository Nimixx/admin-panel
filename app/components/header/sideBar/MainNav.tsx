import styles from './mainNav.module.scss'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import { useThemeContext } from '@/app/context/ThemeContext'

export default function MainNav() {
  const { theme } = useThemeContext()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={styles.profile__btn} aria-label="Customize options">
        <Menu className={styles.palette} size={25} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          data-theme={theme}
          className={styles.content}
          sideOffset={5}
          align="start"
        >
          <DropdownMenu.Arrow className={styles.arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
