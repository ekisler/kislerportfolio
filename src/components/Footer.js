import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import i18n from '../i18n';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{i18n.t('footer.designed-and-developed-by')}<span style={{ color: "rgb(2, 217, 255)" }}> EK</span></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright<span style={{ color: "rgb(2, 217, 255)"}}> ©</span> {year} <span style={{ color: "rgb(2, 217, 255)"}}> EK</span></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ekisler"
                style={{ color:"rgb(2, 217, 255)" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/ekracing"
                style={{ color:"rgb(2, 217, 255)" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/emisael-kisler-fullstack/"
                style={{ color: "rgb(2, 217, 255)" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/kisler_tecnologia/"
                style={{ color: "rgb(2, 217, 255)" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
