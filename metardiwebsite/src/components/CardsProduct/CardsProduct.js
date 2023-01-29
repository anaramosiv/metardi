import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProdTittle from 'components/data/ProdTittle';
import VerMas from 'components/ModalProduct/VerMas';
import { Container, Row, Col } from 'react-bootstrap';

const CardsProduct = () =>  {
  return (

    <Container fluid id='CardsProduct'>
        <Row>

      {ProdTittle.map((productos) =>{
          return (
            
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productos.img}/>
            <Card.Body>
              <Card.Title>{productos.tittle}</Card.Title>
            
              <VerMas id={productos.id}/>
            </Card.Body>
           </Card>
           </Col>
           
          )
        }
        )}
        </Row>
        </Container>
  );
}

export default CardsProduct;