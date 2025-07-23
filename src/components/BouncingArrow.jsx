import React from 'react';
import { ChevronDown, ArrowDown } from 'lucide-react';

const BouncingArrow = ({ref, onClick}) => {
  return (
    <div className="flex items-center justify-center h-[50vh] ">
      <div className="text-center">
        <h1 className="text-8xl p3 font-bold text-gray-300 mb-8">Max Bauer</h1>
        <div className="relative">
          <ArrowDown
            className="w-36 h-36 text-indigo-800 mx-auto animate-bounce cursor-pointer hover:text-indigo-900 transition-colors duration-500"
            style={{
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
            }}
            onClick={() => onClick(ref)}

          />
          
        </div>
      </div>
    </div>
  );
};

export default BouncingArrow;