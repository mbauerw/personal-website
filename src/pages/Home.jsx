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
    "bg-[url('src/images/background/african-safari-sunset.jpg')]",
    "bg-[url('src/images/background/black_bench_full.avif')]",
    "bg-[url('src/images/background/blueish_stars.jpg')]",
    "bg-[url('src/images/background/canoe_lake.jpg')]",
    "bg-[url('src/images/background/cat_watching_city.jpg')]",
    "bg-[url('src/images/background/dark_stars.jpg')]",
    "bg-[url('src/images/background/door_bench_trim.png')]",
    "bg-[url('src/images/background/grey-brick-with-snow.jpg')]",
    "bg-[url('src/images/background/misty_woods.avif')]",
    "bg-[url('src/images/background/mountain_stars.jpg')]",
    "bg-[url('src/images/background/only_stars.jpg')]",
    "bg-[url('src/images/background/pixel_cabin.jpg')]",
    "bg-[url('src/images/background/pixel_stars.png')]",
    "bg-[url('src/images/background/purple_castle.jpg')]",
    "bg-[url('src/images/background/purple_smudge.jpg')]",
    "bg-[url('src/images/background/stars_clouds_deep_blue.jpg')]",
    "bg-[url('src/images/background/time_lapse_sky_mountains.avif')]"
  ]

  const block1 = [
    "bg-[url('src/images/block1/candle.jpg')]",
    "bg-[url('src/images/block1/dot_lights.jpg')]",
    "bg-[url('src/images/block1/lamp_brick.jpg')]",
    "bg-[url('src/images/block1/stars.jpg')]"
  ]

  const block2 = [
    "bg-[url('src/images/block2/canon_road.jpg')]",
    "bg-[url('src/images/block2/mountain_sky.jpg')]",
    "bg-[url('src/images/block2/road_forrest.jpg')]",
    "bg-[url('src/images/block2/snow_path.jpg')]",
    "bg-[url('src/images/block2/snow_tree.jpg')]",
    "bg-[url('src/images/block2/sunrise_tree.jpg')]",
    "bg-[url('src/images/block2/rocky_mountain.jpg')]",
    "bg-[url('src/images/block2/lamps.jpg')]",


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
        height={viewportSize.height + 100}
        offset={-50}
        label={"First"}
        background={block1[1]}
        speed={.5}
        className="bg-size-[100%_110%]"
      >
        <BouncingArrow
          ref={heroRef}
          title="Max Bauer"
          onClick={(ref) => scrollToSection(ref)}
          className=" dark:bg-none dark:hover:bg-black/20"
        ></BouncingArrow>
      </Blank>
      <div id={SECTIONS.HOME.HERO}>
        <Hero
          minHeight={900}
          className={'bg-slate-900/90'}
          ref={heroRef}>
        </Hero>
      </div>

      <Blank
        height={800}
        offset={-100}
        label={"Second"}
        background={block2[7]} // block1[2] block1[1] backgrounds[5] block2[1]
        className="opacity-100"
        speed={.5}
      >

      </Blank>
      <div id={SECTIONS.HOME.ABOUT}>
        <About
          className={`bg-slate-900/90`}
          ref={aboutRef}>
        </About>
      </div>
      <Blank
        height={600}
        label={"Third"}
        offset={offset}
        background={backgrounds[11]}
        className="opacity-90"
      ></Blank>
    </main>

  )
}

export default Home;