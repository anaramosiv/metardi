import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProdTittle from 'components/data/ProdTittle';
import VerMas from 'components/ModalProduct/VerMas';
import { Container, Row, Col } from 'react-bootstrap';

const CardsProduct = () =>  {
  return (

    <Container id='CardsProduct'>
        <Row>
          <h2 className="tCenter">Conoce nuestros productos</h2>

      {ProdTittle.map((productos) =>{
          return (
            
                        
            <Col sm={12} md={4}>
            <Card>
            <Card.Img variant="top" src={productos.img}/>
            <Card.Body id='cardsD'>
              <Card.Title className='toUpper'>{productos.tittle}</Card.Title>
            
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