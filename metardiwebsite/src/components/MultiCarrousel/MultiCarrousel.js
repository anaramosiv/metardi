import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarrouselData from 'components/data/CarrouselData';
import { Container } from 'react-bootstrap';

const responsive = {



    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 799, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };


const MultiCarrousel = () => {
    
  return (
    <section id='multiSlide'>
      <h2 className="tCenter"> Nuestros Trabajos</h2>
      <Container>
      
          <Carousel responsive={responsive}  infinite={true}>
    
        {CarrouselData.map((imgSlide)=>{
            return(
               
                <img src={imgSlide}
                    alt ="..."
                />
             
            )
        })}

       
  </Carousel>
  </Container>
  </section>

  )
}

export default MultiCarrousel