// styles
import styles from './Landing.module.css'
import logotype from '../../assets/branding/logotype_cs.svg'

const Landing = () => {
  return (
    <main className={styles.landingcontainer}>
      <section className={styles.splash}>
          <img src={logotype} alt="A cute owl" />
        </section>
    </main>
  )
}

export default Landing
