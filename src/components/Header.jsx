import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "../App.css"


function Header() {

  const [showElement, setShowElement] = useState(true);
  const [pastScroll, setPastScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowElement(scrollTop < 30);
      setPastScroll(scrollTop > 30); 
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mouseEnter = () => setShowElement(true);
  const mouseLeave = () => {
    if (pastScroll) {
      setShowElement(false);
    }
  }
 


  return (
    <div 
      id="header-wrap" 
      className={`w-full`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      >
      <div 
        id="header-wrap-inner"
        className={`w-full shadow-lg fixed flex flex-col  flex  z-50 transition-all transition-discrete border-b-2
         duration-1000 ${showElement ? 'h-44 opacity-100 bg-zinc-300 shadow-zinc-400' : 'h-8  bg-zinc-700 shadow-zinc-300'} `}
        >
        <div
          id="logo-wrap" 
          className="h-1/2 w-full flex justify-center relative">
          <Link to="/about" className = {`w-90 h-7/8 p-1 absolute bottom-0 transition-all transition-discrete duration-1000 ${showElement ? 'opacity-100 duration-2000' : 'opacity-0 fill-neutral-800' }`}>
            <img src="src/images/logo_darkgray.png" className={`w-full ${showElement ? 'opacity-100 duration-1200 h-full' : 'opacity-0 h-0 duration-1000' }`} id="logo-image" />
          </Link>
        </div>        
        <div 
          id="nav-wrap-inner" 
          className={`h-1/2 w-full flex justify-center content-end relative transition-all transition-discrete duration-1000  ${showElement ? 'visible' : 'invisible' }`}>
          <NavBar showElement={showElement}></NavBar>
        </div> 
      </div> 
    </div>
  )
}

export default Header;