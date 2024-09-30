import { useState } from "react"
import "../styles/Home.scss"

function Home(){

    const [active, setActive] = useState("active")

    const anim = ()=>{
        setActive(!active)
    }


    return (
        <div>
            {active ?
            <div className="navMenu" onClick={anim}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            :
            <div className="navMenu active" onClick={anim}>
                <span></span>
                <span></span>
                <span></span>
            </div>

}
        </div>
    )

}

export default Home