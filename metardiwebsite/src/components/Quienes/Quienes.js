import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about1 from 'image/about1.png'
import about2 from 'image/about2.png'

const Quienes = () => {
  return (
    <section className='about'>
    <Container>
        <Row>
            <Col>
                <img
                src={about1}
                alt = '...'/>
            </Col>
            <Col>
                <h3>¿Quiénes Somos?</h3>   
                <p>Somos fabricantes especializados en productos publicitarios textiles BANNERS FLY, BANDERAS y TOTEMS, con más de 7 años de experiencia.
                Comercializamos de manera minorista y mayorista.</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <p className = 'puntitos'>............................................................................</p>
            
            </Col>
        </Row>
        <Row>
            <Col>
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