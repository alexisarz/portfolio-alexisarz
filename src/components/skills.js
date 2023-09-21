import React from "react";
import Title from "./common/title";
import Dotbar from "./common/dotbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faPhp, faCpanel, faReact, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';

function Skills(){
    var css = "dot blue"
    var react = "dot blue"
    var js = "dot yellow"
    var html = "dot orange"
    var cpanel = "dot orange"
    var ftp = "dot red"
    var bootstrap = "dot purple"
    var php = "dot purple"

    
    return(
        <div id="habilidades" className="skills_section">
            <div className="container">
            <Title titulo="Habilidades"/>
                <div className="row">

                    <div className="col-lg-6 col-xs-12 skill-info my-4 my-lg-auto">
                        <p className="info-section">
                            
                            Manejo sólido de HTML, CSS, BTSP, JS + Jquery y React.js. A su vez, utilización de templates engines para PHP como Smarty.<br></br>
                            Experiencia en manejo de PHP orientado al maquetado, variables y métodos. Configuración de sitios mediante PhpMyAdmin principalmente para la carga de tablas y archivos SQL, y Cpanel o Plesk para la creación de DB, DB Users y seteo de Cron Jobs, entre otras tareas.<br></br>
                            Habilidad sólida en FTP utilizando programas como FileZilla.<br></br>
                            Manejo y experiencia en Git, GitHub y GitHub Pages.

                        </p>
                    </div>
                    <div className="col-lg-6 col-xs-12 skill-list">
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <h1 className="me-3"><FontAwesomeIcon icon={faHtml5}/></h1>
                                        <div>
                                            <Dotbar stars={5} tool={html}/>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <h1 className="me-3"><FontAwesomeIcon icon={faCss3}/></h1>
                                        <div>
                                            <Dotbar stars={5} tool={css}/>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <h1 className="me-3"><FontAwesomeIcon icon={faJs}/></h1>
                                        <div>
                                            <Dotbar stars={5} tool={js}/>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <h1 className="me-3"><FontAwesomeIcon icon={faReact}/></h1>
                                        <div>
                                            <Dotbar stars={4} tool={react}/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <h1 className="me-3"><FontAwesomeIcon icon={faBootstrap}/></h1>
                                        <div>
                                            <Dotbar stars={5} tool={bootstrap}/>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <h1 className="me-3"><FontAwesomeIcon icon={faPhp}/></h1>
                                        <div>
                                            <Dotbar stars={2} tool={php}/>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <h1 className="me-3">ftp</h1>
                                        <div>
                                            <Dotbar stars={5} tool={ftp}/>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <h1 className="me-3"><FontAwesomeIcon icon={faCpanel}/></h1>
                                        <div >
                                            <Dotbar stars={4} tool={cpanel}/>
                                        </div>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                            
                    </div>
                    
                </div>
            
        </div>
        </div>
        
    )
}

export default Skills;