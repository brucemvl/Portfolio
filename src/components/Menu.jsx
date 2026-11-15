import { useState } from "react";
import "../styles/Menu.scss";
import { NavLink } from "react-router-dom";

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <div className="blocMenu">

            <button
                className={`navMenu ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
                aria-controls="main-navigation"
                type="button"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav
                id="main-navigation"
                className={`menu ${isOpen ? "is-open" : ""}`}
            >
                <ul>
                    <li>
                        <NavLink to="/" onClick={closeMenu}>
                            Présentation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/travaux" onClick={closeMenu}>
                            Mes Travaux
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" onClick={closeMenu}>
                            Me Contacter
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Menu;