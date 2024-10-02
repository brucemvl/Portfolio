import { projets } from "../datas/Projets"
import Carte from "../components/Carte"
import "../styles/Travaux.scss"
import Filtres from "../components/Filtres"

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

    return (
        <section className="travaux">
            <Filtres technologies={technologies} />
            <div className="travaux__cartes">
                {projets.map(({ title, cover }) =>
                    <Carte title={title} cover={cover} key={"projet" + title} />)}
            </div>
        </section>
    )
}

export default Travaux