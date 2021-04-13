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
                    <p>Soy un Desarrollador web que vive en Tucumán, Argentina. Tengo 28 años y bla bla. <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, voluptatem quam. Quidem fuga voluptatem quam voluptatum incidunt in obcaecati odit veritatis possimus voluptatibus recusandae tenetur ad, amet dolores neque similique. <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum rem aperiam excepturi. Ex illo voluptate, delectus, expedita voluptatibus laudantium, velit rem doloribus at exercitationem earum. Ad adipisci nihil sapiente, rerum corrupti eum, eius commodi, asperiores dolores amet quasi similique aspernatur ducimus vitae ullam iste voluptatibus doloremque exercitationem minima pariatur?
                    </p>
                </section>
            </main>
        )
    }
}

export default Home
