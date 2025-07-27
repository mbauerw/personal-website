import React, {forwardRef, useEffect, useState, useRef} from 'react';
import Portfolio from './Portfolio';
import Portrait from '../components/Portrait';
import { Link } from 'react-router-dom';




const Hero = forwardRef(({ height=900, minHeight=900, className=""}, ref) => {
  const [hovered, setHovered] = useState(false);

  const mouseEnter = () => setHovered(true);
  const mouseLeave = () => setHovered(false);

  return (
    <div 
      id="hero-wrap"
      className={`w-full justify-center h-400 ${className} min-h-screen h-auto grid lg:grid-cols-[4fr_2fr] grid-rows-[1fr_6fr] grid-cols-1 space-y-10`}
      ref={ref}>
      {/* banner   */}
      <div className='col-span-full row-span-1 justify-self-center'>
        <div className='bg-linear-to-br from-amber-500 to-yellow-500 h-16 w-103 justify-self-center'>
          <p className='text-8xl text-white mt-3 ml-7 w-120 a6 weight-500 '>
            About   Me
          </p>
        </div>
      </div>
      {/* blurbs   */}
      <div className='col-span-1 row-span-1 bg-neutral-200/40 content-center w-[95%] h-[95%] px-5 justify-self-center'>
        <p className='group relative z-0 hover:z-10 p3 text-4xl shadow-lg shadow-black bg-neutral-100 antialiased border-gray-300 border-4 border-b-gray-400 p-12 rounded-xl lg:-ml-8 lg:mr-8 lg:-mt-20 -mt-0 -ml-8 mr-8 '>
          Hello, I'm  <a className="group-hover:text-blue-800 group-hover:font-semibold group-hover:text-6xl"> Max </a> 
          <br />
          </p>
        <p className='group relative z-1 hover:z-10 p3 text-4xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-300 border-4 border-b-gray-400 p-12 rounded-xl relative -mt-8 lg:-ml-4 lg:mr-4 -ml-3 mr-3  '>
          Passions: <a className="group-hover:underline group-hover:text-red-600">Music</a>, learning, <Link to="/portfolio" className="group-hover:underline group-hover:decoration-wavy group-hover:text-emerald-500">web development</Link>, reading
          
          <br />
          </p>
        <p className='relative z-2 hover:z-10 p3 text-4xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-300 border-4 border-b-gray-400 p-12 rounded-xl -mt-8 lg:ml-0 lg:-mr-0 ml-2 -mr-2'>
        Guitar (electic == classical), Piano, Tennis, Greek Yogurt    
          </p>
        <p className='relative z-3 hover:z-10 p3 text-4xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-200 border-4 border-b-gray-400 p-12 rounded-xl -mt-8 lg:ml-4 lg:-mr-4 ml-7 -mr-7'>
        Loves: Family, Friends, Pets 
          </p>
        {!hovered ? (
          <p className='absolute z-3 hover:z-10 p3 text-4xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-200 border-4 border-b-gray-400 p-5 rounded-xl -mt-8 lg:ml-8 lg:-mr-8 ml-12 -mr-10 w-[calc(61%)]'
          onMouseEnter={mouseEnter} 
          onMouseLeave={mouseLeave} >
          Strengths: Flexibility, creativity, perseverance <br />
          Weaknesses: <span className="text-bold text-blue-800 text-7xl"> ... </span>
            </p>

        ) : (
          <p className='absolute z-3 hover:z-10 p3 text-4xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-200 border-4 border-b-gray-400 p-5 rounded-xl -mt-8 lg:ml-8 lg:-mr-8 ml-12 -mr-10 w-[calc(61%)] '
        onMouseEnter={mouseEnter} 
        onMouseLeave={mouseLeave} >
        Strengths: Flexibility, creativity, perseverance <br/>
        Weaknesses: Unconsciously setting down what I'm holding in my hand while in the process of looking for something I've lost and then, having found what I was originally looking for, needing to spend even more time looking for what I just had in my hand
          </p>
        )}  
        
      </div>
      {/* portrait   */}
      <div id="portrait-wrap" className='col-span-1 row-span-1 border-l-1 border-gray-400 w-[95%] h-[95%] justify-self-center content-center'>
        <Portrait image={"src/images/headshot_tri.png"} background='bg-[url("src/images/background/purple_smudge.jpg")]' height={600} width={400}></Portrait>
      </div>
  </div>
  )

});

export default Hero;

 /*  Banner Color Options

 from-blue-500 to-blue-400
from-amber-500 to-yellow-500

*/
