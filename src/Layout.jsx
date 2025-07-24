import React, { useRef, useState, useEffect, forwardRef } from "react";
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Hero from "./pages/Hero";
import Blank from './components/Blank';
import About from './pages/About';
import { Link } from "react-router-dom"
import Portfolio from './pages/Portfolio';
import BouncingArrow from './components/BouncingArrow';
import Footer from "./pages/Footer";

function Layout( ) {

    // section refs
    const heroRef = useRef();
    const aboutRef = useRef();

    const refs = {
      heroRef, aboutRef
    };
    

    // background images
    const backgrounds = [
      'bg-[url("src/images/background/blueish_stars.jpg")]',
      'bg-[url("src/images/background/purple_castle.jpg")]',
      'bg-[url("src/images/background/time_lapse_sky_mountains.avif")]',
      'bg-[url("src/images/background/misty_woods.avif")'
    ]

    const [viewportSize, setViewportSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const scrollToSection = (ref) => {
      ref.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    };

    console.log("Viewport height: " + viewportSize.height);
    console.log("Viewport width: " + viewportSize.width);
    
    // viewport size listener to determine blank sizes
    useEffect(() => {

      const handleResize = () => {
        setViewportSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);

    }, []);


  return (
    <div
      id="full-page-wrap"
    >   
      <div className={`relative flex flex-col`}>
        <div id="header-wrap">
          <Header
            refs={refs}
            heroRef={heroRef}
            aboutRef={aboutRef}
          />
        </div>
        <Outlet context={refs}></Outlet>   
      </div>
      <Footer />
    </div>
  )
}

export default Layout;