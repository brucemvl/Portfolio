import "../styles/Header.scss"
import Menu from "./Menu"
import logo from "../assets/logos/logoo.png"
import React from "react"

function Header(){

    return (
        <header>
            <div className="title">
            <h1>Portfolio Bruce Monnerville</h1>
            <h2>Developpeur Web</h2>
            </div>
            <div className="logoAndMenu">
            <img src={logo} alt="logo bm" />
            <Menu />
            </div>
        </header>
    )
}

export default Header