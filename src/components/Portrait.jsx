import React, {useEffect, useState} from 'react';

function Portrait({
  width = 300, 
  height = 400, 
  image,
  alt = "Portrait",
  className = ""
}) {
  return(
    <div
      id="portrait"
      className={`rounded-full bg-white shadow-xl shadow-black opacity-60 ${className} portrait`}
      style={{
        width: `${width}px`, 
        height: `${height}px`,
        padding: '8px'
        
      }}
      >
      <img
        src={image}
        alt={alt}
        className="rounded-full w-full h-full "
        
      />
    </div>
  )

}

export default Portrait;