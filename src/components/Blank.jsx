import React, { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from 'motion/react';

function Blank({
  offset = 200,
  height = 300,
  label = "",
  className = "",
  background = "",
  speed = .4,
  children
}) {
  
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef(null);
  const rafRef = useRef(null);

  // paralax stuff
  const isInView = useInView(elementRef, {
    threshold: 0,
    triggerOnce: false, 
    rootMargin: '200px 0px 200px 0px'
  });

  const calculateParallax = useCallback(() => {
    if (!elementRef.current || !isInView) return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const windowCenter = window.innerHeight / 2;
    
    const distance = elementCenter - windowCenter; 
    const parallaxOffset = offset + -distance * speed;
    
    setOffsetY(parallaxOffset);
  }, [isInView]);

  useEffect(() => {
    if (!isInView) {
      setOffsetY(0); // Reset when out of view
      return;
    }

    const handleScroll = () => {
      // Cancel previous frame
      // if (rafRef.current) {
      //   cancelAnimationFrame(rafRef.current);
      // }
      
      // Schedule new calculation
      rafRef.current = requestAnimationFrame(calculateParallax);
    };
    

    calculateParallax();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isInView, calculateParallax]);

  return (
    <div
      ref={elementRef} 
      className={`w-full bg-repeat bg-cover flex flex-col justify-center ${background} ${className}`} 
      style={{
        height: `${height}px`,
        backgroundPosition: `center calc(50% + ${offsetY}px)`, 
        backgroundAttachment: 'scroll'
      }}
    >
      {children}
    </div>
  );
}

export default Blank;





// import React, { useRef, useState, useEffect } from "react";
// import { useInView } from 'motion/react';

// function Blank({
//   offset = 200,
//   height = 300,
//   label = "",
//   className = "",
//   background = "",
//   speed = 0.4,
//   children
// }) {
  
//   const [offsetY, setOffsetY] = useState(0);
//   const elementRef = useRef(null);

//   // Pass the ref directly as first argument
//   const isInView = useInView(elementRef, {
//     threshold: 0,
//     triggerOnce: false, 
//     rootMargin: '0px 0px' 
    
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//         setOffsetY(window.pageYOffset);
//         console.log(" This is the div in view: " + label);
//         console.log("pageYOffset: " + window.pageYOffset * speed);         
//     };
    
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);    
//   }, [isInView]); 

//   return (
//     <div
//       ref={elementRef} 
//       className={`w-full bg-repeat bg-cover flex flex-col justify-center ${background} ${className}`} 
//       style={{
//         height: `${height}px`,
//         backgroundPosition: `center ${offsetY}px`, 
//         backgroundAttachment: 'scroll'
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// export default Blank;



