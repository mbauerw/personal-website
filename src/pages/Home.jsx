import Body from "../components/Body";
import ExpandableDiv from "../components/ExpandableDiv";
import First from "../components/First";
import React, {useState} from "react";

function Home() {

  const [activeButton, setActiveButton] = useState("1");
  const imageIds = ['edUW7cJ', 'jRetXxS', 'KvSDVHD', 'zs7lXPL', 'rfig4mQ', 'GdLn4KT']

  const handleClick1 = () => {
    setActiveButton("1");
    console.log("please save me")
  }

  const handleClick2 = () => {
    setActiveButton("2");
    console.log("please save me2")
  }

  const activeState = () => {
    if (activeButton === "1"){
      return true;
    }
    else {
      return false;
    }

  }

  return (
    <div id="content-wrap" 
      class="h-400 w-95/100 place-self-center flex flex-row gap-3 p-2
      shadow-md rounded-sm">
      <ExpandableDiv
        label="History"
        imgId='edUW7cJ'

      ></ExpandableDiv>

      <ExpandableDiv
        label="Endeavors"
        imgId='jRetXxS'
      >

      </ExpandableDiv>

      <ExpandableDiv
        label="Motivation"
        imgId='KvSDVHD'
      >

      </ExpandableDiv>

    </div>
      

  );
}

  
export default Home;