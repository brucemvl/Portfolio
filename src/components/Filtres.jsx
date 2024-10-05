function Filtres({technologies, setFilter}){

    return (
        <nav>
            <ul className="filtres">
                {technologies.map((element)=>
                <li key={element} onClick={()=>{setFilter(element)}}>{element}</li>
                )}
            </ul>
        </nav>
    )

}

export default Filtres