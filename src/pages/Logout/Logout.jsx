// assets
import logout from '../../assets/branding/logout_cs.svg'
// css


const Logout = () => {
  return (
    <main className={styles.container}>
      <section className={styles.splash}>
        <img src={logout} alt="Seek Ya Later" />
      </section>
    </main>
  )
}

export default Logout