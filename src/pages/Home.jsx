import bruce from "../assets/images/bruce.jpg"
import onze from "../assets/images/onze/onze4.png"
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
                <div className="onze">
                   <p>Depuis l'obtention de mon diplome, je me suis lancé dans un projet personnel afin de mettre en application et développer mes competences.<br>
                   </br>11sur10 est une application mobile que j'ai développé avec React Native et deployé sur les differents stores, elle compte aujourdhui environ 200 utilisateurs.<br></br>
                   Cette application destinée principalement aux passionnés de football permet de retrouver tous les resultats footbalistiques ainsi que les statistiques des equipes ou des joueurs, palmares, matchs en live, etc...</p>
                   <div>
                    <a href="https://apps.apple.com/fr/app/11sur10/id6739251747"><img src={onze} alt="11sur10 visuel"/></a>
                   </div>
                </div>
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