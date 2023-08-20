import styles from './menu.module.scss'
import { Menu} from 'lucide-react'


export default function SideBar() {
  return (
    <section className={styles.container}>
      <Menu/>
      <p>Dashboard</p>
    </section>
  )
}
