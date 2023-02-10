import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faPhp, faReact, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';

function Card(props){
    var background = props.img
    return(
        <div className="card col-lg-12 col-xs-12">
            <div className="thumbnail" style={{backgroundImage: `url(${background})`}}></div>
           
            <div className="card-info">
                <h4 className="text-center">{props.name}</h4>
                <p className="text-center"> 
                    {(props.tools.html === true)? <FontAwesomeIcon className="tool-icon" icon={faHtml5}/> : <i className="d-none"></i>}
                    {(props.tools.css === true)? <FontAwesomeIcon className="tool-icon" icon={faCss3}/> : <i className="d-none"></i>}
                    {(props.tools.js === true)? <FontAwesomeIcon className="tool-icon" icon={faJs}/> : <i className="d-none"></i>}
                    {(props.tools.php === true)? <FontAwesomeIcon className="tool-icon" icon={faPhp}/> : <i className="d-none"></i>}
                    {(props.tools.react === true)? <FontAwesomeIcon className="tool-icon" icon={faReact}/> : <i className="d-none"></i>}
                    {(props.tools.bootstrap === true)? <FontAwesomeIcon className="tool-icon" icon={faBootstrap}/> : <i className="d-none"></i>}
                    {(props.tools.smarty === true)? <FontAwesomeIcon className="tool-icon" icon={faLightbulb}/> : <i className="d-none"></i>}
                </p>
                <p className="desc-card">{props.desc}</p>
                <br></br>
                <a href={props.url} target="_blank" rel="noreferrer"><div className="ver-sitio text-center">Ver Sitio</div></a>
            </div>
        </div>
    )
}

export default Card;