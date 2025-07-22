import React, {forwardRef, useEffect, useState, useRef} from 'react';
import Portfolio from './Portfolio';
import Portrait from '../components/Portrait';
import { Link } from 'react-router-dom';




const Hero = forwardRef(({ height=900, minHeight=900, className=""}, ref) => {
  return (
    <div 
      id="hero-wrap"
      className={`w-full flex lg:h-screen lg:flex-row lg:justify-left flex-col justify-around h-400 items-center px-5 py-5 bg-none ${className}`}
      style={{
        minHeight: `${minHeight}px`
      }}
      ref={ref}>
      <div className='lg:h-full lg:w-2/5 h-1/2 w-3/4 flex flex-col justify-center content-center'>
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
      <div className='lg:h-3/4 lg:w-1/2 lg:border-l-1 lg:border-gray-400 lg:border-t-0 h-1/2 w-full flex flex-col border-t-1 justify-center items-center '>
        <Portrait image={"src/images/headshot_tr"} height={600} width={450}></Portrait>
      </div>
  </div>
  )

});

export default Hero;

          {/* <div className="max-w-2xl mx-auto">
  <div className="bg-white border border-gray-200 border-b-4 border-b-gray-400 p-6 rounded-xl relative">
    <h3 className="text-lg font-semibold text-gray-900 mb-3">
      Elevated Section
    </h3>
    <p className="elevated-paragraph text-gray-700 leading-relaxed">
      This paragraph section appears elevated from the background using 
      Tailwind's border utilities and background contrast. The thicker 
      bottom border creates depth without needing box shadows.
    </p>
  </div>
</div>
<div className="bg-white border border-gray-200 border-b-4 border-b-gray-300 p-5 rounded-lg">
  <p className="text-gray-800 elevated-paragraph2">
    Your paragraph content goes here. This elevated section uses border 
    and background contrast instead of shadows for a clean, performant look.
  </p>
</div> */}

