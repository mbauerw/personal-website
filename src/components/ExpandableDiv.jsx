import React, {useEffect, useState} from 'react';
import Photo from './PropPractice';

function ExpandableDiv({index, label, imgId, sendState, isActive}) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleExpand = () => {
    setExpanded(prev => !prev);
    sendState(index);
  }

  const mouseEnter = () => setHovered(true);
  const mouseLeave = () => setHovered(false);


  return (
    <div 
      onClick={toggleExpand}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={`h-200 min-w-24 transition-all ease-in-out duration-800 outline-1 outline-neutral-200 overflow-hidden cursor-pointer bg-neutral-200 rounded
        shadow-xl shadow-neutral-400 hover:outline-1 hover:outline-black
        ${expanded ? 'w-308' : 'w-24'} ${expanded ? 'hover:none' : 'hover:bg-blue-200'}
        ${expanded ? 'flex flex-col' : ''}
        `}
    >
      {!expanded && <p className="font-bold [writing-mode:vertical-lr] rotate-180 text-6xl p-4">{label}</p>}
      {expanded && <div class="h-1/2 w-400 overflow-hidden"><Photo imgId={imgId}></Photo></div>}
      
      {expanded && <div class="h-1/2 w-full">asdfasdfasdfa</div>} 
      
      
    </div>
  )
}

export default ExpandableDiv;

