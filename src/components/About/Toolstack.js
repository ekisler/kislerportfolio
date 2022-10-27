import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiChrome,
  DiTerminal,
  DiResponsive,
} from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiGithub,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Linux</h6>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Windows</h6>
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h6 className="text-info">Chrome</h6>
        <DiChrome />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h6 className="text-info">Terminal</h6>
        <DiTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h6 className="text-info">Visualstudiocode</h6>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h6 className="text-info">Postman</h6>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h6 className="text-info">Vercel</h6>
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h6 className="text-info">Heroku</h6>
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h6 className="text-info">Github</h6>
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h6 className="text-info">Responsive</h6>
        <DiResponsive />
      </Col>
    </Row>
  );
}

export default Toolstack;
