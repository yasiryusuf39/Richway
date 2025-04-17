import React from "react"
import CheckMark from "./Reusable/CheckMark"
import { PiChatTeardropTextFill } from "react-icons/pi";

export default function SectionOne(){
    return(
        <div className="hero sectionOne-container">
            <div className="sectionOne-card">
                <div className="hero-content sectionOne-text">
                    <h1>One app.
                    One banking</h1>
                    <p>Richway mobile app provides the 
                        simplicity and convenience linking you to your money, 
                        no matter where you are.</p>
                    <div className="cm">
                        <div className="section-cm"> 
                        <CheckMark>Check balances</CheckMark>
                        <CheckMark>Buy airtime</CheckMark>
                        <CheckMark>Transfer funds</CheckMark>
                        </div>
                        <div className="section-cm"> 
                        <CheckMark>Pay bills</CheckMark>
                        <CheckMark>View transaction history</CheckMark>
                        <CheckMark>Open a new account</CheckMark>
                        </div>
                    </div>
                </div>
                <img src="../src/assets/images/appstore.png" alt="Get it on Appstore"/>
                <img src="../src/assets/images/playstore.png" alt="Get it on Playstore"/>
            </div>
            <img src="../src/assets/images/phone.png" alt="A phone picture"/>
            <div className="chat-icon"><PiChatTeardropTextFill style={{width: "2em", height:"2em"}} /></div>
        </div>
    )
}