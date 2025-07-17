import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Hero from './pages/Hero';
import Blank from './components/Blank';
import About from './pages/About';
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Portfolio from './pages/Portfolio';

function Layout({ backgrounds } ) {

    const [imageBank, setImageBank] = useState(0);
    const bodyRef = useRef(null);

    const [viewportSize, setViewportSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    console.log("Viewport height: " + viewportSize.height);
    console.log("Viewport width: " + viewportSize.width);
    

    // background changes based on scroll height
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const cHeight = bodyRef.current.getBoundingClientRect().height;
        const scrollRatio = scrollTop/cHeight;

        console.log("Scroll point: " + scrollTop);

        
        if(scrollTop < 2450){
          setImageBank(3);

        }
        if(scrollTop < 2150){
          setImageBank(1);
        }
        if(scrollTop < 1001){
          setImageBank(0);
        }
        if(scrollTop > 2450){
          setImageBank(2);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

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
      className={` absolute  bg-fixed bg-size-[100%_100%] bg-no-repeat w-full
        ${imageBank == 0 ? `bg-[url('src/images/background/door_bench_trim.png')]` : ''}
        ${imageBank == 1 ? 'bg-[url("src/images/background/african-safari-sunset.jpg")]' : ''}
        ${imageBank == 2 ? 'bg-[url("src/images/background/time_lapse_sky_mountains.avif")]' : ''}
        ${imageBank == 3 ? 'bg-[url("src/images/background/african-safari-sunset.jpg"),_url("src/images/background/time_lapse_sky_mountains.avif")] bg-size-[100%_50%,100%_50%]' : ''}
        `}

    >    
      <div className={`relative flex flex-col`}>
        <div id="header-wrap">
          <Header></Header>
        </div>
        <main  className="">
          <Hero height={800} minHeight={viewportSize.height}></Hero>
          <Blank height={400}></Blank>
          <Outlet/>
          <Blank height={400}></Blank>
          <Portfolio></Portfolio>
        </main>
      </div>
    </div>
  )
}

export default Layout;

// Background image
// bg-[url("src/images/background/black_bench_full.avif")] ${backgrounds[0]}