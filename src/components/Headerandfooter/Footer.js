import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#12233c', color: '#fff' }}>
      <Container className="py-3" style={{ maxWidth: '800px' }}>
        <Row className="justify-content-between align-items-center">
          <Col sm={6}>
            <h5>Blogify</h5>
            <p>We are a company that specializes in creating high-quality websites and web applications for businesses and individuals.</p>
          </Col>
          <Col sm={3}>
            <h5>Sources</h5>
            <ul className="list-unstyled">
              <li><a href="https://newsapi.org/">NewsAPI </a></li>
              <li><a href="https://coolors.co/">coolors</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </Container>
    </footer>
  );
}
