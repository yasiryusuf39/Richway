import React from "react"
import Card from "./Reusable/Card"
import piggy from "/src/assets/images/Account.png"
import coin from "/src/assets/images/coin.png"
import credit from "/src/assets/images/credit.png"

export default function SectionTwo(){
    return(
        <div className="hero sectionTwo-container">
            
                <h2>Richway MFB Products</h2>
                <p>Tailored to your lifestyle, designed for your
                personal and business needs.</p>
            <div className="sectionTwo-card">
                <Card 
                image={piggy}
                title="Personal Loan"
                text="Achieve your personal goals with our flexible personal loans, designed to 
                       provide you with the funds you need, when you need them."
                >Apply now</Card>
                <Card 
                image={coin}
                title="SME Loan"
                text="Empower your business with our SME loans, offering 
                competitive rates and flexible repayment terms to help you grow and succeed."
                >Get started</Card>
                <Card 
                image={credit}
                title="Quick Credit"
                text="Get instant access to funds with our Quick Credit service, 
                providing fast and hassle-free loans to meet your urgent financial needs."
                >Apply now</Card>
            </div>
        </div>
    )
}