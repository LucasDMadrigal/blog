import React, { Component } from 'react'
import './styles/Home.css'
export class Home extends Component {
    render() {
        return (
            <main className="container-fluid home">
                <header className="hero">
                    <h4>Mi nombre es </h4>
                    <h1>Lucas Madrigal</h1>
                    <h3>y soy frontend developer</h3>
                </header>
            </main>
        )
    }
}

export default Home
