import ExpandableDiv from "../components/ExpandableDiv";
import React, {useState} from "react";

function About({
  height=900,
  minHeight=900,
  className=""
}) {

  const [activeButton, setActiveButton] = useState(null);
  const imageIds = ['edUW7cJ', 'jRetXxS', 'KvSDVHD', 'zs7lXPL', 'rfig4mQ', 'GdLn4KT']

  return (
    <div id="about-wrap" 
      className={`w-100/100 place-self-center flex flex-row justify-center gap-3 p-5 pb-0 bg-zinc-700 shadow-md rounded-sm ${className}`}
      style={{
        height: `${height}px`,
        minHeight: `${minHeight}px`
      }}
      >
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
      

  );
}
  
export default About;