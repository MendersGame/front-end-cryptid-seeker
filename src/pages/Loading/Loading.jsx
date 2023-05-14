// assets
import loadingIcon from '../../assets/branding/loading_cs.svg'

// css
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <main className={styles.container}>
      <img src={loadingIcon} alt="Cryptid Seeker Logo & Loading  message" />
    </main>
  )
}

export default Loading