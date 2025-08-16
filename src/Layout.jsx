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
import { animateScroll as scroll, scroller } from 'react-scroll';

function Layout( ) {

    // section refs
    const homeRef = useRef()
    const heroRef = useRef();
    const aboutRef = useRef();
    const skillsRef = useRef();

    const refs = {
      homeRef, heroRef, aboutRef, skillsRef
    };
    

    // background images
    const backgrounds = [
      'bg-[url("/images/background/blueish_stars.jpg")]',
      'bg-[url("/images/background/purple_castle.jpg")]',
      'bg-[url("/images/background/time_lapse_sky_mountains.avif")]',
      'bg-[url("/images/background/misty_woods.avif")'
    ]

    const [viewportSize, setViewportSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });

     const scrollToSection = (ref, duration = 1500) => {
        if (!ref.current) {
          console.log('no ref current');
          return;
        } 
    
        scroller.scrollTo(ref.current.id || 'target', {
          duration: duration,
          delay: 10,
          smooth: 'easeInOutQuart',
          offset: 0
        })


      }


    // console.log("Viewport height: " + viewportSize.height);
    // console.log("Viewport width: " + viewportSize.width);
    
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

    useEffect(() => {
      if (window.location.hash) {
          window.history.replaceState(null, null, window.location.pathname);
      }
    }, []);

  return (
    <div
      id="full-page-wrap"
    >   
      <div className={`relative flex flex-col min-h-screen`}>
        <div id="header-wrap">
          <Header
            refs={refs}
            homeRef={homeRef}
            heroRef={heroRef}
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            viewportSize={viewportSize}
            scrollToSection={scrollToSection}
          />
        </div>
        <Outlet context={{homeRef, heroRef, aboutRef, skillsRef, scrollToSection}}></Outlet>
        <Footer className="mt-auto"/>
      </div>
      
    </div>
  )
}

export default Layout;