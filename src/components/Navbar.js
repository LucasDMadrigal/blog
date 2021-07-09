import React, { Component } from 'react';
import "./styles/Navbar.css";
import Logo from '../assets/images/logo2.png'
// import Logo from '../images/logo3.png'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-gradient sticky-top">
                <div className="container navbar_container">
                    <a className="navbar-brand nav_brand" href="/">
                        <figure className="logo">
                            <img src={Logo} title="Lucas Madrigal | Frontend Developer" alt="Lucas Madrigal | Frontend Developer" />
                        </figure>
                    </a>

                    <div className="" id="navbar">
                        <ul className="nav nav_list">
                            <li className="nav-item">
                                <a title="Sobre mi" className="nav-link link" href="/#about">Sobre mi</a>
                            </li>
                            <li className="nav-item">
                                <a title="Portfolio" className="nav-link link" href="/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a title="Contáctame" className="nav-link link" href="/contact">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;