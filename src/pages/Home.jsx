import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useOutletContext } from 'react-router-dom';
import Hero from "./Hero";
import Blank from "../components/Blank";
import About from "./About";
import Portfolio from "./Portfolio";
import BouncingArrow from "../components/BouncingArrow";

const Home = ({children}) =>  {

    const {heroRef, aboutRef} = useOutletContext();

    // background images
    const backgrounds = [
      'bg-[url("src/images/background/blueish_stars.jpg")]',
      'bg-[url("src/images/background/stars_clouds_deep_blue.jpg")]',
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
          <Hero 
            minHeight={900} 
            className={'bg-zinc-800/20'} 
            ref={heroRef}>
            </Hero>
          <Blank 
            height={400} 
            background={backgrounds[1]}
            ></Blank>
          <About 
            className={`bg-zinc-700`} 
            ref={aboutRef}>
            </About>
          <Blank 
            height={400} 
            background={backgrounds[2]}
            ></Blank>
        </main>

  )
}

export default Home;