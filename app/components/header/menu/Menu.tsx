import styles from './menu.module.scss'
import { Icon } from '@iconify/react'


export default function Menu() {
  return (
    <section className={styles.container}>
      <Icon icon="ep:menu" />
      <p>Dashboard</p>
    </section>
  )
}
