import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Certificates = () => {
  return (
    <section id="certificates" className="my-5">
      <Container>
        <h2 className="text-center mb-5">Qualification Certificates</h2>
        
        <Row className="gy-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src="/certificate1.jpg" />
              <Card.Body>
                {/* You can add titles or descriptions here */}
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src="/certificate2.jpg" />
              <Card.Body>
                {/* You can add titles or descriptions here */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
