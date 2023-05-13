// assets
import loadingIcon from '../../assets/branding/loading.svg'

// css
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <main className={styles.container}>
      <img src={loadingIcon} alt="A cute owl" />
    </main>
  )
}

export default Loading