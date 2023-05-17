// styles
import styles from './Landing.module.css'
import logotype from '../../assets/branding/logotype_cs.svg'

const Landing = () => {
  return (
    <main className={styles.landingcontainer}>
      <section className={styles.splash}>
          <img src={logotype} alt="A cute owl" />
        </section>
        <section className={styles.about}>
          <header>
            <h1>Presented by: The Phantom Props</h1>
          </header>
            <p>
            An app for people who hunt mythological creatures and want to share stories of their encounters with others & learn more about cryptids in the process.
            </p>
        </section>
    </main>
  )
}

export default Landing
