import React from "react"
import { IoLockClosedOutline, IoMenuOutline } from "react-icons/io5";
import SubHeader from "./SubHeader";
import logo from "/src/assets\/images\/logo.png"

export default function Header() {
    const openAcct = {color: "#317301",
                    fontFamily: "Inter",
                    fontSize: "0.88rem",
                    fontWeight: "600",
                    lineHeight: "20px"}

    const menuOptions =["Home", "Personal Banking", "Business Banking", "Diaspora Banking", "Personal Loan", "SME Loan"]
    const renderMenu = menuOptions.map(menu => {
       return <p>{menu}</p>
    })

    return <header>
        <SubHeader />
            <nav>
                    <img src={logo} />
                <div className="hero-menu menu-disable">
                        {/* <p>Home</p>
                        <p>Personal Banking</p>
                        <p>Business Banking</p>
                        <p>Diaspora Banking</p>
                        <p>Personal Loan</p>
                        <p>SME Loan</p> */}
                        {renderMenu}
                        <p style={openAcct}>Open an Account</p>
                </div>
                <div className="btn menu-disable">
                    <IoLockClosedOutline /> Internet Banking
                </div>
                <IoMenuOutline className="menu-stipe" />
            </nav>
        </header>
}