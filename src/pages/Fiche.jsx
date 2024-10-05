import { useParams } from "react-router-dom"
import { projets } from "../datas/Projets"

function Fiche(){

    const {id} = useParams()
    const projet = projets.find((projet) => projet.id === id)


    return (
        <div>
            {projet.title}
        </div>
    )

}

export default Fiche