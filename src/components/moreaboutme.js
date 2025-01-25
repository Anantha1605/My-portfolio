import { Col, Row } from "react-bootstrap";
import camera from "../assets/img/camera.svg";
export const More = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              And guess what?<br></br> I'm a Photographer too!
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <form>
              <div className="new-email-bx">
                <a
                  href="https://www.instagram.com/framesbyanantha/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={camera} alt="Camera" />
                </a>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
