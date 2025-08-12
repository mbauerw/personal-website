import GridBox from "../components/GridBox";
import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from 'motion/react';

function Portfolio({
  offset = 0,
  speed = 5,
  label = "",
  imgHeight = "100%"
  }) {

  // parallax 
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef(null);

  const background = "src/images/block1/lamp_brick.jpg";

  const isInView = useInView(ref, {
    threshold: 0,

    once: false,

    margin: "100px 0px 100px 0px"
  });

  useEffect(() => {
    const handleScroll = () => {
      if (isInView && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how far the element has moved through the viewport
        // When element enters from bottom: rect.top = windowHeight, progress = 0
        // When element exits from top: rect.bottom = 0, progress = 1
        const elementHeight = rect.height;
        const totalDistance = windowHeight + elementHeight;
        const progress = (windowHeight - rect.top) / totalDistance;
        
        // Apply the parallax offset based on progress
        const maxOffset = elementHeight * .2; // Adjust this multiplier as needed
        setOffsetY((progress - 0.5) * maxOffset * speed);
      }     
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, isInView]);
     

  const thumbs = [
    "bg-[url('src/images/thumbs/ratio_heatmap.png')]",
    "bg-[url('src/images/thumbs/play_up_logo.png')]",
    "bg-[url('src/images/thumbs/elff.png')]",
    "bg-[url('src/images/thumbs/Bauer-Photo-scaled.webp')]",
    "bg-[url('src/assets/GitHub_Logo.png')]",
    "bg-[url('src/images/bauerj.png')]"
  ]

  const portLink = (<a href="#" className="bg-white bg-opacity-90 text-slate-700 px-5 py-2.5 rounded-full font-medium no-underline hover:bg-white transition-colors duration-300">View Project</a>)
  const gdpPop = (<iframe 
      src="src/assets/gdp-pop.html"
      width="100%" 
      height="900"
      title="Example"
     
    />
  );

  const gdplink = (<Link to="/gdp" className="bg-white bg-opacity-90 text-slate-700 px-5 py-2.5 rounded-full font-medium no-underline hover:bg-white transition-colors duration-300">View Project</Link>);

  return (
    <div
      ref={ref}
      className="relative bg-none w-full min-h-[140vh] h-full z-0">
      <img 
        src={background}
        alt={label}
        className="-z-1 absolute opacity-92"
        style={{
          transform: `translateY(${offsetY + offset}px)`,
          width: '100%',
          height: `${imgHeight}`, // Make image larger to prevent gaps
          objectFit: 'cover'
        }}
        />
      <div className="max-w-[80vw] min-h-[130vh] mx-auto mt-12 pt-14 bg-gray-500/98 z-3 px-10 ">
        <div className="text-center pb-12">
          <h2 className="text-5xl p3 md:text-5xl text-stone-100 mb-2 font-bold">My Stuff</h2>
          <p className="text-lg p3  text-stone-100">Explore my latest projects and creative work</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] md:grid-rows-[repeat(auto-fit,minmax(350px,1fr))] gap-6 md:gap-10 py-3 pt-10">
         
          <GridBox thumb={thumbs[0]} title={"The Impact of Economic Growth on Population Change"} category={"Data Analysis"} description={"Data Analysis project exploring the relationships between economic growth and population change across the United States"} className={"bg-cover"} children={gdplink}></GridBox>
 
          <GridBox thumb={thumbs[1]} title={"Play Up"} category={"Web app and API Integration"} description={"Web App leveraging Spotify's API to provide more compelling playlists"} children={portLink}></GridBox>

          <GridBox thumb={thumbs[2]} title={"East Lansing Film Festival"} category={"Web Development"} description={"Website for the non-profit film patron The East Lansing Film Festival"} children={portLink}></GridBox>

          <GridBox thumb={thumbs[5]} title={"Website for My Dad"} category={"Community Service (jk)"} description={"Who wouldn't want to help build a website for their Dad?"} children={portLink}></GridBox>

          <GridBox thumb={thumbs[4]} title={"Github Repositories"} category={"Miscellaneous"} description={"Link to a variety of finished and unfinished projects hosted on my Github"} children={portLink}></GridBox>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

{/* <iframe src="src/assets/gdp-pop.html" width="100%" height="1100px"></iframe> */ }