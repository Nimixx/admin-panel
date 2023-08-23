import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useThemeContext } from '@/app/context/ThemeContext'
import styles from './themeSwitch.module.scss'
import { Palette, Moon, Sun } from 'lucide-react'

export default function ThemeSwitch() {
  const { theme, setTheme } = useThemeContext()

  const handleThemeChange = (value: string) => {
    setTheme(value as 'dark' | 'light')
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={styles.profile__btn} aria-label="Customize options">
        <Palette />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          data-theme={theme}
          className={styles.content}
          sideOffset={5}
          align="end"
        >
          <DropdownMenu.RadioGroup value={theme} onValueChange={handleThemeChange}>
            <DropdownMenu.RadioItem className={styles.radio__item} value="light">
              <DropdownMenu.ItemIndicator className={styles.indicator}>
                <Sun className={styles.icon} />
              </DropdownMenu.ItemIndicator>
              Light
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem className={styles.radio__item} value="dark">
              <DropdownMenu.ItemIndicator className={styles.indicator}>
                <Moon className={styles.icon} />
              </DropdownMenu.ItemIndicator>
              Dark
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Arrow className={styles.arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
