
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ImgGrande from './ImgGrande';
import ProductText from './ProductText';
import Thumbs from './Thumbs'
import DataProductsList from 'components/data/DataProductsList'
import Aplicaciones from './Aplicaciones';
import Includes from './Includes';
import Sizes from './Sizes';
import Cotizar from 'components/Buttons/Cotizar';


function ModalProducts(props) {
   
  const {id, tittle, alternativeText, description, thumbnails, applicationsInfo, moreInfo, sizeInfo} = DataProductsList[props.id -1];
  const [primaryImage, setPrimaryImage] =useState (thumbnails[0]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      
       </Modal.Header>
      <Modal.Body>
            <div>
                <Row className='bgGr'  id='prods'>
                    <Col xs={12} sm={12} md={2} lg={2}><Thumbs indice={props.id} primaryImage ={primaryImage} setPrimaryImage ={setPrimaryImage}/></Col>
                    <Col xs={12} md={12}  lg={5}><ImgGrande indice = {props.id} primaryImage ={primaryImage} setPrimaryImage ={setPrimaryImage}/></Col>
                    <Col xs={12} md={12}  lg={5}>
                    <ProductText  indice={props.id}/> 
                    <div className="cotizarCards">
                    <Cotizar/>
                    </div>
                    </Col>
                </Row>
                <Row id='details'>
                    <Col sm={12} lg={4}><Aplicaciones indice={props.id}/> </Col>
                    <Col sm={12} lg={4}><Includes indice={props.id}/></Col>
                    <Col sm={12} lg={4}><Sizes indice={props.id}/></Col>
                </Row>
            </div>
      </Modal.Body>
      <Modal.Footer>
        <Button id="closeButton" onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>

    </Modal>
  );
}

export default ModalProducts;

// render(<App />);