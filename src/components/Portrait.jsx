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
      className={`flex justify-center items-center rounded-full shadow-xl bg-white shadow-black pb-10 ${className}`}
      style={{
        width: `${width}px`, 
        height: `${height}px`
        
      }}
      >
      <div 
        className={`flex justify-center rounded-xl h-3/4 w-3/5 ${background} bg-[100%_100%] overflow-visible`}
       >
          <img
          src={image}
          alt={alt}
          className="absolute pt-5"
          style={{
            width: `${width-100}px`, 
            height: `${height-100}px`
          }} />  


        </div>
        
    </div>
  )

}

export default Portrait;