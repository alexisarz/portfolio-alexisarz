
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
import {faCircle as farCircle} from '@fortawesome/free-regular-svg-icons';


function Dotbar(props){
    
    if(props.stars === 5){
        return(
            <div className="star">
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
            </div>
        )
    }

    else if(props.stars === 4){
        return(
            <div className="star">
              
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={`${props.tool} circle`} icon={farCircle}/>
                
            </div>
        )
    }

    else if(props.stars === 3){
        return(
            <div className="star">
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={`${props.tool} circle`} icon={farCircle}/>
                <FontAwesomeIcon className={`${props.tool} circle`} icon={farCircle}/>
            </div>
        )
    }

    else if(props.stars === 2){
        return(
            <div className="star">
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={`${props.tool} circle`} icon={farCircle}/>
                <FontAwesomeIcon className={`${props.tool} circle`} icon={farCircle}/>
                <FontAwesomeIcon className={`${props.tool} circle`} icon={farCircle}/>
            </div>
        )
    }
    
    else if(props.stars === 1){
        return(
            <div className="star">
                <FontAwesomeIcon className={props.tool} icon={fasCircle}/>
                <FontAwesomeIcon className={`${props.tool} circle`} icon={farCircle}/>
                <FontAwesomeIcon className={`${props.tool} circle`} icon={farCircle}/>
                <FontAwesomeIcon className={`${props.tool} circle`} icon={farCircle}/>
                <FontAwesomeIcon className={`${props.tool} circle`} icon={farCircle}/>
            </div>
        )
    }
    
}

export default Dotbar;