import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

function Blank({
  offset = 200,
  height = 300,
  className = "",
  background = "",
  speed = 0.5,
  children
}) {
  const [offsetY, setOffsetY] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false, 
    rootMargin: '0px 0px' 
  });

  useEffect(() => {
    const handleScroll = () => {
      if (inView) {
        setOffsetY(window.pageYOffset * speed);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);    
  }, [speed, inView]); 

  return (
    <div
      ref={ref} 
      className={`w-full bg-repeat bg-cover flex flex-col justify-center ${background} ${className}`} 
      style={{
        height: `${height}px`,
        backgroundPosition: `center ${offsetY}px`, 
        backgroundAttachment: 'fixed'
      }}
    >
      {children}
    </div>
  );
}

export default Blank;



