import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Certificates = () => {
  return (
    <section id="certificates" className="my-5">
      <Container className="certificates-container" style={{ padding: '40px 20px', backgroundColor: 'transparent', scrollMarginTop: '80px', paddingTop: '80px' }}>
        <h2 className="section-title">Certificates</h2>
        
        <Row className="gy-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm certificate-card text-center">
              <Card.Link
                href="\My certificates\Cousera\NodeJs.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src="/nodecert.png" alt="Certificate" className="certificate-img" />
              </Card.Link>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm certificate-card">
              <Card.Link
                href="\My certificates\Shecodes\ResponsiveWebDev.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src="/ResponsiveWebDev.png" alt="Certificate" className="certificate-img" />
              </Card.Link>
            </Card>
          </Col>



          <Col md={4}>
            <Card className="h-100 shadow-sm certificate-card">
              <Card.Link
                href="\My certificates\IBM\Hack2skill-Certificate.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src="/IBMZ_Datathon.png" alt="Certificate" className="certificate-img" />
              </Card.Link>
            </Card>
          </Col>

    
        </Row>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <a
    href="https://www.linkedin.com/in/indiphe-nondlazi/details/certifications/"
    target="_blank"
    rel="noopener noreferrer"

  className="btn btn-outline-dark me-3 custom-btn"
  id='custom-btn'
  >
    View more on LinkedIn
  </a>
  </div>
      </Container>

 
    </section>
    
  );
};

export default Certificates;
