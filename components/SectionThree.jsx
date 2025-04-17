import React from "react"
import card from "/src/assets/images/card.png"

export default function SectionThree(){
    return(
        <div className="hero sectionThree-container">
            <div className="secThree-content ">
                <h2>Richway Verve</h2>
                <p>A Richway Debit Card, you can pay for your every 
                    day expenses such as: travels, and supplies, utility 
                    bills, pay bills etc.</p>
            <div className="btn">Request Card</div>
            </div>
            <img src={card} />
        </div>
    )
}