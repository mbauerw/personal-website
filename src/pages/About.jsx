import ExpandableDiv from "../components/ExpandableDiv";
import React, { useState } from "react";

function About({
  height = 900,
  minHeight = 900,
  className = ""
}) {

  const [activeButton, setActiveButton] = useState(null);
  const imageIds = ['edUW7cJ', 'jRetXxS', 'KvSDVHD', 'zs7lXPL', 'rfig4mQ', 'GdLn4KT']

  return (
    <div id="about-wrap"
      className={`w-full h-auto place-self-center grid  grid-cols-[1fr] grid-rows-auto gap-10 pb-0 bg-none shadow-md rounded-sm content-start ${className}
      xl:grid-cols-[650px_5px_minmax(700px,1480px)] xl:min-h-screen xl:h-auto xl:grid-rows-[90px_auto] `}
    >
       {/* banner   */}
      <div className='col-span-full row-span-1 mt-4 '>
        <div className='bg-linear-to-br from-amber-500 to-yellow-500 h-16 w-140 mr-15 justify-self-center'>
          <p className='sm:text-8xl text-7xl text-white py-1 ml-7 w-160 a6 weight-500 '>
            The Details
          </p>
        </div>
      </div>
      {/* Photo */}
      <div className="max-h-[800px]  flex justify-center items-center p-8 rounded-sm">
        <img src="src/images/studio.jpg" className="xl:h-[95%] xl:w-[auto] h-[80%] cols-span-1"></img>
      </div>
      {/* line */}
      <div className='bg-white -mt-3  z-0 xl:col-span-1 xl:row-span-1 row-span-1 col-span-1 xl:h-[100%] h-2 xl:w-[95%] xl:mr-0 xl:-ml-2 mr-4 ml-4 '>
      </div>
      
      <div className="h-full w-contains cols-span-1 flex flex-row justify-end items-center
       gap-3 bg-nonw shadow-md rounded-sm  ">
        <ExpandableDiv
          index="1"
          label="History"
          imgId='edUW7cJ'
          isActive={activeButton === "1"}
          sendState={setActiveButton}
        ></ExpandableDiv>

        <ExpandableDiv
          index="2"
          label="Endeavors"
          imgId='jRetXxS'
          isActive={activeButton === "2"}
          sendState={setActiveButton}
        >

        </ExpandableDiv>

        <ExpandableDiv
          index="3"
          label="Motivation"
          imgId='KvSDVHD'
          isActive={activeButton === "3"}
          sendState={setActiveButton}
        >

        </ExpandableDiv>
      </div>
    </div>


  );
}

export default About;