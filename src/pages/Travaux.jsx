import { projets } from "../datas/Projets"
import Carte from "../components/Carte"
import "../styles/Travaux.scss"
import Filtres from "../components/Filtres"
import { useState } from "react"
import { Link } from "react-router-dom"

function Travaux() {

    const tech = projets.reduce(
        (acc, elem) =>
            acc.includes(elem.technologies) ? acc : acc.concat(elem.technologies),
        []
    )

    const techno = tech.map((element) => element.nom)

    const technologies = techno.reduce(
        (acc, elem) =>
            acc.includes(elem) ? acc : acc.concat(elem),
        []
    )


    const [filter, setFilter] = useState("")


    return (
        <div className="blocpage">
        <section className="travaux">
            <h2>Projets réalisés</h2>
            <Filtres technologies={technologies} setFilter={setFilter} />
            <div className="travaux__cartes">
                {projets.map(({ title, cover, technologies, id }) => {
                    // Aplatir les technologies du projet
                    const nomsTechnologies = technologies.flatMap(sousTableau => sousTableau).map(objet => objet.nom);

                    // Vérifier si le filtre est appliqué et si le projet correspond
                    const matchesFilter = !filter || nomsTechnologies.includes(filter);

                    return matchesFilter ? (
                        <Link to={`/fiche/${id}`} ><Carte title={title} cover={cover} key={"projet" + title} /></Link>
                    ) : null;
                })}
            </div>
        </section>
        </div>
    );
}

export default Travaux