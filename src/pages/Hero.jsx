import React, { forwardRef, useEffect, useState, useRef } from 'react';
import Portfolio from './Portfolio';
import Portrait from '../components/Portrait';
import { Link } from 'react-router-dom';




const Hero = forwardRef(({ height = 900, minHeight = 900, className = "" }, ref) => {
  const [hovered, setHovered] = useState(false);

  const mouseEnter = () => setHovered(true);
  const mouseLeave = () => setHovered(false);

  return (
    <div
      id="hero-wrap"
      className={`w-full justify-center min-h-[1800px] ${className} grid lg:grid-cols-[4fr_5px_2fr] grid-rows-[1fr_6fr] grid-cols-1 space-y-10 lg:min-h-[1000px] lg:max-h-[1000px]`}
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
      <div className='col-span-1 relative rounded-sm row-span-1 max-h-[900px] grid grid-cols-1 grid-rows-5 bg-neutral-00/40 w-[95%] h-[95%] lg:min-h-[500px] px-5 justify-self-center content-center lg:justify-center justify-items-center py-5'>
      <p className='group w-1/2 min-w-100 max-h-55 z-1 text-4xl hover:!text-5xl p3 bg-neutral-100 shadow-lg shadow-black antialiased border-gray-300 border-4 border-b-gray-400 p-10 rounded-xl -mt-0 
          hover:z-10 hover:w-full hover:overflow-visible hover:-ml-6 hover:whitespace-normal hover:max-h-60 hover:h-60 
          lg:-ml-32 lg:mr-0 -ml-3 mr-3 truncate transition-all duration-1000'>
          Hello, I'm  <a className="group-hover:text-blue-800 group-hover:font-semibold group-hover:text-7xl transition-all duration-400"> Max </a> 
          </p>
        <p className='group w-1/2 min-w-100 max-h-55 z-1 p3 text-4xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-300 border-4 border-b-gray-400 p-10 rounded-xl 
          hover:z-11 hover:w-full hover:!text-5xl hover:w-full hover:-ml-2 hover:overflow-visible hover:whitespace-normal hover:max-h-60 hover:h-60
          lg:-ml-16 lg:mr-4 lg:-mt-8 -ml-3 mr-3 truncate transision-all duration-1000 '>
          Passions: <a className="group-hover:underline group-hover:text-red-600">Music</a>, learning, <Link to="/portfolio" className="group-hover:underline group-hover:decoration-wavy group-hover:text-emerald-500 transision-all duration-500">web development</Link>, reading
          </p>
        <p className='group w-1/2 min-w-100 max-h-55 z-2  p3 text-4xl hover:!text-5xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-300 border-4 border-b-gray-400 p-10 rounded-xl
          hover:z-12 hover:w-full hover:z-10 hover:w-full hover:overflow-visible hover:whitespace-normal hover:max-h-55 hover:max-h-60 hover:h-60
          lg:-ml-0 lg:mr-8 lg:-mt-8 ml-1 mr-8 truncate transision-all duration-1000'>
            ... guitar (electric == classical), piano, tennis, greek yogurt
          </p>
        <p className='relative w-1/2 min-w-100 max-h-55 z-3 hover:z-10 p3 text-4xl hover:!text-5xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-200 border-4 border-b-gray-400 rounded-xl w-1/2 col-span-1 p-10  -ml-3 mr-3 truncate
        hover:z-13 hover:w-full hover:overflow-visible hover:whitespace-normal hover:h-55
        lg:ml-0 lg:mr-0 lg:-mt-8 truncate transision-all duration-1000
        '>
          Loves: Family, Friends, Pets
        </p>
        <div className='relative z-3 transision:all duration-1000 p3 w-1/2 text-4xl bg-neutral-100 shadow-lg shadow-black antialiased rounded-xl row-span-1 col-span-1 lg:-mt-8 lg:ml-4 lg:-mr-4
         hover:z-10 hover:w-full'>
          {!hovered ? (
            <p className='absolute z-3 min-w-100 min-h-55 hover:z-10 p3 text-4xl hover:!text-5xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-200 border-4 border-b-gray-400 rounded-xl w-full h-full p-2
              hover:z-14 hover:w-full hover:overflow-visible hover:whitespace-normal hover:h-55 hover:-ml-0 hover:mr-8
              lg:ml-0 lg:mr-0 truncate transision-all duration-1000'
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave} >
              Strengths: Flexibility, creativity, determination <br />
              Weaknesses: <span className="text-bold text-blue-800 text-7xl"> ... </span>
            </p>

          ) : (
            <p className='absolute z-3 min-w-100 hover:z-10 p3 text-4xl hover:!text-5xl bg-neutral-100 shadow-lg shadow-black antialiased border-gray-200 border-4 border-b-gray-400 rounded-xl w-full h-auto
              hover:z-14 hover:w-full hover:overflow-visible hover:whitespace-normal hover:-ml-0 hover:mr-4
              lg:-ml-0 lg:mr-0 lg:-mt-8 truncate transision-all duration-1000
            '
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave} >
              Strengths: Flexibility, creativity, determination <br />
              Weaknesses: Unconsciously setting down what I'm holding in my hand while in the process of looking for something I've lost and then, having found what I was originally looking for, needing to spend even more time looking for what I just had in my hand
            </p>
          )}

        </div>
        

      </div>
      {/* line */}
      <div className='bg-white lg:-mt-8 lg:mb-[10px] z-0 lg:col-span-1 lg:row-span-1 row-span-1 col-span-1 lg:h-full h-2 lg:w-[95%] lg:mr-0 lg:-ml-2 mr-4 ml-4 '>
      </div>
      {/* portrait   */}
      <div id="portrait-wrap" className='col-span-1 row-span-1 w-[95%] h-[95%] justify-self-center content-center'>
        <Portrait image={"src/images/headshot_tri.png"} background='bg-[url("src/images/background/purple_smudge.jpg")] cursor-pointer' height={500} width={300}></Portrait>
      </div>
    </div>
  )

});

export default Hero;

/*  Banner Color Options

from-blue-500 to-blue-400
from-amber-500 to-yellow-500

lg:p-12 p-5 rounded-xl relative -mt-8 lg:-ml-4 lg:mr-4 -ml-3 mr-3  


<p className='group relative z-0 min-w-100 max-h-50 p3 text-4xl shadow-lg shadow-black bg-neutral-100 antialiased border-gray-300 border-4 border-b-gray-400 rounded-xl w-1/2 col-span-1 p-10 -mt-0 -ml-8 mr-3 truncate 
          hover:z-10 hover:w-full hover:overflow-visible hover:whitespace-normal
          lg:-ml-8 lg:mr-8 transision:all duration-1000'>
          Hello, I'm  <a className="group-hover:text-blue-800 group-hover:font-semibold group-hover:text-6xl transision-all duration-500"> Max </a> 
        </p>
*/
