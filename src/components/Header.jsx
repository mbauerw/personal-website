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
        className={`w-full shadow-lg fixed  bg-neutral-600 flex border-b-2 z-20 transition-all transition-discrete
         duration-1000 ${showElement ? 'h-14' : 'h-2 opacity-50'} `}
        >
        <div
          id="logo-wrap" 
          className="w-1/3 h-full">
          <img src="src/images/logo2.png" className="w-70 h-full p-1" id="logo-image" />
        </div>        
        <div id="nav-wrap-inner" className={`transition-all transition-discrete
         duration-1000 ${showElement ? 'visible' : 'invisible' }`}>
          <NavBar showElement={showElement}></NavBar>
        </div> 
      </div> 
    </div>
  )
}

export default Header;