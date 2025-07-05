import React, {useEffect, useState} from 'react';
import Photo from './PropPractice';

function ExpandableDiv({label, imgId}) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleExpand = () => setExpanded(prev => !prev);
  const mouseEnter = () => setHovered(true);
  const mouseLeave = () => setHovered(false);


  return (
    <div 
      onClick={toggleExpand}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={`transition-[width, colors, text] duration-600 overflow-hidden cursor-pointer bg-neutral-200 rounded p-2
        h-200 hover:border-2 hover:border-black shadow-md
        ${expanded ? 'w-308' : 'w-24'} ${expanded ? 'hover:none' : 'hover:bg-blue-200'}
        ${expanded ? 'flex flex-col' : 'relative overflow-hidden'}
        `

      }
    >
      <div class="h-1/2 overflow-hidden absolute "><Photo imgId={imgId}></Photo></div>
      {!expanded && <p className="font-bold [writing-mode:vertical-lr] rotate-180 text-6xl">{label}</p>}
      {/* {expanded && <div class="h-1/2 w-full overflow-hidden "><Photo imgId={imgId}></Photo></div>} */}
      
      {expanded && <div class="h-1/2 w-full">asdfasdfasdfa</div>} 
      {/* {hovered && <p> This box is being hovered</p>} */}
      
    </div>
  )
}

export default ExpandableDiv;