import styles from './style/navSpacer.module.scss'
import { useThemeContext } from '@/app/context/ThemeContext'

export default function NavSpacer() {
  const { theme } = useThemeContext()

  return <div data-theme={theme} className={styles.spacer} />
}
