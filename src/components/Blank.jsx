import React, { useRef, useState, useEffect } from "react";

function Blank({
    height=300,
    className=""
}) {
    return (
        <div 
            className={`w-full ${className}`} 
            style={{
                height: `${height}px`
            }}
        >

        </div>
    )
}

export default Blank;