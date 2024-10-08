import bruce from "../assets/images/bruce.jpg"
import "../styles/Home.scss"
import { frontend, backend, outils } from "../datas/Projets"

function Home(){

   

    return (
        <div className="blocp">
            <section className="presentation">
                <article>
                    <img src={bruce} alt="bruce"/>
                    <p> <span>Bienvenue sur mon portfolio ! 🎉
                        Je suis Bruce Monnerville, Étudiant en développement web 🌐 <br></br></span>
                        Je sors fraîchement d'une formation développeur web Bac+2 chez OpenClassrooms. 🎓 Passionné par le développement web, j'aime créer des sites et des applications qui allient design et fonctionnalité. 💻✨ Chaque projet est pour moi une opportunité de perfectionner mes compétences et d'explorer de nouvelles technologies 🚀. Vous trouverez ici un apercu de mes travaux ainsi que toutes mes coordonnées pour une eventuelle collaboration</p>
                </article>
                <aside>
                    <h3>Mes competences</h3>
                    <div className="technos">
                        <div className="frontend">
                            <h4>Frontend</h4>
                            <ul>
                            {frontend.map((element) => <li>
                                <img src={element.logo} alt={`logo ${element.nom}`} />
                                <h5>{element.nom}</h5>
                                </li>)}
                                </ul>
                        </div>
                        <div className="backend">
                            <h4>Backend</h4>
                            <ul>
                            {backend.map((element) => <li>
                                <img src={element.logo} alt={`logo ${element.nom}`}/>
                                <h5>{element.nom}</h5>
                                </li>)}
                                </ul>
                        </div>
                        <div className="outils">
                        <h4>Outils de dev</h4>
                        <ul>
                            {outils.map((element) => <li>
                                <img src={element.logo} alt={`logo ${element.nom}`}/>
                                <h5>{element.nom}</h5>
                                </li>)}
                                </ul>
                        </div>
                    </div>

                </aside>
            </section>
            
        </div>
    )

}

export default Home