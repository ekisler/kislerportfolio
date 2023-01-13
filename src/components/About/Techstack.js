import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiArduino,
  SiFirebase,
  SiNextdotjs,
  SiSequelize,
  SiHtml5,
  SiCss3,
  SiRedux,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Javascript</h6>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Nodejs</h6>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">React</h6>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Redux</h6>
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Html5</h6>
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Css3</h6>
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Mongodb</h6>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Sequelize</h6>
        <SiSequelize />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Nextjs</h6>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Git</h6>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Firebase</h6>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Python</h6>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">CPlusPlus</h6>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h6 className="text-info">Arduino</h6>
        <SiArduino />
      </Col>
    </Row>
  );
}

export default Techstack;
