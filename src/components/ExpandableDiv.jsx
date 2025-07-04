import React, {useEffect, useState, useRef} from 'react';

function ExpandableDiv({isActive, onChildClick}) {

  const [hovered, setHovered] = useState(false);
  
  const mouseEnter = () => setHovered(true);
  const mouseLeave = () => setHovered(false);

  return (
    <div 
      onClick={onChildClick}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={`transition-all duration-600 overflow-hidden cursor-pointer bg-neutral-400 rounded p-4
        h-200 ${isActive ? 'w-108' : 'w-24'} ${isActive ? 'hover:none' : 'hover:bg-blue-200'}`

      }
    >
       <p className="font-bold">Click me to {expanded ? 'collapse' : 'expand'}!</p>
       {isActive && <p>This content is revealed when expanded.</p>}
       {hovered && <p> This box is being hovered</p>}
      
    </div>
  )
}

export default ExpandableDiv;