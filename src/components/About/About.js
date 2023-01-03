import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { Button } from 'react-bootstrap';
import i18n from '../../i18n'

function About() {
  return (
    <div>
    
    <Container fluid className="about-section">
      <div className="about-button">
      <Button variant="primary" size="sm" href="/about/?lng=es">ES</Button>
      <br/><br/>
      <Button variant="primary" size="sm" href="/about/?lng=en">EN</Button>
    </div>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            {i18n.t('about.know-Who')} <strong className="green">{i18n.t('about.i-am')}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
        {i18n.t('about.professional')} <strong className="purple">{i18n.t('about.skillset')} </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{i18n.t('about.tools')}</strong> {i18n.t('about.use')}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
    </div>
  );
}

export default About;
