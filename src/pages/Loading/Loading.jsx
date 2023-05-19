// assets
import loadingIcon from '../../assets/branding/loading_cs.svg'

// styles
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <main className={styles.loadingcontainer}>
      <section className={styles.splash}>
        <img src={loadingIcon} alt="Cryptid Seeker Logo & Loading  message" />
      </section>
    </main>
  )
} 

export default Loading
