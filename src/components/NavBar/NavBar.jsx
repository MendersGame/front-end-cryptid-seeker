// npm modules
import { NavLink } from 'react-router-dom'

//assets



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
    <nav>
      <NavLink to="/" >Link</NavLink>{user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
