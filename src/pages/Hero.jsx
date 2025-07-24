import React, {forwardRef, useEffect, useState, useRef} from 'react';
import Portfolio from './Portfolio';
import Portrait from '../components/Portrait';
import { Link } from 'react-router-dom';




const Hero = forwardRef(({ height=900, minHeight=900, className=""}, ref) => {
  return (
    <div 
      id="hero-wrap"
      className={`relative w-full flex lg:h-screen lg:flex-row lg:justify-evenly flex-col justify-center h-400 items-center bg-none ${className}`}
      style={{
        minHeight: `${minHeight}px`
      }}
      ref={ref}>
      <div className='absolute top-8 bg-linear-to-br from-amber-500 to-yellow-500 h-16 w-103'>
        <p className='text-8xl text-white mt-3 ml-7 w-120 a6 weight-500 '>
          About   Me
        </p>
      </div>
      <div className='lg:h-full lg:w-3/5 h-1/2 w-3/4 px-8 flex flex-col justify-center content-center'>
        <p className='group p3 text-4xl shadow-lg shadow-black bg-neutral-100 antialiased border-gray-300 border-4 border-b-gray-400 p-12 rounded-xl relative z-0 hover:z-10 '>
          Hello, I'm  <a className="group-hover:text-blue-800 group-hover:font-semibold group-hover:text-6xl"> Max </a> 
          <br />
 
          </p>
        <p className='group p3 text-4xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-300 border-4 border-b-gray-400 p-12 rounded-xl relative -mt-8 ml-5 -mr-5 z-1 hover:z-10 '>
          Passions: <a className="group-hover:underline group-hover:text-red-600">Music</a>, learning, <Link to="/portfolio" className="group-hover:underline group-hover:decoration-wavy group-hover:text-emerald-500">web development</Link>, reading
          <br />

          </p>
        <p className='p3 text-4xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-300 border-4 border-b-gray-400 p-12 rounded-xl relative -mt-8 ml-10 -mr-10 z-2 hover:z-10'>
        Guitar (electic == classical), Piano, Tennis, Parfait 
        
        </p>
        <p className='p3 text-4xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-200 border-4 border-b-gray-400 p-12 rounded-xl relative -mt-8 ml-15 -mr-15 z-3 hover:z-10'>
        Loves: Family, Friends, Pets 
        </p>
      </div>
      <div className='lg:h-3/4 lg:w-3/10 lg:border-l-1 lg:border-gray-400 lg:border-t-0 h-1/3 w-3/4 pt-20 flex flex-col border-t-1 justify-center items-center '>
        <Portrait image={"src/images/headsho.png"} background='bg-[url("src/images/background/purple_smudge.jpg")]' height={500} width={350}></Portrait>
      </div>
  </div>
  )

});

export default Hero;

 /*  Banner Color Options

 from-blue-500 to-blue-400
from-amber-500 to-yellow-500

*/
