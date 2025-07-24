import React, {useEffect, useState} from 'react';

function Portrait({
  width = 300, 
  height = 400,
  background = "", 
  image,
  alt = "Portrait",
  className = ""
}) {
  return(
    <div
      id="portrait"
      className={`flex justify-center items-center rounded-full shadow-2xl bg-zinc-300 shadow-black ${className}`}
      style={{
        width: `${width}px`, 
        height: `${height}px`
        
      }}
      >
      <div 
        className={`flex justify-center rounded-full h-full w-full pt-20 ${background} bg-[100%_100%] overflow-hidden`}
       >
          <img
          src={image}
          alt={alt}
          className=""
          style={{
            width: `${width-100}px`, 
            height: `${height-100}px`
          }} />  


        </div>
        
    </div>
  )

}

export default Portrait;