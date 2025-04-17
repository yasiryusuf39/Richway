import React from "react"
import { MdArrowForwardIos } from "react-icons/md";

export default function Card({children, ...rest}){
    return(
        <div className="secTwo-card">
            <img src={rest.image} />
            <h2>{rest.title}</h2>
            <p className="secTwo-text">{rest.text}</p>
                <p className="secTwo-btn">{children} <MdArrowForwardIos /></p>
        </div>
    )
}