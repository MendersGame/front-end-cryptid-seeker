// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// assets
import loginIcon from '../../assets/branding/login_cs.svg'

// styles
import styles from './Login.module.css'

const LoginPage = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await authService.login(formData)
      handleAuthEvt()
      navigate('/')
    } catch (error) {
      console.log(error)
      setMessage(error.message)
    }
  }

  const { email, password } = formData

  const isFormInvalid = () => {
    return !(email && password)
  }

  return (
    <main className={styles.logincontainer}>
    <section>
      <img src={loginIcon} alt="Cryptid Seeker Logo & Login message" />
    </section>
    <section>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <p>{message}</p>
        <label>
          Email
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <div>
          <button disabled={isFormInvalid()} className={styles.login}>LOG IN</button>
          <button className={styles.cancel}><Link to="/">CANCEL</Link></button>
        </div>
      </form>
    </section>
  </main>
  )
}

export default LoginPage
