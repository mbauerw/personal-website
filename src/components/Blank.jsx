import React, { useRef, useState, useEffect } from "react";


function Blank({
    height=300,
    className="",
    background="",
    children
}) {
    return (
        <div 
            className={`w-full bg-fixed bg-no-repeat w-full bg-size-[100%_100%] flex flex-col justify-center ${background} ${className} `} 
            style={{
                height: `${height}px`
            }}
        >
            {children}
        </div>
    )
}

export default Blank;