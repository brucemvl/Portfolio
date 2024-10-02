function Filtres({technologies}){

    return (
        <nav>
            <ul className="filtres">
                {technologies.map((element)=>
                <li key={element}>{element}</li>
                )}
            </ul>
        </nav>
    )

}

export default Filtres