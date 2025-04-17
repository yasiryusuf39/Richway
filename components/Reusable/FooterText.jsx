import React from "react";

export default function FooterText({children}){

        const about= ["Home", "Our History", "Leadership", "Career"]
        const business= ["Personal Banking", "Business Banking", "Diaspora Banking"]
        const loan= ["SME Loan", "Personal Loan"]
        const resources= ["Richway Debit Card", "Mobile Banking", "P.O.S Terminal"]
        const legal= ["Terms and Condition", "Privacy Policy", "Contact"]
        
        let footerText

        function renderFooterText(){
            if(children.toLowerCase() === "about us") {
                footerText= about.map((text) => 
                 <p>{text}</p> )
                return footerText
            } if(children.toLowerCase() === "our business") {
                footerText= business.map((text) => 
                 <p>{text}</p> )
                return footerText
            }  if(children.toLowerCase() === "loan") {
                footerText= loan.map((text) => 
                 <p>{text}</p> )
                return footerText
            }  if(children.toLowerCase() === "resources") {
                footerText = resources.map((text) => 
                 <p>{text}</p> )
                return footerText
            }  if(children.toLowerCase() === "legal") {
                footerText= legal.map((text) => 
                 <p>{text}</p> )
                return footerText
            }
        }

    const renderText = renderFooterText()
        
     return <div className="footer-text">
                <h2>{children}</h2>
                {renderText}
            </div>

}