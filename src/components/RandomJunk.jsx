 // Bar Scroll listener
 // uses useRef "bodyRef" to get height from desired component 
    
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const cHeight = bodyRef.current.getBoundingClientRect().height;
    const scrollRatio = scrollTop/cHeight;

    console.log("Scroll point: " + scrollTop);

    
    if(scrollTop < 2450){
      setImageBank(3);

    }
    if(scrollTop < 2150){
      setImageBank(1);
    }
    if(scrollTop < 1001){
      setImageBank(0);
    }
    if(scrollTop > 2450){
      setImageBank(2);
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Cleanup
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);



  // Logo markup
  {/* <div
          id="logo-wrap" 
          className="h-1/2 w-full flex justify-center relative">
          <Link to="/about" className = {`w-90 h-7/8 p-1 absolute bottom-0 transition-all transition-discrete duration-1000 ${showElement ? 'opacity-100 duration-2000' : 'opacity-0 fill-neutral-800' }`}>
            <img src="src/images/logo_darkgray.png" className={`w-full ${showElement ? 'opacity-100 duration-1200 h-full' : 'opacity-0 h-0 duration-1000' }`} id="logo-image" />
          </Link>
        </div>         */}
