import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ProjectList from "../ProjectList";
import ProjectCert from "./ProjectCert";
import Particle from "../Particle";
import i18n from "../../i18n";

function Projects() {
  return (
    <div>
      <Container fluid className="project-section">
        <div className="about-button">
          <Button
            className="boton-languaje"
            variant="primary"
            size="sm"
            href="/project/?lng=es"
          >
            ES
          </Button>
          <br />
          <br />
          <Button
            className="boton-languaje"
            variant="primary"
            size="sm"
            href="/project/?lng=en"
          >
            EN
          </Button>
        </div>
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading">
              {i18n.t("projects.my-recent")}{" "}
              <strong className="text-info">{i18n.t("projects.works")} </strong>
            </h1>
            <p style={{ color: "white" }}>
              {i18n.t(
                "projects.here-are-a-few-projects-i-ve-worked-on-recently"
              )}
            </p>
            <>
              <ProjectList />
            </>
            <h1 className="project-heading">
              {i18n.t("projects.my")}{" "}
              <strong className="text-info">
                {i18n.t("projects.certificates-and-diplomas")}{" "}
              </strong>
            </h1>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1681221076/c4sgrqzl5ddozvltqzhe.png"
                isBlog={false}
                title="Backend Developer and APIs"
                description="Certificado de Desarrollo Backend con Node.js y Express.js de FreeCodeCamp"
                demoLink="https://www.freecodecamp.org/espanol/certification/EmiDev/back-end-development-and-apis"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1681222431/ccifcom5kdx711xlgjhx.png"
                isBlog={false}
                title="JavaScript Algorithms and Data"
                description="Certificado de JavaScript Algorithms and Data de FreeCodeCamp"
                demoLink="https://www.freecodecamp.org/espanol/certification/EmiDev/javascript-algorithms-and-data-structures"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1681223065/tiehcjmhjcxkkc39sbdq.png"
                isBlog={false}
                title="Frontend Development Libraries"
                description="Certificado de Frontend Development Libraries de FreeCodeCamp"
                demoLink="https://www.freecodecamp.org/certification/EmiDev/front-end-development-libraries"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1681223541/kuec66e0xuonwygouv76.png"
                isBlog={false}
                title="Responsive Web Design"
                description="Certificado de Responsive Web Design de FreeCodeCamp"
                demoLink="https://www.freecodecamp.org/certification/EmiDev/responsive-web-design"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1681224914/ntdb7vmxmeko2u4yonuq.jpg"
                isBlog={false}
                title="Desarrollo de Software"
                description="Introducción a las Habilidades Profesionales en el Desarrollo de Software Por Microsoft y Linkedin"
                demoLink="https://www.linkedin.com/learning/certificates/30081ff515080d83f3fa8e7f2d412eddce7745d643b3c79119cb82a11a377ad2"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675189918/bw07wvbtoiog3choi8ic.png"
                isBlog={false}
                title={i18n.t("projects.soyhenry-certificate")}
                description={i18n.t(
                  "projects.soyhenry-Full-Stack-Developer-Certificate-a-photo-says-more-than-a-thousand-words"
                )}
                demoLink="https://certificates.soyhenry.com/cert?id=ce050ad9-698b-4f8d-9134-97822529b6ea"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675190334/kes3wzclknaehythrj2x.png"
                isBlog={false}
                title={i18n.t("projects.hackerrank-certificate")}
                description={i18n.t(
                  "projects.hackerRank-Certified-Solving-JavaScript-problems-a-photo-says-more-than-a-thousand-words"
                )}
                demoLink="https://www.hackerrank.com/certificates/b7c0af0a42fd"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675190734/g9kubbq7qjdmhwrx08ry.png"
                isBlog={false}
                title={i18n.t("projects.codecademy-certificate")}
                description={i18n.t(
                  "projects.Codecademy-Certificate-in-Linux-Command-Line-a-photo-says-more-than-a-thousand-words"
                )}
                demoLink="https://www.codecademy.com/profiles/ekisler/certificates/c87ba0541f8be78bc2f4ba1128233f6f"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675250109/xx3wfpnfmh18twpphazo.jpg"
                isBlog={false}
                title={i18n.t("projects.mobile-apps-programming")}
                description={i18n.t(
                  "projects.mobile-app-programming-course-held-at-the-complutense-university-of-Madrid"
                )}
                demoLink="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675250109/xx3wfpnfmh18twpphazo.jpg"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675251471/hjmiwf2oyeyf5e2qyfjf.jpg"
                isBlog={false}
                title={i18n.t("projects.digital-marketing")}
                description={i18n.t(
                  "projects.Basic-Digital-Marketing-Course-held-at-Interactive-Advertising-Bureau"
                )}
                demoLink="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675251471/hjmiwf2oyeyf5e2qyfjf.jpg"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675251043/vehgmez7dzw8mnbmxanl.jpg"
                isBlog={false}
                title={i18n.t("projects.introduction-to-Web-Development")}
                description={i18n.t(
                  "projects.Introduction-to-Web-Development-Course-includes-Web-History-Functioning-Web-Structure-Publication-Correct-Web"
                )}
                demoLink="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675251043/vehgmez7dzw8mnbmxanl.jpg"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675252142/kaotbtvqyfojj60soy64.jpg"
                isBlog={false}
                title={i18n.t("projects.web-analytics")}
                description={i18n.t(
                  "projects.Web-Analytics-Course-held-at-School-of-Industrial-Organization"
                )}
                demoLink="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675252142/kaotbtvqyfojj60soy64.jpg"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675252506/h1dyuwxawc0j0plesnpg.jpg"
                isBlog={false}
                title={i18n.t("projects.ipv6-connections")}
                description={i18n.t(
                  "projects.Certification-in-IPV6-Connections-carried-out-at-Hurricane-Electric"
                )}
                demoLink="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675252506/h1dyuwxawc0j0plesnpg.jpg"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;
