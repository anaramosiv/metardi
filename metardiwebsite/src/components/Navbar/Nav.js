import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarcontent = () =>  {
  return (
    <>
 
      <Nav collapseOnSelect expand="lg" className="justify-content-around" id="navElements" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Quiénes somos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Productos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Experiencia</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Contacto</Nav.Link>
        </Nav.Item>
      
      </Nav>
       
    </>
  );
}

export default NavBarcontent;