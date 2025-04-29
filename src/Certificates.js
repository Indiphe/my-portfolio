import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Certificates = () => {
  return (
    <section id="certificates" className="my-5">
      <Container className="certificates-container" style={{ padding: '40px 20px', backgroundColor: 'rgb(219, 187, 6)' }}>
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
                href="\My certificates\Cousera\PythonCert.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src="/pythoncert.png" alt="Certificate" className="certificate-img" />
              </Card.Link>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm certificate-card text-center">
              <Card.Link
                href="\My certificates\IBM\DataSC101.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src="/DataSc101.png" alt="Certificate" className="certificate-img" />
              </Card.Link>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm certificate-card">
              <Card.Link
                href="\My certificates\IBM\DataScienceTools.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src="/DataScTools.png" alt="Certificate" className="certificate-img" />
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

          <Col md={4}>
            <Card className="h-100 shadow-sm certificate-card">
              <Card.Link
                href="\My certificates\Cousera\ReactBasics.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src="/ReactCert.png" alt="Certificate" className="certificate-img" />
              </Card.Link>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm certificate-card">
              <Card.Link
                href="\My certificates\Shecodes\Web_Developmet.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src="/Web_Developmet.png" alt="Certificate" className="certificate-img" />
              </Card.Link>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm certificate-card">
              <Card.Link
                href="https://www.credly.com/badges/65d1992c-861c-40a0-bc99-eb84addfc82f/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src="/WebDevfundamentals.png" alt="Certificate" className="certificate-img" />
              </Card.Link>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm certificate-card">
              <Card.Link
                href="\My certificates\Shecodes\Shecodes_Basics.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src="/Shecodes_Basics.png" alt="Certificate" className="certificate-img" />
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
                href="\Indiphe_Nondlazi_Microsoft_Certificate.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src="/Indiphe_Nondlazi_Microsoft_Certificate.png" alt="Certificate" className="certificate-img" />
              </Card.Link>
            </Card>
          </Col>
        </Row>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <a
    href="https://www.linkedin.com/in/indiphe-nondlazi/details/certifications/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline-dark"
  >
    View more on LinkedIn
  </a>
  </div>
      </Container>

 
    </section>
    
  );
};

export default Certificates;
