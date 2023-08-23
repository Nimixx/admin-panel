import styles from './dashborad.module.scss'

export default function Dashboard() {
  return (
    <section className={styles.grid_template}>
      <article className={styles.grid__item}></article>
      <article className={styles.grid__item}></article>
      <article className={styles.grid__item}></article>
      <article className={`${styles.grid__item} ${styles.grid__height}`}></article>
      <article className={`${styles.grid__item} ${styles.grid__height}`}></article>
      <article className={styles.grid__item}></article>
      <article className={styles.grid__item}></article>
      <article className={`${styles.grid__item} ${styles.grid__wide}`}></article>
    </section>
  )
}
