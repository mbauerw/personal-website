import { Link } from "react-router-dom"
import React, { useRef, useState, useEffect } from "react";

function NavBar({showElement, navRefs}) {

    const linkStyle = "text-neutral-300 hover:bg-neutral-900 hover:rounded-sm hover:"


    return (
      <nav 
        className={`w-3/4 h-full bg-logo content-center transition-all transition-discrete ease-in-out duration-800
          ${showElement ? 'opacity-100 duration-1600' : 'opacity-0 duration-800'}`}>
        <ul 
          className={`transition-all transition-discrete flex justify-around ${showElement ? 'opacity-100 duration-1000' : 'opacity-0 duration-800'} `}>
          <Link to="/" className={linkStyle}>HOME</Link>
          <Link to="/about" className={linkStyle}>ABOUT</Link>
          <Link to="/portfolio" className={linkStyle}>PORTFOLIO</Link>
          <Link to="/Music" className={linkStyle}>MUSIC</Link>
          <Link to="/Contact" className={linkStyle}>CONTACT</Link>
        </ul>
      </nav>
    )
  }
  
  export default NavBar;


  // ref stuff
  // onClick={() => scrollToSection(navRefs)} 
      // Scroll to section

      // const [smoothScroll, setSmoothScroll] = useState(true);

      // const scrollToSection = (ref) => { 
      //   ref.current?.scrollIntoView({
      //     behavior: smoothScroll ? 'smooth' : 'auto',
      //     block: 'start',
      //     inline: 'nearest'
      //   });
      // };