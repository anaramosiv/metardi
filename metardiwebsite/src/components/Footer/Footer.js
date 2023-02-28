import React from 'react'
import whatsapp from 'image/wa.svg';
import facebook from'image/facebook.svg';
import instagram from 'image/instagram.svg';
import mail from 'image/mail.svg';
import phone from 'image/phone.svg'
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer id="contact">
   
        <Container  fluid className="blackFooter">
        <h2>Contáctanos</h2>
            <Row id ='footerlogos'>
                
                <Col>
                    <a href="https://wa.me/5492615660798" target="_blank" rel="noreferrer">
                        <img 
                        src={whatsapp}
                        alt="Whatsapp logo"/>
                    </a>
                    <a href="https://www.instagram.com/metardimetardi/" target="_blank" rel="noreferrer">
                        <img 
                        src={instagram}
                        alt="Instagram"/>
                    </a>
                    <a href="https://www.facebook.com/people/Metardi-Metardi/100010294207431/?mibextid=LQQJ4d" target="_blank" rel="noreferrer">
                        <img 
                        src={facebook}
                        alt="Facebook"/>
                    </a>
            
                </Col>
            </Row>
            <Row>
            <p>Llámanos o escribenos en cualquier momento, con gusto te ayudaremos.</p>
            <Col className="logosF">
            <a href="mailto:metardisrl@gmail.com">
            <img src={mail}
                alt="mail"/>metardisrl@gmail.com</a>
            </Col>
            </Row>
            <Row className="pb-3">
            <Col className="logosF">
            <a href="https://wa.me/5492615660798">
            <img src={phone}
                alt="Teléfono"/>2615660798</a>
            </Col>
            </Row>
            <Row fluid className="pinkFooter" >
                <Col className ="Legal" >
                <p>@2023 Metardi - Todos los derechos reservados. Diseñado por TeamsCoderHouse</p>
                </Col>
            </Row>
        </Container>
     
    </footer>
  )
}

export default Footer