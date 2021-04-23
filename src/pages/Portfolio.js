import React from 'react'
import './styles/Portfolio.css'
import Morty from '../assets/images/morty.jpeg'
import rick from '../assets/images/rick.jpeg'
import director from '../assets/images/director.jpeg'
import zorro1 from '../assets/images/zorro1.jpg'
import zorro2 from '../assets/images/zorro2.jpg'
import zorro3 from '../assets/images/zorro3.jpg'
import batavideo from '../assets/videos/batagif.gif'

function Portfolio() {
    return (
        <main className="container-fluid portfolio_main--container">
            <h1>Portfolio</h1>
            <div className="card card-container mb-3">
                <div className="row g-0">
                    <div className="col-md-4">

                        <div id="carouselFade" className="carousel_container carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
                            <figure className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Morty} className="card_img d-block w-100" alt="morty" />
                                </div>
                                <div className="carousel-item">
                                    <img src={director} className="card_img d-block w-100" alt="director" />
                                </div>
                                <div className="carousel-item">
                                    <img src={rick} className="card_img d-block w-100" alt="rick" />
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body card_body">
                            <h5 className="card-title">100tifi.co</h5>
                            <p className="card-text">Un pequeño proyecto de JS vanilla para el curso de platzi de SPA.
                            Consumimos una api de Rick and morty e hicimos el deploy utilizando Travis CI. disfrutenlo!</p>
                            <p className="card-text card_body--link">

                                <small className="link_run">
                                    <a target="blank" href="https://lucasdmadrigal.github.io/100tifi.co/">puedes probar la app aqui</a>
                                </small>

                                <small className="link_repo">
                                    <a target="blank" href="https://github.com/LucasDMadrigal/100tifi.co">Visita aqui el repositorio</a>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-container mb-3">
                <div className="row g-0">
                    <div className="col-md-4">

                        <div id="carouselFade" className="carousel_container carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
                            <figure className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={zorro1} className="card_img d-block w-100" alt="morty" />
                                </div>
                                <div className="carousel-item">
                                    <img src={zorro2} className="card_img d-block w-100" alt="director" />
                                </div>
                                <div className="carousel-item">
                                    <img src={zorro3} className="card_img d-block w-100" alt="rick" />
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body card_body">
                            <h5 className="card-title">Lazy Fox</h5>
                            <p className="card-text">Una pequeña ejercicio para trabajar el Manejo de DOM con JS vanilla.
                            La idea es muy simple. solo muestra un listado de fotos de zorros utilizado el lazy loading.</p>
                            <p className="card-text card_body--link">
                                <small className="link_run">
                                    <a target="blank" href="https://lucasdmadrigal.github.io/100tifi.co/">puedes probar la app aqui</a>
                                </small>

                                <small className="link_repo">
                                    <a target="blank" href="https://github.com/LucasDMadrigal/lazy-fox">Visita aqui el repositorio</a>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card card-container mb-3">
                <div className="row g-0">
                    <div className="col-md-4">

                        <figure className="gif-container">
                            <img className="gif" src={batavideo} />
                        </figure>

                    </div>
                    <div className="col-md-8">
                        <div className="card_body card-body">
                            <h5 className="card-title">Bata bit</h5>
                            <p className="card-text">una landing page de una tienda de manejo de cripto monedas. un trabajo con diseño mobile first y responsive design</p>
                            <p className="card-text card_body--link">

                                <small className="link_run">
                                    <a target="blank" href="https://lucasdmadrigal.github.io/batabit/">puedes probar la app aqui</a>
                                </small>

                                <small className="link_repo">
                                    <a target="blank" href="https://github.com/LucasDMadrigal/batabit">Visita aqui el repositorio</a>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </main >
    )
}

export default Portfolio;