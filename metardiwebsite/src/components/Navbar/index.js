import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavBarcontent from './Nav';
import Logo from '../../image/Logo.png'



const NavBar = () =>  {
  return (
  <>
      <Navbar   id ="navBrand" >
        
        <Container fluid  id ="navBrand" className="d-flex justify-content-between">
        <Navbar.Brand href="#home" >
            <img 
              alt=""
              src={Logo}           
              className="d-inline-block align-top"
            />{' '}
       
          
          </Navbar.Brand>
        <button  > Solicita tu cotización

        </button>
        </Container>
      
    
      </Navbar>
   
      <NavBarcontent />
 
    </>
  );
}



export default NavBar;