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
            </div>
            :
            <div>
            <div className="navMenu active" onClick={anim}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="dropdown"></div>

            </div>
            
            

}
        </div>
    )

}

export default Home