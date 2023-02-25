import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import header1 from 'image/header1.jpg'
import header2 from 'image/header2.jpg'
import headerMobile1 from 'image/headerMobile1.jpg'
import headerMobile2 from 'image/headerMobile2.jpg'
import Cotizar from 'components/Buttons/Cotizar';



function Header() {
  return (
    <>
    <Container fluid className="g-0 hideOnMobile relativeParent" id="home">
     <Carousel>
      <Carousel.Item>
        <img
          id="d-block w-100"
          src={header1}
          alt="First slide"
          className="img-fluid"
        />
   
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="d-block w-100"
          src={header2}
          alt="Second slide"
          className="img-fluid"
        />
      </Carousel.Item>
  
    </Carousel>
    <div className="callToAction">
    <button className="cotizar2"> Solicita tu cotización </button>
    </div>

    </Container>
    <Container fluid className="g-0 hideOnDesk relativeparent" id="home">
 
     <Carousel>
       <Carousel.Item>
         <img
           id="d-block w-100"
           src={headerMobile1}
           alt="First slide"
           className="img-fluid"
         />
    
       </Carousel.Item>
       <Carousel.Item>
         <img
           id="d-block w-100"
           src={headerMobile2}
           alt="Second slide"
           className="img-fluid"
         />
       </Carousel.Item>
   
     </Carousel>
     <div className="callToActionMobile">
     <button className="cotizarMobile"> Solicita tu cotización </button>
     </div>
     </Container>
    
     </>
  );
}


export default Header;