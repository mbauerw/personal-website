import React from 'react';
import { ChevronDown, ArrowDown } from 'lucide-react';

const BouncingArrow = () => {
  return (
    <div className="flex items-center justify-center h-[50vh] ">
      <div className="text-center">
        <h1 className="text-8xl p3 font-bold text-gray-300 mb-8">Max Bauer</h1>
        
        {/* Bouncing Arrow */}
        {/* <div className="relative">
          <ChevronDown 
            className="w-20 h-20 text-indigo-600 mx-auto animate-bounce cursor-pointer hover:text-indigo-800 transition-colors duration-300"
            style={{
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
            }}
          />
          
          {/* Optional: Add a subtle glow effect *
          <div className="absolute inset-0 w-16 h-16 mx-auto bg-indigo-300 rounded-full opacity-20 animate-pulse"></div>
        </div> */}

        <div className="relative">
          <ArrowDown
            className="w-36 h-36 text-indigo-600 mx-auto animate-bounce cursor-pointer hover:text-indigo-800 transition-colors duration-300"
            style={{
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
            }}
          />
          
          {/* Optional: Add a subtle glow effect */}
          <div className="absolute inset-0 w-16 h-16 mx-auto bg-indigo-300 rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        {/* <p className="text-gray-600 mt-6 text-lg">More Below</p> */}

      </div>
    </div>
  );
};

export default BouncingArrow;