import React, { useState } from "react";
import ExpandableDiv from "../components/ExpandableDiv";
import Resume from "../components/Resume";
import GridPhoto from "../components/GridPhoto";

const HistoryText = ({
  h_font = "a6 p-2",
  h_style = "xl:text-[4cqh] text-[5cqh] col-span-1 row-span-1",
  p_style = "xl:text-[2cqh] text-[2.5cqh] row-span-1 justify-self-center self-center p-2",
  banner = "bg-gradient-to-tr from-amber-500 from-3% via-white via-20% to-white to-1%", 
  banner2 = "bg-linear-to-bl from-slate-700 to-gray-500",
  banner3 = "bg-linear-to-tr from-slate-600 to-gray-400"}) => {

  return (
    <div className={`w-full h-full grid grid-rows-[2fr__1fr_1fr_1fr_4fr_2fr] ${banner}`}>
      <div className={` w-full h-full ${""}`}></div>
      <p className={`${h_style} ${h_font}`}>
        Born in Austria
      </p>
      <p className={`${h_style} ${h_font} justify-self-center `}>
        Raised in Michigan
      </p>
      <p className={`${h_style} ${h_font} justify-self-end`}>
        Landed on the West Coast
      </p>
      <p className={`${p_style}`}>
        I've been lucky enough to have spent time living across the US and Europe. After spending some years sowing my oats in
        California I refocused my goals and completed a Bachelors in Computer Science from UCSC in 2020.
        <br />
        <br />
        For the past few years I worked
        for Waymo on the Canary Triage team, performing front line KPI analysis of the most recent software versions for their autonomous vehciles.
        I currently build websites and other web applications, specializing in React.
      </p>
      <div className={` w-full h-full ${""}`}></div>

    </div>
  )
}


function About({
  height = 900,
  minHeight = 900,
  className = ""
}) {

  const [activeButton, setActiveButton] = useState(null);
  const imageIds = ['edUW7cJ', 'jRetXxS', 'KvSDVHD', 'zs7lXPL', 'rfig4mQ', 'GdLn4KT']

  const [contentExpand, setContentExpand] = useState(true);

  const contentClick = () => {
    setContentExpand(prev => !prev)
    console.log("Content Clicked")
  }


  return (
    <div id="about-wrap"
      className={`w-full h-auto place-self-center grid  grid-cols-[1fr] grid-rows-auto gap-10 pb-0 bg-none shadow-md rounded-sm content-start ${className}
      xl:grid-cols-[minmax(400px,600px)_5px_minmax(600px,1480px)] xl:min-h-screen  xl:h-[110vh] xl:grid-rows-[120px_auto] py-10 `}
    >
      {/* banner   */}
      <div className='col-span-full row-span-1 mt-4 '>
        <div className='bg-linear-to-br from-amber-500 to-yellow-500  justify-self-center
         lg:h-16 lg:w-140 md:h-13 md:w-118 xs:h-11 xs:w-100 xs:max-w-[60%] h-1/2 max-w-[60%]'>
          <p className='text-white py-1 sm:ml-7 a6 sm:pt-2 weight-500 lg:text-8xl lg:w-160 md:text-7xl md:w-140 sm:text-6xl xs:w-[110%] xs:text-[9cqw] w-[110%] text-[8cqw] ml-3'>
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

      <div className="xl:h-full h-250 pb-6 w-full cols-span-1 flex xl:flex-row xl:justify-end flex-col justify-start items-center
       gap-3 bg-none shadow-md rounded-sm  ">
        <ExpandableDiv
          index="1"
          label="History"
          imgId="src/images/background/puchberg.jpeg"
          isActive={activeButton === "1"}
          sendState={setActiveButton}
        ><HistoryText></HistoryText> </ExpandableDiv>


        <ExpandableDiv
          index="2"
          label="Resume"
          imgId='jRetXxS'
          local={false}
          isActive={activeButton === "2"}
          sendState={setActiveButton}

        >
          <Resume></Resume>
        </ExpandableDiv>

        <ExpandableDiv
          index="3"
          label="Aspirations"
          imgId='KvSDVHD'
          local={false}
          isActive={activeButton === "3"}
          sendState={setActiveButton}
        >
          {/* <GridPhoto /> */}
        </ExpandableDiv>
      </div>
    </div>


  );
}

export default About;