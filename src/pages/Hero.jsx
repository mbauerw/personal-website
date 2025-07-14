import React, {useEffect, useState} from 'react';

function Hero(){
  return (
    <div 
      id="hero-wrap"
      className={`w-full h-400 bg-zinc-500 flex flex-row justify-left mt-240 p-15`}>
        <div 
          id="blurb-wrap"
          className='h-full w-1/2 flex flex-row justify-center content-center'
          >
            <p
              id="blurb"
              className='p3 text-xl antialiased'
              >
                Hello, I'm Max. <br></br>
                  Passions: Music, learning, web development, Guitar (electic == classical), Piano, Tennis, Parfait
                    Loves: Family, Friends, Pets 
            </p>

        </div>
        <div 
          id="portrait-wrap"
          className='h-full w-1/2 flex flex-row justify-center content-center'
          >
            <div
              id="portrait-background"
              className='w-150 h-200 rounded-full bg-white'
              >
                {/* <img className='w-full h-3/5' src='src/images/headshot_1.png'></img> */}
              </div>


        </div>



    </div>
  )

}

export default Hero;