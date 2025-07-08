import { Link } from "react-router-dom"

function NavBar({showElement}) {
    return (
      <nav 
        className={`nav-bar w-3/4 h-2/5 absolute bottom-5 ${showElement ? 'opacity-100 transition-all duration-1600' : 'opacity-0 transition-all duration-400'}`}>
        <ul 
          className={`nav-list  transition-all transition-discrete flex justify-around ${showElement ? 'opacity-100 transition-all duration-1000' : 'opacity-0 transition-all duration-400'} `}>
          <Link to="/" className = {`nav-link h-4/5 ${showElement ? 'opacity-100' : 'opacity-0'}`}>HOME</Link>
          <Link to="/about" className = {`nav-link h-4/5 ${showElement ? 'opacity-100 transition-all duration-1000' : 'opacity-0 transition-all duration-400'}`}>ABOUT</Link>
          <Link to="/portfolio" className = {`nav-link h-4/5 transition-all duration-1000 ${showElement ? 'visible' : 'invisible'}`}>PORTFOLIO</Link>
          <Link to="/Music" className = {`nav-link h-4/5 ${showElement ? 'visible transition-all duration-1000' : 'invisible transition-all transition-discrete duration-10'}`}>MUSIC</Link>
          <Link to="/Contact" className = {`nav-link h-4/5 transition-all transition-discrete ${showElement ? 'visible duration-1000' : 'invisible transition-all transition-discrete  duration-10'}`}>CONTACT</Link>
        </ul>
      </nav>
    )
  }
  
  export default NavBar;