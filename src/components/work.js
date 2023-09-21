import React from "react";
import Title from "./common/title";
import Carouselcard from "./common/carouselcard"

function Work() {
    return (
        <div id="work" className="container">
            <Title titulo="Proyectos profesionales" />
            <br></br>
            <p className="bajada">Son proyectos de producción desarrollados en un entorno laboral formal. En ellos hay una variedad de diversas herramientas utilizadas respetando el modo de trabajo de cada entorno.<br></br>
                                  Estos sitios en su mayoria poseen paneles de admin en los cuales el cliente coloca o quita contenido a gusto. Son principalmente orientados al turismo teniendo en su poder motores de busqueda de vuelos, paquetes, booking, autos, excursiones y asistencia.<br></br>
                                  </p>
            <br></br>
            <Carouselcard work="profesional" />
            <br></br>
            <Title titulo="Proyectos personales" />
            <br></br>
            <p className="bajada">Son proyectos que fui desarrollando desde que comencé en el desarrollo web, en ellos experimenté y volqué los diversos conocimientos y herramientas que fuí incorporando, las cuales utilizo hoy en día.<br></br>
                                Interfaces de e-commerce, juegos, agendas, servicios de streaming, inconporaciones de APIs y más se encuentran disponibles en mi <a className="btn btn-dark mx-1" href="https://github.com/alexisarz" target="_blank"><b>GitHub</b></a> personal.
            </p>
            <br></br>
            <Carouselcard work="personal" />  
        </div>
    );
}


export default Work;