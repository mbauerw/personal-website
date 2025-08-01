import NavBar from "./NavBar";
import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom"
import Logos from "./Logos";
import Dropdown from "./Dropdown";



const Header = ({ heroRef, aboutRef, refs }) => {

  const [showElement, setShowElement] = useState(true);
  const [pastScroll, setPastScroll] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const clientHeight = document.body.offsetHeight;
      const scrollRatio = scrollTop / clientHeight;
      if (scrollTop > 5) {
        setShowElement(false);
        setPastScroll(true);

      }

      if (scrollTop < 5) {
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
    if (pastScroll) {
      setShowElement(false);
    }

  }

  const [delayedVisible, setDelayedVisible] = useState(false);

  useEffect(() => {
    let timeout;

    if (showElement) {
      timeout = setTimeout(() => {
        setDelayedVisible(true);
      }, 1400);
    } else {
      setDelayedVisible(false);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [showElement]);



  return (
    <div
      id="header-wrap"
      className={`w-full`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div
        id="header-wrap-inner"
        className={`w-full fixed flex flex-row justify-center items-center z-50 transition-[height,_opacity] transition-discrete border-none
         duration-1000 ${showElement ? 'h-12 opacity-100 bg-zinc-700 shadow-zinc-300' : 'h-8 opacity-0 bg-zinc-700 shadow-none border-none shadow-zinc-400'} `}
      >
        <div
          id="nav-wrap-inner"
          className={`md:flex md:w-full hidden h-5/9 w-0 flex justify-center content-end transition-all transition-discrete md:duration-0 duration-1000  ${showElement ? 'opacity-100 ' : 'opacity-0'}`}
        >
          <NavBar showElement={showElement} heroRef={heroRef} refs={refs}></NavBar>
        </div>
                                          {/* md-duration affects navbar expand from collapse | duration affects icon speed of appearance  */}
        <div className={` md:w-0 md:h-0 md:delay-0 delay-900 flex h-7/9 w-full justify-center content-end transition-all md:duration-1400 duration-1000  ${showElement ? 'opacity-100 ' : 'opacity-0'}`}>
          <Dropdown className="md:delay-0 md:h-0 delay-900 md:duration-900 duration-0" iconClass="md:hidden flex md:h-0 h-full delay-900"></Dropdown>
        </div>
        <Logos position="right-5" showElement={showElement} />
      </div>

    </div>
  )
}

export default Header;