import React, { useRef, useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';


function Blank({
		offset=200,
    toffset=0,
    moffset=0,
    height=300,
    className="",
    background="",
		speed=.15,
    children
}) {

	// scroll listener for paralax
	const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset * speed);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //resizer
  const [screenSize, setScreenSize] = useState('mobile');
  
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('desktop');
      } else if (window.innerWidth >= 640) {
        setScreenSize('tablet');
      } else {
        setScreenSize('mobile');
      }
    };
    
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const getBackgroundPosition = () => {
    switch(screenSize) {
      case 'desktop': 
        return `center ${-offsetY + offset + 50}px`;
      case 'tablet': 
        return `center ${-offsetY + toffset + 300}px`;
      default: 
        return `center ${-offsetY + moffset + 40}px `;
    }
  };

  // const getBackgroundSize = () => {
  //   if(adjust){
  //     switch(screenSize) {
  //       case 'desktop': 
  //         return `100% 110%`;
  //       case 'tablet': 
  //         return `120% 110%`;
  //       default: 
  //         return `150% 110%`;
  //     }
  //   }
    

	return (
		<div
			ref={elementRef} 
			className={`w-full bg-fixed bg-repeat bg-size-[100%_100%] bg-position-[center] flex flex-col justify-center ${background} ${className} `} 
      style={{
        height: `${height}px`,
        backgroundPosition: getBackgroundPosition()

      }}
    >
			{children}
		</div>
	)
}

export default Blank;