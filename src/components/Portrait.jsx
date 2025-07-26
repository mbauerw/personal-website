import React, {useEffect, useState} from 'react';

function Portrait({
  width = 300, 
  height = 400,
  background = "", 
  image,
  alt = "Portrait",
  className = ""
}) {

  const halo_slate = "bg-linear-to-r from-slate-300 to-slate-400";
  const halo_gray = "bg-linear-to-r from-gray-500 to-gray-400";
  const halo_zinc = "bg-linear-to-r from-zinc-600 to-zinc-500";


  const [offset, setOffset] = useState(0);
  const [shouldIncrement, setShouldIncrement] = useState(true);


  useEffect(() => {
    if(shouldIncrement){
      const interval = setInterval(() => {
        setOffset(prev => prev + 1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [shouldIncrement]);

  const setSpin = () => setShouldIncrement(prev => !prev);

  return(
    <div
      id="portrait"
      className={`flex justify-center items-center rounded-full shadow-2xl shadow-black ${background} ${className}`}
      onClick={setSpin}
      style={{
        backgroundPosition: `${offset}px`,
        width: `${width}px`, 
        height: `${height}px`
      }}     
      >
      <div 
        className={`flex justify-center items-center rounded-full h-6/9 w-6/10 ${"bg-white"}  -mt-4 `}
        
       >
          <img
          src={image}
          alt={alt}
          className="absolute rounded-full mt-4 pointer-events-none"
          style={{
            width: `${width-80}px`, 
            height: `${height-100}px`
          }}
          />  


        </div>
        
    </div>
  )
}
export default Portrait;