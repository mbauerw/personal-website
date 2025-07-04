import Body from "../components/Body";
import ExpandableDiv from "../components/ExpandableDiv";
import First from "../components/First";
import React, {useState} from "react";
import { NavLink } from 'react-router-dom';

function Home() {

  const [activeButton, setActiveButton] = useState("1");

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
    <div id="content-wrap" class="h-400 w-95/100 bg-neutral-400 place-self-center">
      <ExpandableDiv
        onChildClick={handleClick1}
        isActive={activeState}
      ></ExpandableDiv>

    </div>
      

  );
}

  
export default Home;