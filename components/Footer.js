import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <Footer className="Footer">
      <Container>
        <Row>
          <Col>
            <div className="Footer-Credit">
              {/* <Image fluid src="/static/google-logo.png" alt="Powered by Google" /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
}

export default Footer;