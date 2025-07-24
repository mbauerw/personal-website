import React, { useRef, useState, useEffect } from "react";


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
  
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => setIsVisible(entry.isIntersecting),
  //     { threshold: 0 }
  //   );
    
  //   if (elementRef.current) {
  //     observer.observe(elementRef.current);
  //   }
    
  //   return () => observer.disconnect();
  // }, []);
  
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
			className={`w-full bg-fixed bg-no-repeatw-full bg-size-[100%_100%] flex flex-col justify-center ${background} ${className} `} 
			style={{
					height: `${height}px`,
					backgroundPosition: `center ${-offsetY + offset}px`
			}}
		>
			{children}
		</div>
	)
}

export default Blank;