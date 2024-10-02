import { projets } from "../datas/Projets"
import Carte from "../components/Carte"
import "../styles/Travaux.scss"
import Filtres from "../components/Filtres"

function Travaux(){
const techno = projets.map((element)=> element.technologies)

const technos = techno.reduce(
    (acc, elem) =>
        acc.includes(elem) ? acc : acc.concat(elem.nom),
        []
)
console.log(techno)
console.log(technos)
    return (
        <section className="travaux">
            <Filtres />
{projets.map(({title, cover})=>
<Carte title={title} cover={cover}/>)}
        </section>
    )
}

export default Travaux