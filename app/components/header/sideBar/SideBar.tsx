import MainNav from './MainNav'
import styles from './menu.module.scss'
import Link from 'next/link'

export default function SideBar() {
  return (
    <section className={styles.container}>
      <MainNav />
      <Link href="/">
        <h2 className={styles.title}>Cortana</h2>
      </Link>
    </section>
  )
}
