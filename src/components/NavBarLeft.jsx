import { Link } from "react-router-dom"

function NavBarLeft({showElement}) {
    return (
      <nav 
        className={`w-3/4 h-4/5 bg-logo absolute bottom-2 ${showElement ? 'opacity-100 transition-all duration-1600' : 'opacity-0 transition-all duration-400'}`}>
        <ul 
          className={`transition-all transition-discrete flex justify-around ${showElement ? 'opacity-100 transition-all duration-1000' : 'opacity-0 transition-all duration-400'} `}>
          <Link to="/about" className = {`nav-link h-4/5 text-neutral-300 hover:bg-zinc-300 ${showElement ? 'opacity-100 ' : 'opacity-0'}`}>ABOUT</Link>
          <Link to="/portfolio" className = {`nav-link h-4/5 text-neutral-300 hover:bg-zinc-300  ${showElement ? 'visible' : 'invisible'}`}>PORTFOLIO</Link>
        </ul>
      </nav>
    )
  }
  
  export default NavBar;