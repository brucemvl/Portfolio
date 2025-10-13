import "../styles/Contact.scss"
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import "../styles/Contact.scss"



function Contact() {

    const form = useRef();
     const sendEmail = (e) => { e.preventDefault(); emailjs.sendForm( "react_contact", "react_contact_11/10", form.current, "5a9QlNXeINK_p0GwQ" ) 
        .then( (result) =>  { alert('Message envoyé avec succes!'); console.log(result.text); },
         (error) => { console.log(error.text); } ); };

    return (
        <div>
        <div className='blocContact'> 
            <h1>Contact</h1>
            <form className='formulaire' ref={form} onSubmit={sendEmail}>
                <div className='formulaire__nom'>
                    <label>Nom</label>
                    <input type='text' placeholder='Nom' name='user_name' />
                </div>
                <div className='formulaire__mail'>
                    <label>Mail</label>
                    <input type='email' placeholder='Adresse e-mail' name='user_email' />
                </div>
                <div className='formulaire__message'>
                    <label>Message</label>
                    <textarea name='message' type='text' placeholder='Message'></textarea>
                </div>
                <input type='submit' value='Envoyer' id='input-submit' className='submit' />
            </form>
        </div>

        <section className="contact">
            <div><i class="fa-solid fa-phone"></i><a href="tel:0627092794"><p>06.27.09.27.94</p></a></div>
            <div><i class="fa-solid fa-at"></i> <a href="mailto:bruce.monnerville@hotmail.fr"><p>bruce.monnerville@hotmail.fr</p></a></div>
            <div><a href="https://www.linkedin.com/in/bruce-monnerville-35a6a8328/" target="blank"><i class="fa-brands fa-linkedin"></i></a> <a href="https://www.linkedin.com/in/bruce-monnerville-35a6a8328/" target="blank"><p>Linkedin</p></a></div>
            <div><a href="https://github.com/brucemvl" target="blank"><i class="fa-brands fa-square-github"></i></a> <a href="https://github.com/brucemvl" target="blank"><p>Github</p></a></div>
        </section>
        </div>
    )

}

export default Contact