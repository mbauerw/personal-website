import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Hero from './pages/Hero';
import Blank from './components/Blank';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function Layout() {

  // setBack(() => {
  //     const handleScroll = () => {
  //       const scrollTop = window.scrollY;
  //       setPastScroll(scrollTop > 30); 
  //     };
  
  //     window.addEventListener("scroll", handleScroll);
  
  //     // Cleanup
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

    const [showElement, setShowElement] = useState(true);
    const [pastScroll, setPastScroll] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        setShowElement(scrollTop < 30);
        setPastScroll(scrollTop > 30); 
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div
      id="full-page-wrap"
      className='absolute bg-[url("src/images/background/black_bench_full.avif")] bg-fixed bg-cover bg-no-repeat
      bg-position-[center_bottom_2rem]'

    >    
      <div className={`relative flex flex-col`}>
        <div id="header-wrap">
          <Header></Header>
        </div>
        <main class="">
          <Hero></Hero>
          <Blank></Blank>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Layout;