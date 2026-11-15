function Filtres({ technologies, filter, setFilter }) {
    return (
        <nav className="filtres" aria-label="Filtrer les projets par technologie">
            <button
                className={!filter ? "filtre actif" : "filtre"}
                onClick={() => setFilter("")}
            >
                Tous
            </button>

            {technologies.map(element => (
                <button
                    key={element}
                    className={filter === element ? "filtre actif" : "filtre"}
                    onClick={() => setFilter(element)}
                >
                    {element}
                </button>
            ))}
        </nav>
    );
}

export default Filtres;