import React from "react"
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import FooterText from "./Reusable/FooterText";

export default function Footer(){
    return(
        <footer>
            <div className="ft-text">
                <FooterText>About us</FooterText>
                <FooterText>Our Business</FooterText>
                <FooterText>Loan</FooterText>
                <FooterText>Resources</FooterText>
                <FooterText>Legal</FooterText>
                <div className="footerGetApp">
                    <h2>Get the app</h2>
                    <img src="../src/assets/images/appstore.png" alt="Get it on Appstore"/>
                    <img src="../src/assets/images/playstore.png" alt="Get it on Playstore"/>
                </div>
                    
            </div>
            <div className="footer-banner">
                <p>© 2024 Richway Microfinance Bank 
                    (Licensed by the Central Bank of Nigeria). All rights reserved.</p>
                <div className="footer-icons">
                    <MdFacebook className="icons"/>
                    <AiFillTwitterCircle className="icons"/>
                    <TiSocialInstagramCircular className="icons"/>
                    <TiSocialLinkedinCircular className="icons"/>
                </div>
            </div>
            
        </footer>
    )
}