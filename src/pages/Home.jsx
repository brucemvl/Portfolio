import { useState } from "react"
import "../styles/Home.scss"

function Home(){

    const [active, setActive] = useState("active")

    const anim = ()=>{
        setActive(!active)
    }


    return (
        <div className="blocpage">
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

                </ul>
            </nav>

            </div>
            
            

}
        </div>
    )

}

export default Home