import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import header1 from 'image/header1.png'
import header2 from 'image/header2.png'
import header3 from 'image/header3.png'


function Header() {
  return (
    <Container fluid className="g-0">
     <Carousel>
      <Carousel.Item>
        <img
          id="d-block w-100"
          src={header1}
          alt="First slide"
        />
   
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="d-block w-100"
          src={header2}
          alt="Second slide"
        />

   
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="d-block w-100"
          src={header3}
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}


export default Header;