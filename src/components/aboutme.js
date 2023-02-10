import React from "react";
import Title from "./common/title";

function About() {
    return (
        <div id="about" className="container">
            <Title titulo="Sobre mí" />
            <br></br>
            <p className="info-section">
                Soy Alexis Zaccaria, vivo en Buenos Aires, Argentina y me dedico al desarrollo frontend desde 2020. Principalmente trabajo utilizando React.js como framework, pero a medida que fui desarrollandome en el campo laboral a lo largo de este tiempo utilicé otras herramientas sobre todo orientadas a PHP.<br></br>
                Me considero una persona que hace énfasis en lo visual, por lo cual le doy relevancia a los efectos y transiciones que puedan hacer mas atractivo el UX sin dejar de lado la funcionalidad y el orden estructural del contenido. A su vez busco siempre la resolución efectiva de los problemas y errores que puedan surgir de una forma rápida.<br></br>
                Cada día me encuentro en constante aprendizaje, siendo conciente de que las herramientas evolucionan y nuevas van apareciendo. De esa manera voy expandiendo mi habilidad de trabajo, no solo en el frontend sino tambien en otras áreas complementarias.<br></br><br></br>
                <b>Un placer conocerte!</b> 
            </p>
        </div>
    )
}

export default About;