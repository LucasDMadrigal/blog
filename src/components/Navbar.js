import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./styles/Navbar.css";
import Logo from '../images/logo2.png'
// import Logo from '../images/logo3.png'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-gradient">
                <div className="container">
                    <Link className="navbar-brand nav_brand" to="/">
                        <figure className="logo">
                            <img className src={Logo} alt="Lucas Madrigal | Frontend Developer" />
                        </figure>
                    </Link>

                    <div className="" id="navbar">
                        <ul className="nav nav_list">

                            <li className="nav-item">
                                <Link className="nav-link link" to="/about">Sobre mi</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link" to="/contact">Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link" to="/Blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;