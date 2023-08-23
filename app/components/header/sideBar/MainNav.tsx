import styles from './mainNav.module.scss'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu, BellDot, AreaChart, BarChart2, PieChart, CloudCog, HeartHandshake, LayoutGrid, Archive } from 'lucide-react'
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
          <DropdownMenu.DropdownMenuGroup className={styles.group}>
          <DropdownMenu.Item className={styles.item}>
              <LayoutGrid className={styles.icon} />
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>
              <BellDot className={styles.icon} />
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>
              <AreaChart className={styles.icon} />
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>
              <BarChart2 className={styles.icon} />
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>
              <PieChart className={styles.icon} />
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>
              <CloudCog className={styles.icon} />
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>
              <HeartHandshake className={styles.icon} />
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>
              <Archive className={styles.icon} />
            </DropdownMenu.Item>
          </DropdownMenu.DropdownMenuGroup>
          <DropdownMenu.Arrow className={styles.arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
