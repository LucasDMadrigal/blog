import React from 'react'
import './styles/Footer.css';

function Footer() {

    return (
        <footer className="footer container-fluid">
            <a target="blank" href="mailto:lucasmadrigalb@gmail.com">lucasmadrigalb@gmail.com</a>
            <div className="social-media_container">

                <a className="social-media" title="Twitter" target="blank" href="https://twitter.com/_lucasdmadrigal">
                    <i className="fab fa-twitter" />
                </a>
                <a className="social-media" title="GitHub" target="blank" href="https://github.com/LucasDMadrigal">
                    <i className="fab fa-github" />
                </a>

                <a className="social-media" title="e-mail" target="blank" href="https://www.linkedin.com/in/lucasdmadrigal/">
                    <i className="fab fa-linkedin-in" />
                </a>
            </div>

            <p>Developed by Lucas Madrigal © 2021</p>

        </footer >
    )

}

export default Footer
