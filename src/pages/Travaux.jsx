import { projets } from "../datas/Projets"

function Travaux(){
console.log(projets)

    return (
        <div>
{projets.map((element)=>
<div>{element.title}</div>)}
        </div>
    )
}

export default Travaux