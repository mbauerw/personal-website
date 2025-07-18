import { Link } from "react-router-dom"

function NavBar({showElement}) {
    return (
      <nav 
        className={`w-3/4 h-full bg-logo content-center transition-all transition-discrete ease-in-out duration-800
          ${showElement ? 'opacity-100 duration-1600' : 'opacity-0 duration-800'}`}>
        <ul 
          className={`transition-all transition-discrete flex justify-around ${showElement ? 'opacity-100 transition-all duration-1000' : 'opacity-0 transition-all duration-800'} `}>
          <Link to="/" className = {`transition-discrete ease-in-out duration-800 text-neutral-300 hover:bg-black ${showElement ? 'opacity-100' : 'opacity-0'}`}>HOME</Link>
          <Link to="/about" className = {`transition-discrete ease-in-out duration-800 text-neutral-300 hover:bg-neutral-700 ${showElement ? 'opacity-100 ' : 'opacity-0'}`}>ABOUT</Link>
          <Link to="/portfolio" className = {`transition-discrete ease-in-out duration-800 text-neutral-300 hover:bg-neutral-600  ${showElement ? 'opacity-100' : 'opacity-0'}`}>PORTFOLIO</Link>
          <Link to="/Music" className = {`transition-discrete ease-in-out duration-800 text-neutral-300 hover:bg-zinc-700 ${showElement ? 'opacity-100' : 'opacity-0'}`}>MUSIC</Link>
          <Link to="/Contact" className = {`transition-discrete ease-in-out duration-800 text-neutral-300 hover:bg-slate-600 ${showElement ? 'opacity-100' : 'opacity-0'}`}>CONTACT</Link>
        </ul>
      </nav>
    )
  }
  
  export default NavBar;