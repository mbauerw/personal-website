import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import Header from './components/Header';
import Hero from "./pages/Hero";
import Blank from './components/Blank';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import BouncingArrow from './components/BouncingArrow';

const Home = forwardRef(({children}, ref) =>  {

    // section refs
    const bodyRef = useRef(null);
    const heroRef = useRef(null);
    const aboutRef = useRef(null);

    const refs = [
      bodyRef, heroRef, aboutRef
    ]


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
      ref={bodyRef}
    >    
      <div className={`relative flex flex-col`}>
        <div id="header-wrap">
          <Header
            refs={refs}
            heroRef={heroRef}
            aboutRef={aboutRef}
          ></Header>
        </div>
        <main  className="">
          <Blank 
            height={viewportSize.height + 100} 
            background={backgrounds[0]}
            >
            <BouncingArrow 
              ref={heroRef}
              onClick={(ref) => scrollToSection(ref)}

            ></BouncingArrow>
          </Blank>
          <Hero 
            height={800} 
            minHeight={viewportSize.height} 
            className={'bg-zinc-300'} 
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
          <Portfolio></Portfolio>
        </main>
      </div>
    </div>
  )
});

export default Layout;