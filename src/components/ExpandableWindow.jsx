import React, {useEffect, useState} from 'react';

function ExpandableDiv() {
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
      className={`transition-all duration-600 overflow-hidden cursor-pointer bg-blue-600 rounded p-4
        h-96 ${expanded ? 'w-108' : 'w-24'} ${expanded ? 'hover:none' : 'hover:bg-blue-200'}`

      }
    >
       <p className="font-bold">Click me to {expanded ? 'collapse' : 'expand'}!</p>
       {expanded && <p>This content is revealed when expanded.</p>}
       {hovered && <p> This box is being hovered</p>}
      
    </div>
  )
}

export default ExpandableDiv;