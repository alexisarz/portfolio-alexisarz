import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


function GoUp() {
    // Mute del goUp
    const [muteGoUp, setmuteGoUp] = useState(false);
    window.addEventListener('scroll', () =>{
        if(window.scrollY > 200){
            return setmuteGoUp(true);
        }

        else{
            return setmuteGoUp(false)
        }
    })
    
    return (
        <a href="#header"><div className={`position-fixed rounded-circle bottom-0 end-0 d-flex justify-content-center align-items-center p-3 translate-middle goup ${muteGoUp === true ? "bg-dark" : "bg-light"}`} >
            <FontAwesomeIcon className={muteGoUp === true ? "text-light fs-2" : "text-muted fs-2"} icon={faChevronUp} />
        </div></a> 
        
    ) 
    
}

export default GoUp;