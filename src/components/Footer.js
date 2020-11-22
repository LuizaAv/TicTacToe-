import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Carousel';


function Footer(){
    return(
        <Footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content between p-3">
                    <Col className="p-0 d-flex justify-content-end" md={3} sm={12}>
                        Luiza\s Portfolio
                    </Col>
                    <Col className="p-0" md={3}>
                        This site was made by Luiza
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}

export default Footer