
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ImgGrande from './ImgGrande';
import ProductText from './ProductText';
import Thumbs from './Thumbs'
import DataProductsList from 'components/data/DataProductsList'


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
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading {props.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <div>
                <Row>
                    <Col><Thumbs indice={props.id} primaryImage ={primaryImage} setPrimaryImage ={setPrimaryImage}/></Col>
                    <Col><ImgGrande indice = {props.id} primaryImage ={primaryImage} setPrimaryImage ={setPrimaryImage}/></Col>
                    <Col>
                    <ProductText indice={props.id}/> 
                    </Col>
                </Row>
                <Row>
                    <Col>Aplicaciones</Col>
                    <Col>Que incluye</Col>
                    <Col>Tamaños</Col>
                </Row>
            </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
  );
}

export default ModalProducts;

// render(<App />);