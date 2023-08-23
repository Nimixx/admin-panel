import styles from './dashborad.module.scss'
import SaleStats from '../ui/stats/sales/SaleStats'
import { Wallet, Gem, Landmark } from 'lucide-react'

export default function Dashboard() {
  return (
    <section className={styles.grid_template}>
      <section className={styles.grid__item}>
        <SaleStats title="Sales" results="2486" badge="5%" arrow="↗" icon={<Wallet />} />
      </section>
      <section className={styles.grid__item}>
        <SaleStats title="Rewards" results="62" badge="5%" arrow="↗" icon={<Gem />} />
      </section>
      <section className={styles.grid__item}>
        <SaleStats title="Payout" results="645 $" badge="5%" arrow="↗" icon={<Landmark />} />
      </section>
      <article className={`${styles.grid__item} ${styles.grid__height}`}></article>
      <article className={`${styles.grid__item} ${styles.grid__height}`}></article>
      <article className={styles.grid__item}></article>
      <article className={styles.grid__item}></article>
      <article className={`${styles.grid__item} ${styles.grid__wide}`}></article>
    </section>
  )
}
