import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import { Button } from 'react-bootstrap';
import Type from "./Type";

import i18n from '../../i18n'

function Home() {
  return (
  <div>
    <div className="home-button">
      <Button variant="primary" size="sm" href="/home/?lng=es">ES</Button>
      <br/><br/>
      <Button variant="primary" size="sm" href="/home/?lng=en">EN</Button>
    </div>
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">         
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              {i18n.t('home.hi-there')}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
              {i18n.t('home.i-am')}
                <strong className="text-info"> EMISAEL KISLER</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  </div>

  );
}

export default Home;
