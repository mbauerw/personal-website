import { Link } from "react-router-dom"
import React, { useRef, useState, useEffect, forwardRef } from "react";
import { SECTIONS } from '../constants/sections';


const DropdownStack = ({showElement, heroRef, refs}) => {

  const linkStyle = "text-neutral-300 hover:bg-neutral-900 hover:rounded-sm a3 flex"


  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  console.log("Showelement in dropstack: " + showElement);
  return (

  <nav 
  className={`w-3/4 h-auto bg-logo content-center transition-all transition-discrete ease-in-out duration-800
    ${showElement ? 'opacity-100 duration-1600' : 'opacity-0 duration-800'}`}>
    <ul 
      className={`transition-all transition-discrete flex-col justify-between  ${showElement ? 'opacity-100 duration-1000' : 'opacity-0 duration-800'} `}>
      <Link to="/" className={linkStyle}>HOME</Link>
      <Link to={`/#${SECTIONS.HOME.HERO}`} className={linkStyle} onClick={() => scrollToSection(heroRef)}>ABOUT</Link>
      <Link to="/portfolio" className={linkStyle}>PORTFOLIO</Link>
      <Link to="/Music" className={linkStyle}>MUSIC</Link>
      <Link to="/Contact" className={linkStyle}>CONTACT</Link>
    </ul>
  </nav>
  )
}

export default DropdownStack;