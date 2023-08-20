import styles from './navigation.module.scss'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </nav>
  )
}
