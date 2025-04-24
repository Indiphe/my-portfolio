import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Certificates = () => {
  return (
    <section id="certificates" className="my-5">
      <Container className="certificates-container" style={{ padding: '40px 20px', backgroundColor: 'rgb(219, 187, 6)' }}>
        <h2 className="section-title">Qualification Certificates</h2>
        
        <Row className="gy-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm certificate-card text-center">
              <Card.Link
                href="https://www.coursera.org/account/accomplishments/certificate/X9DFTASZF6Z8"
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
                href="https://courses.cognitiveclass.ai/certificates/7a96c48aa88e47c4af6574dd9e095298#"
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
                href="https://courses.cognitiveclass.ai/certificates/426cfc98e1624e4a81ee1edcf3e2c70d"
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
                href="https://courses.cognitiveclass.ai/certificates/7a96c48aa88e47c4af6574dd9e095298#"
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
                href="https://certificate.hack2skill.com/user/ssfibmparticipation/2024H2S10IBM-P001300"
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
                href="https://courses.cognitiveclass.ai/certificates/7a96c48aa88e47c4af6574dd9e095298#"
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
                href="https://www.shecodes.io/certificates/6d41d0488ab9256171f454c195a0f390?_gl=1*wf4p0k*_gcl_au*NTQxMDM3MTE4LjE3Mzk5NTUxNTI."
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
                href="https://www.shecodes.io/certificates/0c08bfd3c4349b9af4a3372af3b18097?_gl=1*rbx18o*_gcl_au*NTQxMDM3MTE4LjE3Mzk5NTUxNTI."
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
                href="https://www.shecodes.io/certificates/5bc9c026a7bd51d32c406fee00fd9ea0?_gl=1*1x6capy*_gcl_au*NTQxMDM3MTE4LjE3Mzk5NTUxNTI."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img variant="top" src="/ResponsiveWebDev.png" alt="Certificate" className="certificate-img" />
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
