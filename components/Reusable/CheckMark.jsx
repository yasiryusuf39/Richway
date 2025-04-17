import React from "react"

export default function CheckMark({children}){
    return (
        <div className="cm-ctn">
            <div className="tick-ctn">    
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#317301" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <p>{children}</p>
        </div>
    )
}