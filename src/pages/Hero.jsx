import React, {forwardRef, useEffect, useState, useRef} from 'react';
import Portfolio from './Portfolio';
import Portrait from '../components/Portrait';




const Hero = forwardRef(({ height=600, minHeight=600, className=""}, ref) => {
  return (
    <div 
      id="hero-wrap"
      className={`w-full h-200  flex flex-row justify-left p-15 bg-none ${className}`}
      style={{
        height: `${height}px`,
        minHeight: `${minHeight}px`
      }}
      ref={ref}
      >
        <div 
          id="blurb-wrap"
          className='h-full w-1/2 flex flex-col justify-center content-center'
          >
            <p
              id="blurb"
              className='p3 text-xl antialiased border-gray-200 border-4 border-b-gray-400 p-6 rounded-xl relative'
              >
                Hello, I'm Max. 
                <br></br>
                <br></br>
            <p
              className='p3 text-xl antialiased border-gray-200 border-4 border-b-gray-400 p-6 rounded-xl relative'
            >
              Passions: Music, learning, web development, 
            </p>
                <br></br>
                  Passions: Music, learning, web development, 
                  <br></br>
                  Guitar (electic == classical), Piano, Tennis, Parfait 
                  <br></br>
                  <br></br>
                    Loves: Family, Friends, Pets 
            </p>
            <div className="max-w-2xl mx-auto">
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
  </div>


        </div>
        <div
          className='h-full w-1/2 flex flex-row justify-center content-center'
        >
          <Portrait image={"src/images/headshot_tr"} width={500} height={650}></Portrait>
        </div>
        

    </div>
  )

});

export default Hero;