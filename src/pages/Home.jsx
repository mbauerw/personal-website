import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useOutletContext, useLocation } from 'react-router-dom';
import Hero from "./Hero";
import Blank from "../components/Blank";
import About from "./About";
import Portfolio from "./Portfolio";
import BouncingArrow from "../components/BouncingArrow";
import { SECTIONS } from "../constants/sections";



const Home = ({ children }) => {

  const { heroRef, aboutRef } = useOutletContext();
  const [offset, setOffset] = useState(0);

  // background images
  const backgrounds = [
    'src/images/background/african-safari-sunset.jpg',
    'src/images/background/black_bench_full.avif',
    'src/images/background/blueish_stars.jpg',
    'src/images/background/canoe_lake.jpg',
    'src/images/background/cat_watching_city.jpg',
    'src/images/background/dark_stars.jpg',
    'src/images/background/door_bench_trim.png',
    'src/images/background/grey-brick-with-snow.jpg',
    'src/images/background/misty_woods.avif',
    'src/images/background/mountain_stars.jpg',
    'src/images/background/only_stars.jpg',
    'src/images/background/pixel_cabin.jpg',
    'src/images/background/pixel_stars.png',
    'src/images/background/purple_castle.jpg',
    'src/images/background/purple_smudge.jpg',
    'src/images/background/stars_clouds_deep_blue.jpg',
    'src/images/background/time_lapse_sky_mountains.avif'
  ]

  const block1 = [
    'src/images/block1/candle.jpg',
    'src/images/block1/dot_lights.jpg',
    'src/images/block1/lamp_brick.jpg',
    'src/images/block1/stars.jpg'
  ]

  const block2 = [
    'src/images/block2/canon_road.jpg',
    'src/images/block2/mountain_sky.jpg',
    'src/images/block2/road_forrest.jpg',
    'src/images/block2/snow_path.jpg',
    'src/images/block2/snow_tree.jpg',
    'src/images/block2/sunrise_tree.jpg',
    'src/images/block2/rocky_mountain.jpg',
    'src/images/block2/lamps.jpg',
    'src/images/block2/ceiling.jpg',
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

    <main className="">
      <Blank
        height={"110vh"}
        offset={0}
        label={"First"}
        background={block1[1]}
        speed={3}
      >
        <BouncingArrow
          ref={heroRef}
          title="Max Bauer"
          onClick={(ref) => scrollToSection(ref)}
          className=" dark:bg-none dark:hover:bg-black/20 z-20"
        >
        </BouncingArrow>
      </Blank>
      <div id={SECTIONS.HOME.HERO}>
        <Hero
          minHeight={900}
          className={'bg-slate-900/90'}
          ref={heroRef}>
        </Hero>
      </div>

      <Blank
        height={"90vh"}
        offset={0}
        label={"second"}
        background={backgrounds[1]}
        imgheight="90%"
        speed={3}
      >

      </Blank>
      <div id={SECTIONS.HOME.ABOUT}>
        <About
          className={`bg-slate-900/90`}
          ref={aboutRef}>
        </About>
      </div>
      <Blank
        height={"600px"}
        label={"Third"}
        offset={0}
        background={backgrounds[11]}
        imgHeight="120%"
        className="opacity-100"
        speed={3}
      ></Blank>
    </main>

  )
}

export default Home;