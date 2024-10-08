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
                <div className="fiche__complete">
                    <article className="fiche__description">
                        <h2>{projet.title}</h2>
                        <img src={projet.cover} className="fiche__cover" alt={`cover ${projet.title}`} />
                        <div className="fiche__technologies">
                            {projet.technologies.flatMap(sousTableau => sousTableau).map(element => <div className="techno">
                                <img src={element.logo} alt={`logo ${element.nom}`} />
                                <h4>{element.nom}</h4>
                            </div>)
                            }
                        </div>
                        <p>{projet.description}</p>
                        <a href={projet.github}>Lien vers le code sur Github</a>
                    </article>
                    <aside>
                        <h3>Competences acquises</h3>
                        <ul>
                        {projet.objectifs.flatMap(sousTableau=> sousTableau).map(element => 
                        <li>{element}</li>)}
                        </ul>
                    </aside>
                    </div>
                    : <div className="fiche__complete">
                        <article className="fiche__images">
                            <h2>Projet en images</h2>
                            <div>
            {projet.pictures && projet.pictures.length > 0 ? (
                projet.pictures.map((picture, index) => (
                    <img src={picture} alt={`Capture d'ecran du projet ${index + 1}`} key={index} />
                ))
            ) : (
                <p>Aucune image disponible pour ce projet.</p>
            )}
        </div>
    </article>
</div>
                }

            </section>
        </div>
    )

}

export default Fiche