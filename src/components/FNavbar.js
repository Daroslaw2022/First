import React from "react";
import logo from '../images/logo.svg'

const FNavbar = () => {
    return (
        <nav className="Fnav">
            <img src={logo} className='nav--icon'/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project1</h4>
        </nav>
    )};
export default FNavbar;