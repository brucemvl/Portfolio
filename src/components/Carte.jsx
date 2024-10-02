import "../styles/Carte.scss"


function Carte({title, cover}){
return (
    <div className="carte">
        <h3 className="carte__title">{title}</h3>
        <img src={cover} alt="cover projet" className="carte__cover" />
    </div>
)
}

export default Carte