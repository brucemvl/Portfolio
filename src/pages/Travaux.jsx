import { projets } from "../datas/Projets";
import Carte from "../components/Carte";
import "../styles/Travaux.scss";
import Filtres from "../components/Filtres";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Travaux() {
    const [filter, setFilter] = useState("");

    // Récupération de toutes les technologies sans doublons
    const technologies = useMemo(() => {
        return [
            ...new Set(
                projets.flatMap(projet =>
                    projet.technologies
                        .flatMap(sousTableau => sousTableau)
                        .map(tech => tech.nom)
                )
            )
        ];
    }, []);

    // Filtrage des projets
    const projetsFiltres = projets.filter(projet => {
        const nomsTechnologies = projet.technologies
            .flatMap(sousTableau => sousTableau)
            .map(tech => tech.nom);

        return !filter || nomsTechnologies.includes(filter);
    });

    return (
        <main className="blocpage">
            <section className="travaux">
                <div className="travaux__intro">
                    <span className="travaux__surtitle">MON PORTFOLIO</span>
                    <h2>Mes projets</h2>
                    <p>
                        Découvrez les projets que j'ai réalisés,
                        les technologies utilisées et les solutions développées.
                    </p>
                </div>

                <Filtres
                    technologies={technologies}
                    filter={filter}
                    setFilter={setFilter}
                />

                <div className="travaux__resultats">
                    <p>
                        {projetsFiltres.length} projet(s)
                        {filter && ` — ${filter}`}
                    </p>
                </div>

                <div className="travaux__cartes">
                    {projetsFiltres.map(({ title, cover, id }) => (
                        <Link
                            to={`/fiche/${id}`}
                            key={"projet-" + id}
                            className="travaux__lien"
                        >
                            <Carte title={title} cover={cover} />
                        </Link>
                    ))}
                </div>

                {projetsFiltres.length === 0 && (
                    <p className="travaux__vide">
                        Aucun projet ne correspond à cette technologie.
                    </p>
                )}
            </section>
        </main>
    );
}

export default Travaux;