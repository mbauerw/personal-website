import { Link } from "react-router-dom"

function NavBarRight({showElement}) {
    return (
      <nav 
        className={`nav-bar w-3/4 h-2/5 bg-logo absolute bottom-5 ${showElement ? 'opacity-100 transition-all duration-1600' : 'opacity-0 transition-all duration-400'}`}>
        <ul 
          className={`nav-list  transition-all transition-discrete flex justify-around ${showElement ? 'opacity-100 transition-all duration-1000' : 'opacity-0 transition-all duration-400'} `}>
          <Link to="/" className = {`nav-link h-4/5 text-neutral-300 hover:bg-black ${showElement ? 'opacity-100' : 'opacity-0'}`}>HOME</Link>
          <Link to="/about" className = {`nav-link h-4/5 text-neutral-300 hover:bg-zinc-300 ${showElement ? 'opacity-100 ' : 'opacity-0'}`}>ABOUT</Link>
          <Link to="/portfolio" className = {`nav-link h-4/5 text-neutral-300 hover:bg-zinc-300  ${showElement ? 'visible' : 'invisible'}`}>PORTFOLIO</Link>
          <Link to="/Music" className = {`nav-link h-4/5 text-neutral-300 hover:bg-zinc-300 ${showElement ? 'visible ' : 'invisible'}`}>MUSIC</Link>
          <Link to="/Contact" className = {`nav-link h-4/5 text-neutral-300 hover:bg-zinc-300 ${showElement ? 'visible' : 'invisible'}`}>CONTACT</Link>
        </ul>
      </nav>
    )
  }
  
  export default NavBar;