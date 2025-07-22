import NavBar from "./NavBar";
import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom"
import Logos from "./Logos";



const Header = ({heroRef, aboutRef, refs}) => {

  const [showElement, setShowElement] = useState(true);
  const [pastScroll, setPastScroll] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const clientHeight = document.body.offsetHeight;
      const scrollRatio = scrollTop/clientHeight;
      if(scrollTop > 5){
        setShowElement(false);
        setPastScroll(true);

      }

      if(scrollTop < 5){
        setShowElement(true);
        setPastScroll(false);

      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mouseEnter = () => setShowElement(true);
  const mouseLeave = () => {
    if(pastScroll){
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
        className={`w-full fixed flex flex-col justify-center  z-50 transition-[height,_opacity] transition-discrete border-b border-black border-none
         duration-1200 ${showElement ? 'h-12 opacity-100 bg-zinc-700 shadow-zinc-300' : 'h-8 opacity-0 bg-zinc-700 shadow-none border-none shadow-zinc-400'} `}
        >
        <div 
          id="nav-wrap-inner" 
          className={`h-5/9 w-full flex justify-center content-end relative transition-all transition-discrete duration-1000  ${showElement ? 'visible' : 'invisible' }`}
          >
          <NavBar showElement={showElement} heroRef={heroRef} refs={refs}></NavBar>
        </div>
        <Logos position="right-5" />
      </div>
      
    </div>
  )
}

export default Header;