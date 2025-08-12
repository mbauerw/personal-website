import { Link } from "react-router-dom"
import React, { useRef, useState, useEffect, forwardRef } from "react";
import { SECTIONS } from '../constants/sections';
import DropdownStack from "./DropdownStack";

function NavBar({showElement, heroRef, skillsRef, refs, navStyle = "bg-neutral-600 rounded-xl " }) {

    const linkStyle = "text-neutral-200 hover:bg-neutral-800 hover:rounded-md hover:-translate-y-[2px] hover:shadow-sm hover:shadow-neutral-900 transition-all duration-800 b5 md:flex hidden"

    const scrollToSection = (ref) => {
      ref.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    };

    const [aboutHovered, setAboutHovered] = useState(false);

    const mouseEnter = () => {
      setAboutHovered(true);
    };

    const mouseLeave = () => {
      setAboutHovered(false);
    }

    // Example dropdown links for ABOUT section
    const aboutDropdownLinks = [
      { to: `/#${SECTIONS.HOME.HERO}`, label: "The Highlights", onClick: () => scrollToSection(heroRef) },
      { to: `/#${SECTIONS.HOME.SKILLS}`, label: "Skill Set", onClick: () => scrollToSection(skillsRef) },
      { to: `/#${SECTIONS.HOME.ABOUT}`, label: "The Details" },
      { to: "/about/mission", label: "Mission & Values" },
      { to: "/about/careers", label: "Careers" }
    ];

    return (
      <nav 
        className={`w-2/3 h-full content-center transition-all transition-discrete ease-in-out duration-800
          ${showElement ? 'opacity-100 duration-1600' : 'opacity-0 duration-800'} ${navStyle}`}>
        <ul 
          className={`transition-all transition-discrete md:flex md:justify-around relative ${showElement ? 'opacity-100 duration-1000' : 'opacity-0 duration-800'} `}>
          <Link to="/" className={linkStyle}>HOME</Link>
          
          {/* ABOUT link with dropdown container */}
          <div 
            className="relative"
            onMouseEnter={mouseEnter} 
          >
            <Link 
              to={`/#${SECTIONS.HOME.HERO}`} 
              className={linkStyle} 
              onClick={() => scrollToSection(heroRef)}
            >
              ABOUT
            </Link>
            
            {/* Dropdown menu */}
            {aboutHovered && (
              <div 
                className={`absolute top-full left-0 mt-0 w-40 bg-neutral-700 rounded-md shadow-lg z-50 transition-all duration-1200 ${aboutHovered ? 'opacity-100' : 'opacity-0'}`}
                onMouseLeave={mouseLeave}>
                {aboutDropdownLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="block px-4 py-2 text-neutral-200 hover:bg-neutral-600 hover:text-white transition-colors duration-200"
                    onClick={link.onClick}        
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link to="/portfolio" className={linkStyle}>PORTFOLIO</Link>
          <Link to="/Music" className={linkStyle}>MUSIC</Link>
          <Link to="/Contact" className={linkStyle}>CONTACT</Link>
        </ul>
      </nav>
    )
  }
  
  export default NavBar;

// import { Link } from "react-router-dom"
// import React, { useRef, useState, useEffect, forwardRef } from "react";
// import { SECTIONS } from '../constants/sections';
// import DropdownStack from "./DropdownStack";



// function NavBar({showElement, heroRef, refs, navStyle = "bg-neutral-600 rounded-xl " }) {

//     const linkStyle = "text-neutral-200 hover:bg-neutral-800 hover:rounded-md hover:-translate-y-[2px] hover:shadow-sm hover:shadow-neutral-900 transition-all duration-800 b5 md:flex hidden"


//     const scrollToSection = (ref) => {
//       ref.current?.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start' 
//       });
//     };

//     const [aboutHovered, setAboutHovered] = useState(false);

//     const mouseEnter = () => {
//       setAboutHovered(true);

//     };

//     const mouseLeave = () => {
//       setAboutHovered(false);
//     }

//     return (
//       <nav 
//         className={`w-2/3 h-full content-center transition-all transition-discrete ease-in-out duration-800
//           ${showElement ? 'opacity-100 duration-1600' : 'opacity-0 duration-800'} ${navStyle}`}>
//         <ul 
//           className={`transition-all transition-discrete md:flex md:justify-around   ${showElement ? 'opacity-100 duration-1000' : 'opacity-0 duration-800'} `}>
//           <Link to="/" className={linkStyle}>HOME</Link>
//           <Link to={`/#${SECTIONS.HOME.HERO}`} className={`${linkStyle} abolute`} onMouseEnter={mouseEnter} onClick={() => scrollToSection(heroRef)}>ABOUT</Link>
//             {/* {aboutHovered && <DropdownStack onMouseLeave={mouseLeave}></DropdownStack>} */}
//           <Link to="/portfolio" className={linkStyle}>PORTFOLIO</Link>
//           <Link to="/Music" className={linkStyle}>MUSIC</Link>
//           <Link to="/Contact" className={linkStyle}>CONTACT</Link>
//         </ul>
//       </nav>
//     )
//   }
  
//   export default NavBar;




      