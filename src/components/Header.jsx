import "../styles/Header.scss"
import Menu from "./Menu"
import logo from "../assets/logos/logoo.png"
import React from "react"

function Header(){

    return (
        <header>
            <div className="title">
            <h1>Portfolio Bruce Monnerville</h1>
                        <img src={logo} alt="logo bm" />
</div>
            <h2>Developpeur React & React Native</h2>

            <Menu />
        </header>
    )
}

export default Header