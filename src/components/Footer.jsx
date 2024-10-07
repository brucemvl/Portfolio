import "../styles/Footer.scss"
import github from "../assets/logos/github.png"
import linkedin from "../assets/logos/linkedin2.png"

function Footer() {

    return (
        <footer>
            <section>
                <h4>Me contacter</h4>
                <div>
                    <a href="mailto:bruce.monnerville@hotmail.fr">Email</a>
                </div>
            </section>
            <section>
                <h4>Suivez moi</h4>
                <div className="reseaux">
                    <a href="https://github.com/brucemvl" target="blank"><img src={github} alt="logo github" /></a>
                    <a href="https://www.linkedin.com/in/bruce-monnerville-35a6a8328/" target="blank"><img src={linkedin} alt="logo linkedin" /></a>
                </div>
            </section>
            <section>
                <h4>Crédits</h4>
                <div className="droits">© 2024 BM Development. Tous droits réservés.</div>
            </section>
        </footer>
    )

}

export default Footer