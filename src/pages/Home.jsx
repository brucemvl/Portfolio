import bruce from "../assets/images/bruce.jpg";
import onze from "../assets/images/onze/sanstitre.jpg";
import "../styles/Home.scss";
import { frontend, backend, outils } from "../datas/Projets";

function SkillGroup({ title, skills }) {
    return (
        <div className="skill-group">
            <h3>{title}</h3>

            <ul>
                {skills.map((element) => (
                    <li key={element.nom}>
                        <img
                            src={element.logo}
                            alt={`Logo ${element.nom}`}
                        />
                        <span>{element.nom}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Home() {
    return (
        <main className="home">

            {/* Présentation */}
            <section className="presentation">
                <div className="presentation-content">
                    <span className="section-label">
                        BIENVENUE SUR MON PORTFOLIO
                    </span>

                    <h1>
                        Bonjour, je suis <span>Bruce Monnerville.</span>
                    </h1>

                    <h2>Développeur Web & Mobile</h2>

                    <p>
                        J'aime concevoir des sites et des applications qui
                        allient design, fonctionnalité et expérience utilisateur.
                        Je développe des solutions adaptées aux besoins des
                        entreprises, associations et indépendants.
                    </p>

                    <p>
                        Site vitrine, boutique en ligne ou application sur mesure :
                        je vous accompagne de la conception jusqu'à la mise en ligne.
                    </p>

                    <a href="#onze" className="home-link">
                        Découvrir mon parcours <span>↓</span>
                    </a>
                </div>

                <div className="presentation-photo">
                    <div className="photo-decoration"></div>
                    <img src={bruce} alt="Portrait de Bruce Monnerville" />
                    <div className="photo-caption">
                        <span></span>
                        Développeur passionné
                    </div>
                </div>
            </section>

            {/* Présentation de 11sur10 */}
            <section className="onze" id="onze">
                <div className="onze-image">
                    <img src={onze} alt="Application mobile 11sur10" />
                </div>

                <div className="onze-content">
                    <span className="section-label">
                        MON PROJET PERSONNEL
                    </span>

                    <h2>
                        11sur10<span>.</span>
                    </h2>

                    <p>
                        Depuis l'obtention de mon diplôme, je me suis lancé
                        dans un projet personnel afin de mettre en application
                        et développer mes compétences.
                    </p>

                    <p>
                        11sur10 est une application mobile que j'ai développée
                        avec React Native et déployée sur les différents stores.
                        Elle compte aujourd'hui environ 200 utilisateurs.
                    </p>

                    <p>
                        Destinée principalement aux passionnés de football,
                        elle permet de retrouver les résultats, les statistiques
                        des équipes et des joueurs, les palmarès ainsi que les
                        matchs en direct.
                    </p>

                    <div className="onze-tags">
                        <span>React Native</span>
                        <span>Application mobile</span>
                        <span>Football</span>
                    </div>

                    <a
                        href="https://apps.apple.com/fr/app/11sur10/id6739251747"
                        target="_blank"
                        rel="noreferrer"
                        className="home-link"
                    >
                        Découvrir 11sur10 <span>↗</span>
                    </a>
                </div>
            </section>

            {/* Compétences */}
            <section className="competences">
                <div className="competences-heading">
                    <span className="section-label">
                        MON ENVIRONNEMENT TECHNIQUE
                    </span>
                    <h2>Mes compétences<span>.</span></h2>
                    <p>
                        Les technologies et outils que j'utilise pour
                        donner vie à mes projets.
                    </p>
                </div>

                <div className="skills-grid">
                    <SkillGroup title="Frontend" skills={frontend} />
                    <SkillGroup title="Backend" skills={backend} />
                    <SkillGroup title="Outils de développement" skills={outils} />
                </div>
            </section>

        </main>
    );
}

export default Home;