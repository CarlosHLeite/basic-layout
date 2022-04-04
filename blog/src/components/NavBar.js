import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='nav'>
        <NavLink className="navLink-item" to='/'>Home</NavLink>
        <NavLink className="navLink-item" to='/about' >About</NavLink>
        <NavLink className="navLink-item" to='/portifolio'>Portifolio</NavLink>
    </nav>
  )
}

export default NavBar