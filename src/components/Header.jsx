import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
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
      className="w-full"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      >
      <div 
        id="header-wrap-inner"
        className={`w-full shadow-lg shadow-gray-350 fixed flex flex-col bg-zinc-300 flex  z-50 transition-all transition-discrete
         duration-1000 ${showElement ? 'h-44 opacity-100' : 'h-2 opacity-50'} `}
        >
        <div
          id="logo-wrap" 
          className="h-1/2 w-full flex justify-center relative">
          <img src="src/images/logo2.png" className="w-80 h-4/5 p-1 absolute bottom-0" id="logo-image" />
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