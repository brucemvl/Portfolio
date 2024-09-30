import { useState } from "react"
import "../styles/Menu.scss"

function Menu() {

    const [active, setActive] = useState("active")

    const anim = () => {
        setActive(!active)
    }

    return (
        <div className="blocMenu">
            {active ?
                <div>
                    <div className="navMenu" onClick={anim}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className="menu inactive"></nav>
                </div>
                :
                <div>
                    <div className="navMenu active" onClick={anim}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className="menu">
                        <ul>
                            <li>Présentation</li>
                            <li>Mes Travaux</li>
                            <li>Mon CV</li>
                            <li>Me Contacter</li>

                        </ul>
                    </nav>
                </div>

            }
        </div>
    )

}

export default Menu