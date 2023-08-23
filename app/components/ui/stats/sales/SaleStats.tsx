import styles from './sales.module.scss'

type SalesProps = {
  title: string
  results: string
  badge: string
  icon: React.ReactNode
}

export default function SaleStats({ title, results, badge, icon }: SalesProps) {

  return (
    <article className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.icon}>{icon}</div>
      </div>
      <p className={styles.results}>{results}</p>
      <div className={styles.wrapper}>
        <p
          className={styles.badge}
        >
          {badge}
        </p>
        <p className={styles.info}>From pass month</p>
      </div>
    </article>
  )
}
