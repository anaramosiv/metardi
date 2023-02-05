import React from 'react'
import { Button } from 'react-bootstrap';
import ModalProduct from './ModalProduct';

const VerMas = ({id}) => {
    const [modalShow, setModalShow] = React.useState(false);
    
  return (
    <>
      <Button id="moreButton" variant="primary" onClick={() => setModalShow(true)}>
        Ver más
      </Button>

      <ModalProduct
        id={id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
  
}

export default VerMas