import React from "react";
import Card from "./card"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import dataworks from '../db/projects.json'

function Carouselcard(props){
    if(props.work === "profesional"){
        return(
            <div className="container-fluid">
            <OwlCarousel className='owl-theme' loop margin={10} items={(window.innerWidth <= 800) ? 1:(window.innerWidth <= 900) ? 2:3} autoplay={true} autoplayTimeout={2000} autoplaySpeed={false} autoplayHoverPause={true}>
                {dataworks.map((e) =>{
                    if(e.work === "profesional"){
                        return <div class='item'><Card key={e.id} img={e.img} name={e.name} tools={e.tools}  url={e.url} desc={e.desc}/></div>
                    } return null
                }
                  
                )}
                
            </OwlCarousel>
            </div>
        )
    }
    else if(props.work === "personal"){
        return(
            <div className="container-fluid">
            <OwlCarousel className='owl-theme' loop margin={10}  items={(window.innerWidth <= 800) ? 1:(window.innerWidth <= 900) ? 2:3} autoplay={true} autoplayTimeout={2000}  autoplaySpeed={false} autoplayHoverPause={true}>
                {dataworks.map((e) => {
                    if(e.work === "personal"){
                        return <div class='item'><Card key={e.id} img={e.img} name={e.name} tools={e.tools}  url={e.url} desc={e.desc}/></div>
                    } return null
                } 
                    
                )}
            </OwlCarousel>
            </div>
        )
    }

    else{
        return(
            <h3>No data</h3>
        )
    }
    
}

export default Carouselcard;