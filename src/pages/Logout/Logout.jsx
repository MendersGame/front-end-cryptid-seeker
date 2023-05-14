// assets
import logout from '../../assets/branding/logout_cs.svg'

// css
import styles from './Logout.module.css'

const Logout = () => {
  return (
    <main className={styles.container}>
      <img src={logout} alt="Seek Ya Later" />
    </main>
  )
}

export default Logout