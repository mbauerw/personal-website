import ExpandableDiv from "../components/ExpandableDiv";
import React, {useState} from "react";

function Home() {

  const [activeButton, setActiveButton] = useState(null);
  const imageIds = ['edUW7cJ', 'jRetXxS', 'KvSDVHD', 'zs7lXPL', 'rfig4mQ', 'GdLn4KT']

  return (
    <div id="content-wrap" 
      className="h-400 w-95/100 place-self-center flex flex-row gap-3 p-2 pb-0
      shadow-md rounded-sm">
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

  
export default Home;