import React from "react";
import Boton from './common/boton.js'



function Header(props){
    return(
        <div id="header" className="header d-flex">
            <video id="video"  className='videoheader' src="rombos3.webm" autoPlay loop muted />
            <div className="d-flex align-items-center position-absolute w-100 header-content ">
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-lg-5 col-xs-12  my-4 my-lg-auto">
                            <h1 className="titulo-header">{props.titulo}</h1>
                            <h5>FrontEnd Web Developer</h5>
                        </div>
                        <div className="col-md-4 col-sm-12 mx-sm-auto">
                            <Boton href="#about" size="sm" titulo="SOBRE MÍ"/>
                            <Boton href="#habilidades" size="sm" titulo="HABILIDADES"/>
                            <Boton href="#work" size="sm" titulo="MI TRABAJO"/>
                            <Boton href="#contact" size="sm" titulo="CONTACTO"/>
                        </div>

                    </div>
                    
                </div>
                
            </div>
        </div>
    )

    
}

export default Header;
