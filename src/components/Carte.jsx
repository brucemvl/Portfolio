import "../styles/Carte.scss";

function Carte({ title, cover }) {
    return (
        <article className="carte">
            <div className="carte__image">
                <img
                    src={cover}
                    alt={`Aperçu du projet ${title}`}
                    className="carte__cover"
                />
            </div>

            <div className="carte__contenu">
                <h3 className="carte__title">{title}</h3>
                <span className="carte__voir">
                    Découvrir le projet
                    <span aria-hidden="true"> →</span>
                </span>
            </div>
        </article>
    );
}

export default Carte;