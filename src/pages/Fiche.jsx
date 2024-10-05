import { useParams } from "react-router-dom"
import { projets } from "../datas/Projets"
import { useState } from "react"
import "../styles/Fiche.scss"

function Fiche() {

    const { id } = useParams()
    const projet = projets.find((projet) => projet.id === id)

    const [description, setDescription] = useState(true)
    const [active, setActive] = useState(true)
    const [active2, setActive2] = useState(false)


    const openContent = () => {
        setDescription(!description)
        setActive(!active)
        setActive2(!active2)

    }



    return (
        <div className="bloc">
            <section className="fiche">
                <nav className="fiche__selecteur">
                <ul>
                    {active ? <li onClick={openContent} className="desc actif">Description</li>: <li onClick={openContent} className="desc">Description</li> }
                    {active2 ? <li onClick={openContent} className="img actif">Images</li> : <li onClick={openContent} className="img">Images</li>}
                </ul>
                </nav>
                {description ?
                    <article className="fiche__description">
                        <h2>{projet.title}</h2>
                        <img src={projet.cover} className="fiche__cover" alt="fiche cover" />
                        <div className="fiche__technologies">
                            {projet.technologies.flatMap(sousTableau => sousTableau).map(element => <div className="techno">
                                <img src={element.logo} alt="logo technologies" />
                                <h3>{element.nom}</h3>
                            </div>)
                            }
                        </div>
                    </article>
                    : <img src={projet.cover} />
                }

            </section>
        </div>
    )

}

export default Fiche