import React from "react";
import Avatar from "../assets/images/myAvatar.svg";
import Avatar2 from "../assets/images/myAvatar-1.svg";
import "./styles/Home.css";

function Home() {
  return (
    <main className="container-fluid home">
      <header id="" className="hero">
        <picture>
          {/* <img className="hero_photo" src={Avatar} alt="hero_me" /> */}
          <img className="hero_photo" src={Avatar2} alt="hero_me" />
        </picture>
        <h3 className="title">Mi nombre es </h3>
        <h1 className="title">Lucas Madrigal</h1>
        <h5 className="sub-title">y soy frontend developer</h5>
      </header>
      <section className="container about">
        <h2 id="about">Sobre mi</h2>
        <p>
          👋 Hola A TOD@S. Me presento, Soy Lucas, Técnico Universitario en
          Programación. Vivo en Tucumán, Argentina.{" "}
        </p>

        <p>
          👨🏽‍💻 Cuento con 3 años de experiencia en desarrollo web, trabajando
          principalmente como Frontend Developer con el stack React y
          herramientas de su entorno como Axios para peticiones HTTP y Redux
          para el manejo de estados globales. También manejo herramientas de
          desarrollo Backend del entorno de Node.js como Express.js, MongoDB y
          Mongoose. Durante este tiempo, adquirí experiencia en el uso de bases
          de datos SQL y MySQL, lo que me permitió dar apoyo al equipo Backend
          al atender tickets de Bugs en las aplicaciones que desarrollamos.
        </p>

        <p>
          ☕ Además, tengo experiencia en el desarrollo con Java y su entorno
          Backend. He creado APIs con Springboot, utilizando MVC como patrón de
          diseño, implementando Spring Security en la capa de seguridad y manejo
          de bases de datos con SQL.
        </p>

        <p>
          👨🏽‍🏫 Adicionalmente, me desempeñé como tutor del curso de desarrollo de
          backend con Node en Coderhouse, y actualmente sigo capacitándome en
          esta tecnología.
        </p>

        <p>
          🤝🏽 Soy una persona comprometida y confiable, con capacidad para
          comunicar ideas. Me destaco por ser resolutivo, propositivo y
          detallista. Aporto ideas innovadoras y entiendo conceptos fácilmente.
          Me considero responsable, inteligente, buen compañero, integrador y
          comunicativo. Tengo habilidades de liderazgo y busco mejorar el
          equipo.
        </p>
        <p>
          👨🏽‍🎓 Tengo como objetivo crecer en el desarrollo de aplicaciones web y
          soluciones nativas, y me interesa la ciencia de datos. A corto plazo,
          planeo estudiar ingeniería de software y aprender Python para
          introducirme en Data Science. Estoy entusiasmado por colaborar y
          aprender de nuevos desafíos en desarrollo de software. Si tienes un
          proyecto interesante o quieres conectar, contáctame. ¡Gracias por
          conocerme!
        </p>
      </section>
    </main>
  );
}

export default Home;
