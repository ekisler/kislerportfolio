import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { Button } from 'react-bootstrap';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import myImg from "../../Assets/avatar.svg";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
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
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            {i18n.t('home.let-me')} <span className="text-info"> {i18n.t('home.introduce')} </span> {i18n.t('home.myself')}
            </h1>
            <p className="home-about-body">
            {i18n.t('home.i-fell-in-love-with-programming-and-i-have-at-least-learnt')}
            {i18n.t('home.something-i-think')} 🤷‍♂️
              <br />
              <br />{i18n.t('home.I-am-fluent-in-classics-like')}
              <i>
                <b className="text-info">Javascript, React, Node.js, Express, HTML, CSS, Git, GitHub, JWT, Auth0, Sequelize, MongoDB, Vercel, Netlify. </b>
              </i>
              <br />
              <br />
              {i18n.t('home.My-field-of-Interest-are-building-new')} &nbsp;
              <i>
                <b className="text-info">{i18n.t('home.Web-Technologies-and-Products')} </b> {i18n.t('home.and-also-in-areas-related-to')}{" "}
                <b className="text-info">
                {i18n.t('home.Deep-Learning-and-Natural-Launguage-Processing')}
                </b>
              </i>
              <br />
              <br />
              {i18n.t('home.Whenever-possible-I-apply-my-passion-for-developing-products-with')}
               <b className="text-info"> Node.js</b> {i18n.t('home.and')}
              <i>
                <b className="text-info">
                  {" "}
                  {i18n.t('home.Modern-Javascript-Library-and-Frameworks')}
                </b>
              </i>
              &nbsp; {i18n.t('home.like')}
              <i>
                <b className="text-info"> React.js {i18n.t('home.and')} Redux.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
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
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{i18n.t('home.FIND-ME-ON')}</h1>
            <p>
            {i18n.t('home.Feel-free-to')} <span className="text-info">{i18n.t('home.connect')} </span>{i18n.t('home.with-me')}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ekisler"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour-info  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ekracing"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour-info home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/emisael-kisler-fullstack/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour-info  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kisler_tecnologia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour-info home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default About;
