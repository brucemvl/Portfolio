import { useParams, Link } from "react-router-dom";
import { projets } from "../datas/Projets";
import { useState } from "react";
import "../styles/Fiche.scss";

function Fiche() {
    const { id } = useParams();
    const projet = projets.find(projet => String(projet.id) === id);

    const [activeTab, setActiveTab] = useState("description");

    if (!projet) {
        return (
            <main className="bloc">
                <section className="fiche fiche--not-found">
                    <h2>Projet introuvable</h2>
                    <p>Ce projet n'existe pas ou n'est plus disponible.</p>
                    <Link to="/travaux">Retour aux projets</Link>
                </section>
            </main>
        );
    }

    const technologies = projet.technologies
        .flatMap(sousTableau => sousTableau);

    const objectifs = projet.objectifs
        .flatMap(sousTableau => sousTableau);

    return (
        <main className="bloc">
            <section className="fiche">

                <div className="fiche__entete">
                    <span className="fiche__surtitle">MES RÉALISATIONS</span>
                    <h2>{projet.title}</h2>
                    <p>Découvrez les détails de ce projet et les compétences mobilisées.</p>
                </div>

                <nav className="fiche__selecteur" aria-label="Contenu du projet">
                    <button
                        className={activeTab === "description" ? "actif" : ""}
                        onClick={() => setActiveTab("description")}
                        aria-pressed={activeTab === "description"}
                    >
                        Description
                    </button>

                    <button
                        className={activeTab === "images" ? "actif" : ""}
                        onClick={() => setActiveTab("images")}
                        aria-pressed={activeTab === "images"}
                    >
                        Images
                    </button>
                </nav>

                {activeTab === "description" ? (
                    <div className="fiche__complete">

                        <article className="fiche__description">
                            <div className="fiche__presentation">
                                <img
                                    src={projet.cover}
                                    className="fiche__cover"
                                    alt={`Aperçu du projet ${projet.title}`}
                                />

                                <div className="fiche__texte">
                                    <h3>À propos du projet</h3>
                                    <p>{projet.description}</p>

                                    {projet.github && (
                                        <a
                                            href={projet.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="fiche__github"
                                        >
                                            Voir le code sur GitHub
                                            <span aria-hidden="true"> ↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="fiche__technologies">
                                <h3>Technologies utilisées</h3>

                                <div className="fiche__technologies-liste">
                                    {technologies.map((element, index) => (
                                        <div className="techno" key={`${element.nom}-${index}`}>
                                            <img
                                                src={element.logo}
                                                alt={`Logo ${element.nom}`}
                                            />
                                            <span>{element.nom}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>

                        <aside className="fiche__objectifs">
                            <div className="fiche__objectifs-titre">
                                <span>✦</span>
                                <h3>Compétences acquises</h3>
                            </div>

                            <ul>
                                {objectifs.map((element, index) => (
                                    <li key={`${element}-${index}`}>
                                        <span className="objectif__check">✓</span>
                                        {element}
                                    </li>
                                ))}
                            </ul>
                        </aside>

                    </div>
                ) : (
                    <article className="fiche__images">
                        <div className="fiche__images-entete">
                            <h3>Le projet en images</h3>
                            <p>Quelques aperçus de la réalisation.</p>
                        </div>

                        {projet.pictures && projet.pictures.length > 0 ? (
                            <div className="fiche__galerie">
                                {projet.pictures.map((picture, index) => (
                                    <div className="fiche__galerie-item" key={index}>
                                        <img
                                            src={picture}
                                            alt={`Capture d'écran ${index + 1} du projet ${projet.title}`}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="fiche__sans-image">
                                Aucune image disponible pour ce projet.
                            </p>
                        )}
                    </article>
                )}

                <Link to="/travaux" className="fiche__retour">
                    ← Retour aux projets
                </Link>

            </section>
        </main>
    );
}

export default Fiche;