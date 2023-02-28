import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about1 from 'image/about1.png'
import about2 from 'image/about2.png'
import dots from 'image/puntitos.svg'

const Quienes = () => {
  return (
    <section >
    <Container className='about' id ="quienesSomos">
        <Row>
            <Col sm={12} lg={6}>
                <img
                src={about1}
                alt = '...'
                className="img-fluid"
                />
            </Col>
            <Col sm={12} lg={6}>
                <h2>¿Quiénes Somos?</h2>   
                <p className="centerOnMobile">Somos fabricantes especializados en productos publicitarios textiles BANNERS FLY, BANDERAS y TOTEMS, con más de 7 años de experiencia.
                Comercializamos de manera minorista y mayorista.</p>
            </Col>
        </Row>
        <Row>
            <Col sm={12} lg={6} className="centerOnMobile">
            <img
                src={dots}
                alt = '...'
                className="img-fluid"
                />
            
            </Col>
        </Row>
        <Row>
            <Col sm={12} lg={6}>
                <h2>¿Qué hacemos?</h2>   
                <p className="centerOnMobile">Trabajamos en productos publicitarios textiles como recursos para el crecimiento de una marca y su posicionamiento. Aportando nuestro conocimiento y siendo conscientes de la relevancia que implica satisfacer las necesidades y expectativas de nuestros clientes.</p>
            </Col>
            <Col className='hideOnMobile' id="whatDo">
     
                <img
                src={about2}
                alt = '...'
                className="img-fluid"/>
                <img
                src={dots}
                alt = '...'
                className="img-fluid"
                />               
            </Col>
      </Row>
 
    </Container>
    </section>
  )
}

export default Quienes