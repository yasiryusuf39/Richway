import React from "react"
import { IoLockClosedOutline, IoMenuOutline } from "react-icons/io5";
import SubHeader from "./SubHeader";
import logo from "/src/assets\/images\/logo.png"
import { PiChatTeardropTextFill } from "react-icons/pi";

export default function Header() {
    const [menuToggle, setMenuToggle] = React.useState(false)
    
    const openAcct = {color: "#317301",
                    fontFamily: "Inter",
                    fontSize: "0.88rem",
                    fontWeight: "600",
                    lineHeight: "20px"}

    const menuOptions =["Home", "Personal Banking", "Business Banking", "Diaspora Banking", "Personal Loan", "SME Loan"]
    const renderMenu = menuOptions.map(menu => {
       return <p>{menu}</p>
    })

    function toggleMenu(){
        setMenuToggle(prev => !prev)
    }

    const menu = <div className="hero-menu menu-disable">
                        {renderMenu}
                         <p style={openAcct}>Open an Account</p>
                    <div className="btn">
                        <IoLockClosedOutline /> Internet Banking
                    </div>
                </div>

    const bigScreenMenu = menu

    const smallScreenMenu = <div className="hero-menu">
                        {renderMenu}
                         <p style={openAcct}>Open an Account</p>
                    <div className="btn">
                        <IoLockClosedOutline /> Internet Banking
                    </div>
                </div>

    return <header>
        <div className="header-container">
        <SubHeader />
            <nav>
                <img src={logo} />
                {}
                {menuToggle ? "" : bigScreenMenu}
                {menuToggle ? smallScreenMenu : ""}
                <IoMenuOutline className="menu-stipe" onClick={toggleMenu} />
            </nav>
            <div className="chat-icon"><PiChatTeardropTextFill style={{width: "2em", height:"2em"}} /></div>
        </div>
        </header>
}
{/* <p>Home</p>
<p>Personal Banking</p>
<p>Business Banking</p>
<p>Diaspora Banking</p>
<p>Personal Loan</p>
<p>SME Loan</p> */}