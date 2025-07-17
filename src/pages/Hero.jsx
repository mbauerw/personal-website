import React, {useEffect, useState} from 'react';
import Portfolio from './Portfolio';
import Portrait from '../components/Portrait';




function Hero({
  height=600,
  minHeight=600,
  className=""

}){


  return (
    <div 
      id="hero-wrap"
      className={`w-full h-200 bg-zinc-300 flex flex-row justify-left mt-250 p-15 ${className}`}
      style={{
        height: `${height}px`,
        minHeight: `${minHeight}px`
      }}>
        <div 
          id="blurb-wrap"
          className='h-full w-1/2 flex flex-col justify-center content-center'
          >
            <p
              id="blurb"
              className='p3 text-xl antialiased'
              >
                Hello, I'm Max. 
                <br></br>
                <br></br>
                  Passions: Music, learning, web development, 
                  <br></br>
                  Guitar (electic == classical), Piano, Tennis, Parfait 
                  <br></br>
                  <br></br>
                    Loves: Family, Friends, Pets 
            </p>

        </div>
        <div
          className='h-full w-1/2 flex flex-row justify-center content-center'
        >
          <Portrait image={"src/images/headshot_tr"} width={500} height={650}></Portrait>
        </div>
        

    </div>
  )

}

export default Hero;