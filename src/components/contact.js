import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Contact(){
    return(
        <div id="contact" className="contact-section">
            <div className="container text-center">
                <h1><b>Contactate!</b></h1>
                <br></br>
                <br></br>
                <div className="red-icons d-flex justify-content-around">
                    <a href="https://wa.me/5491132086518" target="_blank"><FontAwesomeIcon className="red-icon" icon={faWhatsapp}/></a>
                    <a href="https://linkedin.com/in/alexis-ariel-zaccaria-34072620b" target="_blank"><FontAwesomeIcon className="red-icon" icon={faLinkedin}/></a>
                    <a href="mailto:zaccariaalexis96@gmail.com" target="_blank"><FontAwesomeIcon className="red-icon" icon={faEnvelope}/></a>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <a className="text-light" target="_blank" href="images/CV-ALEXIS-ZACCARIA-2023-24.pdf"><div className="cv">DESCARGA MI CV</div></a>
            </div>
        </div>
    )
}


export default Contact;
