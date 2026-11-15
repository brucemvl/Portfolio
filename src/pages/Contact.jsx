import "../styles/Contact.scss";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
    const form = useRef();
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setSending(true);
        setStatus("");

        emailjs.sendForm(
            "react_contact",
            "react_contact_11/10",
            form.current,
            "5a9QlNXeINK_p0GwQ"
        )
            .then(() => {
                setStatus("success");
                form.current.reset();
            })
            .catch((error) => {
                console.error("Erreur EmailJS :", error);
                setStatus("error");
            })
            .finally(() => {
                setSending(false);
            });
    };

    return (
        <main className="contact-page">

            <section className="blocContact">
                <div className="contact__intro">
                    <span className="contact__surtitle">RESTONS EN CONTACT</span>
                    <h1>Me contacter</h1>
                    <p>
                        Vous avez un projet, une question ou une opportunité ?
                        N'hésitez pas à m'envoyer un message.
                    </p>
                </div>

                <form
                    className="formulaire"
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <div className="formulaire__champ">
                        <label htmlFor="user_name">Nom</label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            placeholder="Votre nom"
                            required
                        />
                    </div>

                    <div className="formulaire__champ">
                        <label htmlFor="user_email">Adresse e-mail</label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            placeholder="votre@email.com"
                            required
                        />
                    </div>

                    <div className="formulaire__champ">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Décrivez votre demande..."
                            rows="6"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit"
                        disabled={sending}
                    >
                        {sending ? "Envoi en cours..." : "Envoyer le message"}
                        {!sending && <span aria-hidden="true"> →</span>}
                    </button>

                    {status === "success" && (
                        <p className="formulaire__status success" role="status">
                            Votre message a bien été envoyé. Merci !
                        </p>
                    )}

                    {status === "error" && (
                        <p className="formulaire__status error" role="alert">
                            Une erreur est survenue. Veuillez réessayer.
                        </p>
                    )}
                </form>
            </section>

            <section className="contact">
                <div className="contact__coordonnees">
                    <span className="contact__surtitle">MES COORDONNÉES</span>
                    <h2>Retrouvez-moi également ici</h2>
                </div>

                <div className="contact__liens">

                    <a href="tel:0627092794" className="contact__lien">
                        <span className="contact__icone">☎</span>
                        <span>
                            <small>Téléphone</small>
                            <strong>06.27.09.27.94</strong>
                        </span>
                    </a>

                    <a
                        href="mailto:bruce.monnerville@hotmail.fr"
                        className="contact__lien"
                    >
                        <span className="contact__icone">@</span>
                        <span>
                            <small>E-mail</small>
                            <strong>bruce.monnerville@hotmail.fr</strong>
                        </span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/bruce-monnerville-35a6a8328/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__lien"
                    >
                        <span className="contact__icone">in</span>
                        <span>
                            <small>LinkedIn</small>
                            <strong>Mon profil LinkedIn</strong>
                        </span>
                    </a>

                    <a
                        href="https://github.com/brucemvl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__lien"
                    >
                        <span className="contact__icone">⌘</span>
                        <span>
                            <small>GitHub</small>
                            <strong>Mes projets sur GitHub</strong>
                        </span>
                    </a>

                </div>
            </section>

        </main>
    );
}

export default Contact;