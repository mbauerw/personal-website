import { Link } from "react-router-dom"

function NavBar() {
    return (
      <nav className='nav-bar'>
        <ul className='nav-list'>
          <Link to="/" className = "nav-link">HOME</Link>
          <Link to="/about" className = "nav-link">ABOUT</Link>
          <Link to="/portfolio" className = "nav-link">PORTFOLIO</Link>
          <Link to="/Music" className = "nav-link">MUSIC</Link>
          <Link to="/Contact" className = "nav-link">CONTACT</Link>
        </ul>
      </nav>
    )
  }
  
  export default NavBar;