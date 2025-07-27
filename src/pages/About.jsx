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
      className={`w-full h-auto place-self-center grid  grid-cols-[1fr] grid-rows-auto gap-3 p-5 pb-0 bg-none shadow-md rounded-sm content-center ${className}
      xl:grid-cols-[550px_minmax(700px,1480px)] xl:h-[900px]`}
    >
      <div className="h-full bg-stone-500 flex justify-center items-center">
        <img src="src/images/studio.jpg" className="h-[90%] cols-span-1"></img>
      </div>
      
      <div className="h-full cols-span-1 flex flex-row justify-end items-center
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