// npm modules
import { NavLink } from 'react-router-dom'

//assets
import logo from '../../assets/branding/logo_cs.svg'
import styles from './NavBar.module.css'


const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/auth/login">LOG IN</NavLink></li>
      <li><NavLink to="/auth/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/sightings">Sightings</NavLink></li>
      <li><NavLink to="/sightings/new">New Sighting</NavLink></li>
      <li>
        <NavLink to="/auth/logout" onClick={handleLogout}>LOG OUT</NavLink>
      </li>
    </ul>
  )
  return (
    
    <nav className={styles.container}>
      <NavLink to="/"><img src={logo} alt="Cryptid Seeker Logo" /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
