import React from "react";
import "./style.css";
import Logo from "./reactjs-icon.png";

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="react-icon" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    );
}