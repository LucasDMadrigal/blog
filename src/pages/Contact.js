import React from 'react';
import emailjs from 'emailjs-com';
import './styles/Contact.css';

function Contact() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_aic3iy5', 'template_e48d5um', e.target, 'user_qIJzZjoZMlupoiS5f4Ta4')
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
                <div className="input_container">
                    <label className="form-label">Name</label>
                    <input className="form-control" type="text" name="user_name" required />
                    <label>Email</label>
                    <input className="form-control" type="email" placeholder="name@example.com" name="user_email" required />
                </div>
                <div className="message_container">
                    <label>Message</label>
                    <textarea className="form-control textarea" placeholder="Escribeme y estaremos en contacto..." name="message" required />
                    <input className="btn btn-form" type="submit" value="Send" />
                </div>
            </form>
        </main>
    );
}

export default Contact;
