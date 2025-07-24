import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useOutletContext, useLocation } from 'react-router-dom';
import Hero from "./Hero";
import Blank from "../components/Blank";
import About from "./About";
import Portfolio from "./Portfolio";
import BouncingArrow from "../components/BouncingArrow";
import { SECTIONS } from "../constants/sections";



const Home = ({children}) =>  {

    const {heroRef, aboutRef} = useOutletContext();

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

    // hash scrolling
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        setTimeout(() => {
          const element = document.getElementById(location.hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }, [location.hash]);

  return (

        <main  className="">
          <Blank 
            height={viewportSize.height + 100} 
            background={""}
            >
            <BouncingArrow 
              ref={heroRef}
              onClick={(ref) => scrollToSection(ref)}

            ></BouncingArrow>
          </Blank>
          <div id={SECTIONS.HOME.HERO}>
            <Hero 
              minHeight={900} 
              className={'bg-gray-800/80'} 
              ref={heroRef}>
              </Hero>
          </div>
          
          <Blank 
            height={400}
            offset={300} 
            background={backgrounds[1]}
            ></Blank>
          <div id={SECTIONS.HOME.ABOUT}>
          <About 
            className={`bg-zinc-700`} 
            ref={aboutRef}>
            </About>
          </div>         
          <Blank 
            height={400} 
            offset={500}
            background={backgrounds[2]}
            ></Blank>
        </main>

  )
}

export default Home;