import React from "react";

function Boton(props){

    
    return(
        <a href={props.href}><div className={(props.size === 'lg') ? 'boton col-lg-12 col-xs-12 shadow' : (props.size === 'md') ? 'boton col-lg-8 col-xs-12 shadow' : (props.size === 'sm') ? 'boton col-lg-6 col-xs-12 shadow' : 'boton'} >{props.titulo}</div></a>
    )
}

export default Boton;