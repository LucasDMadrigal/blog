import React from 'react'
import emailjs from 'emailjs-com'
import './styles/Contact.css'

function Contact() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_pkg38il', 'template_p70wyzr', e.target, 'user_qIJzZjoZMlupoiS5f4Ta4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    }
    return (
        <main className="container-fluid">
            <h3>Contacto</h3>
            <form className="contact-form" onSubmit={sendEmail}>
                <label className="form-label">Name</label>
                {/* <span className="required_message">Este campo no puede estar vacio</span> */}
                <input className="form-control" type="text" name="user_name" required />
                <label>Email</label>
                {/* <span className="required_message">Este campo no puede estar vacio</span> */}
                <input className="form-control" type="email" placeholder="name@example.com" name="user_email" required />
                <label>Message</label>
                {/* <span className="required_message">Este campo no puede estar vacio</span> */}
                <textarea className="form-control textarea" placeholder="Escribeme y estaremos en contacto..." name="message" required />
                {/* <span className="required_message">verifica y completa el formulario, por favor</span> */}
                <input className="btn btn-form" type="submit" value="Send" />
            </form>
        </main>
    );
}

export default Contact;
