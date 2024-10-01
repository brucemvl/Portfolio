import { useState } from "react"
import "../styles/Menu.scss"
import { Link } from "react-router-dom"

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
                           <Link><li>Présentation</li></Link> 
                           <Link><li>Mes Travaux</li></Link> 
                           <Link><li>Mon CV</li></Link> 
                           <Link><li>Me Contacter</li></Link> 

                        </ul>
                    </nav>
                </div>

            }
        </div>
    )

}

export default Menu