import React, { useRef, useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';


function Blank({
		offset=200,
    height=300,
    className="",
    background="",
		speed=.15,
    children
}) {

	// scroll listener for paralax
	const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef();

  const {ref, inView, entry } = useInView({
    threshold: 0,

    triggerOnce: false,

  });

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset * speed);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

	return (
		<div
			ref={elementRef} 
			className={`w-full bg-fixed bg-repeat bg-size-[100%_100%] bg-position-[center] flex flex-col justify-center ${background} ${className} `} 
      style={{
        height: `${height}px`
      }}
    >
			{children}
		</div>
	)
}

export default Blank;