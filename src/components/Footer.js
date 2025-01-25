import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import linkedin from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github.svg";
import insta from "../assets/img/nav-icon3.svg";
import leetcode from "../assets/img/leetcode.svg";
import codeforces from "../assets/img/codeforces.svg";
import { More } from "./moreaboutme";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <More />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/anantha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/Anantha1605"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/anantha.05/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="Instagram" />
              </a>

              <a
                href="https://leetcode.com/u/Anantha_16/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={leetcode} alt="Leetcode" />
              </a>

              <a
                href="https://codeforces.com/profile/Anantha16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={codeforces} alt="Codeforces" />
              </a>
            </div>
            <p>Wanna know more? Feel free.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
