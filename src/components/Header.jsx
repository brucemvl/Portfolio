import "../styles/Header.scss";
import Menu from "./Menu";
import logo from "../assets/logos/logoo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">

                <NavLink to="/" className="brand">
                    <img src={logo} alt="Logo BM" />

                    <div className="brand-text">
                        <h1>Bruce Monnerville</h1>
                        <p>Développeur React & React Native</p>
                    </div>
                </NavLink>

                <Menu />

            </div>
        </header>
    );
}

export default Header;