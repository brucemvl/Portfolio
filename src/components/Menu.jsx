import { useState } from "react"
import "../styles/Menu.scss"
import { NavLink } from "react-router-dom"

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
                           <NavLink to={"/"}><li>Présentation</li></NavLink> 
                           <NavLink to={"/travaux"}><li>Mes Travaux</li></NavLink> 
                           <NavLink to={"/cv"} ><li>Mon CV</li></NavLink> 
                           <NavLink to={"/contact"}><li>Me Contacter</li></NavLink> 

                        </ul>
                    </nav>
                </div>

            }
        </div>
    )

}

export default Menu