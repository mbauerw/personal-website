import React from 'react';
import { ChevronDown, ArrowDown } from 'lucide-react';

const BouncingArrow = ({ref, onClick}) => {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <div className="flex flex-col justify-center items-center rounded-full h-90 w-90 transition-all duration-1000 
        bg-zinc-800/40 hover:bg-blue-600/30 ">
        <div className="h-1/2 flex justify-center items-center">
          <h1 className="text-8xl p3 font-bold text-gray-700 pt-16">Max Bauer</h1>
        </div>
        <div className=" h-1/2 ">
          <ArrowDown
            className="w-36 h-36 text-indigo-800 mx-auto animate-bounce animate-duration-2000 cursor-pointer transition-colors duration-1000"
            style={{
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
            }}
            onClick={() => onClick(ref)}

          />
          
        </div>
      </div>
    </div>
  );
};

export default BouncingArrow;