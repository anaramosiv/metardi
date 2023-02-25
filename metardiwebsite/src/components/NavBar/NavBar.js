import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from 'image/Logo.png'
import Cotizar from 'components/Buttons/Cotizar';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg"  sticky="top" className="py-0 test">
      <Container  fluid id='bloque' className="position-relative g-0">
        <div className='local bgBrand  local w-100' >
          <Row>
            <Col >
        <Navbar.Brand href="#home" id ="navBrand">
        <img 
              alt=""
              src={Logo}           
              className="d-inline-block align-top" 
            />
        </Navbar.Brand>
        </Col>
        <Col className= 'd-flex justify-content-lg-center justify-content-sm-start'>
        <Cotizar />
    
       
        </Col>
        </Row>
        </div>
    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="position-absolute top-0 end-0" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
     
          <Nav className="mx-auto d-flex justify-content-around local w-100 font500" id="navElements">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#quienesSomos">Quiénes Somos</Nav.Link>
            <Nav.Link href="#CardsProduct">Productos</Nav.Link>
            <Nav.Link href="#multiSlide">Experiencia</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            
          </Nav>
        
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

export default NavBar;