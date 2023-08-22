import MainNav from './MainNav'
import styles from './menu.module.scss'

export default function SideBar() {
  return (
    <section className={styles.container}>
      <MainNav />
      <h2 className={styles.title}>Dashboard</h2>
    </section>
  )
}
