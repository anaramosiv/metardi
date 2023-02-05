import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about1 from 'image/about1.png'
import about2 from 'image/about2.png'

const Quienes = () => {
  return (
    <section >
    <Container className='about'>
        <Row>
            <Col sm={12} md={6}>
                <img
                src={about1}
                alt = '...'/>
            </Col>
            <Col sm={12} md={6}>
                <h3>¿Quiénes Somos?</h3>   
                <p>Somos fabricantes especializados en productos publicitarios textiles BANNERS FLY, BANDERAS y TOTEMS, con más de 7 años de experiencia.
                Comercializamos de manera minorista y mayorista.</p>
            </Col>
        </Row>
        <Row>
            <Col sm={12} md={6}>
            <p className = 'puntitos'>............................................................................</p>
            
            </Col>
        </Row>
        <Row>
            <Col sm={12} md={6}>
                <h3>¿Qué hacemos?</h3>   
                <p>Trabajamos en productos publicitarios textiles como recursos para el crecimiento de una marca y su posicionamiento. Aportando nuestro conocimiento y siendo conscientes de la relevancia que implica satisfacer las necesidades y expectativas de nuestros clientes.</p>
            </Col>
            <Col className='hideOnMobile'>
     
                <img
                src={about2}
                alt = '...'/>
            </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Quienes