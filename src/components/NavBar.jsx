import { Link } from "react-router-dom"
import React, { useRef, useState, useEffect, forwardRef } from "react";
import { SECTIONS } from '../constants/sections';



function NavBar({showElement, heroRef, refs, navStyle = "bg-neutral-700 rounded-xl " }) {

    const linkStyle = "text-neutral-300 hover:bg-neutral-800 hover:rounded-md hover:-translate-y-[2px] hover:shadow-sm hover:shadow-neutral-900 transition-all duration-800 b5 md:flex hidden"


    const scrollToSection = (ref) => {
      ref.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    };

    return (
      <nav 
        className={`w-2/3 h-full content-center transition-all transition-discrete ease-in-out duration-800
          ${showElement ? 'opacity-100 duration-1600' : 'opacity-0 duration-800'} ${navStyle}`}>
        <ul 
          className={`transition-all transition-discrete md:flex md:justify-around   ${showElement ? 'opacity-100 duration-1000' : 'opacity-0 duration-800'} `}>
          <Link to="/" className={linkStyle}>HOME</Link>
          <Link to={`/#${SECTIONS.HOME.HERO}`} className={linkStyle} onClick={() => scrollToSection(heroRef)}>ABOUT</Link>
          <Link to="/portfolio" className={linkStyle}>PORTFOLIO</Link>
          <Link to="/Music" className={linkStyle}>MUSIC</Link>
          <Link to="/Contact" className={linkStyle}>CONTACT</Link>
        </ul>
      </nav>
    )
  }
  
  export default NavBar;




      