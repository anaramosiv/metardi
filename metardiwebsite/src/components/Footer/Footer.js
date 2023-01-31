import React from 'react'
import whatsapp from 'image/wa.svg';
import facebook from'image/facebook.svg';
import instagram from 'image/instagram.svg';
import mail from 'image/mail.svg';
import phone from 'image/phone.svg'
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer>
        <h4>Contáctanos</h4>
        <Container>
            <Row id ='footerlogos'>
                
                <Col>
                    <img 
                        src={whatsapp}/>
                    <img 
                        src={instagram}/>
                    <img 
                        src={facebook}/>
                </Col>
               
            </Row>
            <Row>
            <p>Llámanos o escribenos en cualquier momento, con gusto te ayudaremos.</p>
            <p>metardisrl@gmail.com</p>
            <p>2615660798</p>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer