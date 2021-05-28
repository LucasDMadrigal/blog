import React, { Component } from 'react'
import './styles/Home.css'
export class Home extends Component {
    render() {
        return (
            <main className="container-fluid home">
                <header className="hero">
                    <h3 className="title">Mi nombre es </h3>
                    <h1 className="title">Lucas Madrigal</h1>
                    <h5 className="sub-title">y soy frontend developer</h5>
                </header>
                <section className="container about" id="about">
                    <h1>Sobre mi</h1>
                    <p>Soy un Desarrollador web vivo en Tucumán, Argentina.<br />
                   Mi formacion fue en parte en la universidad Tecnologica Nacional donde curse la carrera de Tecnico Universitario en programacion; Con grandes docentes y profesionales adquiri los conocimientos basicos para empezar a desarrollarme como profesional.
                   </p>
                    <br />
                    <p>
                        Otra de mis grandes escuelas fue Platzi. Los profesores y la comunidad de Platzi me dieron un panorama mucho mas claro de la industria y como estamos y a donde vamos a nivel latinoamerica, y aprendi a manejar lenguajes de la web (HTML, CSS, JavaScript) y conocimientos que en la universidad no tuve la oportunidad de profundizar (Algoritmos, diseño Web, responsive design).
                   </p>
                    <br />
                    <p>
                        Tengo un gran sentido de la curiosidad y disfruto mucho de aprender cosas nuevas. Eso me lleva a leer e investigar con gran pasion. Cuando tengo una duda no me detengo hasta resolverla.
                    </p>
                    <br />
                    <p>
                        Me concidero una persona espiritual, y eso sumado a mi curiosidad me llevaron a estudiar la Biblia, donde encontre resupuestas a muchas cosas. Hace unos años que asisto y soy parte de la Iglesia Adventista del Septimo Dia.
                    </p>
                    <p>
                        Otras cosas que me apasionan son la musica y la cocina. Disfruto mucho de hacer deportes aunque no los practico seguido, pero trato de mantenerme siempre en movimiento.
                    </p>
                </section>
            </main>
        )
    }
}

export default Home
