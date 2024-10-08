import "../styles/Carte.scss"


function Carte({title, cover}){
return (
    <div className="carte">
        <h4 className="carte__title">{title}</h4>
        <img src={cover} alt={`cover ${title}`} className="carte__cover" />
    </div>
)
}

export default Carte