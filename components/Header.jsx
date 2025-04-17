import React from "react"
import { IoLockClosedOutline } from "react-icons/io5";
import SubHeader from "./SubHeader";
import logo from "/src/assets\/images\/logo.png"

export default function Header() {
    const openAcct = {color: "#317301",
                    fontFamily: "Inter",
                    fontSize: "0.88rem",
                    fontWeight: "600",
                    lineHeight: "20px"}

    return <header>
        <SubHeader />
            <nav>
                    <img src={logo} />
                <div className="hero-menu">
                        <p>Home</p>
                        <p>Personal Banking</p>
                        <p>Business Banking</p>
                        <p>Diaspora Banking</p>
                        <p>Personal Loan</p>
                        <p>SME Loan</p>
                        <p style={openAcct}>Open an Account</p>
                </div>
                <div className="btn">
                    <IoLockClosedOutline /> Internet Banking
                </div>
            </nav>
        </header>
}