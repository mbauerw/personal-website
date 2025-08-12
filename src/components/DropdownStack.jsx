import { Link } from "react-router-dom"
import React, { useRef, useState, useEffect, forwardRef } from "react";
import { SECTIONS } from '../constants/sections';

const DropdownStack = ({showElement, heroRef, className, refs, links = []}) => {

  const linkStyle = "text-neutral-300 hover:bg-neutral-900 hover:rounded-sm a3 flex"

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  // Default links if none provided
  const defaultLinks = [
    { to: "/", label: "HOME" },
    { to: `/#${SECTIONS.HOME.HERO}`, label: "ABOUT", onClick: () => scrollToSection(heroRef) },
    { to: "/portfolio", label: "PORTFOLIO" },
    { to: "/Music", label: "MUSIC" },
    { to: "/Contact", label: "CONTACT" }
  ];

  const linksToRender = links.length > 0 ? links : defaultLinks;

  console.log("Showelement in dropstack: " + showElement);
  
  return (
    <nav 
      className={`w-3/4 h-auto bg-logo content-center transition-all transition-discrete ease-in-out duration-800
        ${showElement ? 'opacity-100 duration-1600' : 'opacity-0 duration-800'} ${className}`}>
      <ul 
        className={`transition-all transition-discrete flex-col justify-between  ${showElement ? 'opacity-100 duration-1000' : 'opacity-0 duration-800'} `}>
        {linksToRender.map((link, index) => (
          <Link 
            key={index}
            to={link.to} 
            className={linkStyle}
            onClick={link.onClick}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default DropdownStack;








// import { Link } from "react-router-dom"
// import React, { useRef, useState, useEffect, forwardRef } from "react";
// import { SECTIONS } from '../constants/sections';


// const DropdownStack = ({showElement, heroRef, refs}) => {

//   const linkStyle = "text-neutral-300 hover:bg-neutral-900 hover:rounded-sm a3 flex"


//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ 
//       behavior: 'smooth',
//       block: 'start' 
//     });
//   };

//   console.log("Showelement in dropstack: " + showElement);
//   return (

//   <nav 
//   className={`w-3/4 h-auto bg-logo content-center transition-all transition-discrete ease-in-out duration-800
//     ${showElement ? 'opacity-100 duration-1600' : 'opacity-0 duration-800'}`}>
//     <ul 
//       className={`transition-all transition-discrete flex-col justify-between  ${showElement ? 'opacity-100 duration-1000' : 'opacity-0 duration-800'} `}>
//       <Link to="/" className={linkStyle}>HOME</Link>
//       <Link to={`/#${SECTIONS.HOME.HERO}`} className={linkStyle} onClick={() => scrollToSection(heroRef)}>ABOUT</Link>
//       <Link to="/portfolio" className={linkStyle}>PORTFOLIO</Link>
//       <Link to="/Music" className={linkStyle}>MUSIC</Link>
//       <Link to="/Contact" className={linkStyle}>CONTACT</Link>
//     </ul>
//   </nav>
//   )
// }

// export default DropdownStack;