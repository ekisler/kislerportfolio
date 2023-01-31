import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCert from "./ProjectCert";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import respon from "../../Assets/Projects/respon.png";
import nutri from "../../Assets/Projects/nutri.png";
import gallery from "../../Assets/Projects/gallery.png";
import scane from "../../Assets/Projects/scane.png";
import chat from "../../Assets/Projects/chat.png";
import darkmode from "../../Assets/Projects/darkmode.png";
import form from "../../Assets/Projects/form.png";
import csscolor from "../../Assets/Projects/csscolor.png";
import pick from "../../Assets/Projects/pick.png";
import boton from "../../Assets/Projects/boton.png";
import certif from "../../Assets/Projects/certif.png";
import certCommand from "../../Assets/Projects/certCommand.png";
import certHack from "../../Assets/Projects/certHack.png";
import { Button } from "react-bootstrap";

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
          <h1 className="project-heading">
          {i18n.t("projects.my")}{" "}
            <strong className="text-info">{i18n.t("projects.certificates-and-diplomas")} </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath={certif}
                isBlog={false}
                title={i18n.t("projects.soyhenry-certificate")}
                description={i18n.t("projects.soyhenry-Full-Stack-Developer-Certificate-a-photo-says-more-than-a-thousand-words")}
                demoLink="https://certificates.soyhenry.com/cert?id=ce050ad9-698b-4f8d-9134-97822529b6ea"
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCert
                imgPath={certHack}
                isBlog={false}
                title={i18n.t("projects.hackerrank-certificate")}
                description={i18n.t("projects.hackerRank-Certified-Solving-JavaScript-problems-a-photo-says-more-than-a-thousand-words")}
                demoLink="https://www.hackerrank.com/certificates/b7c0af0a42fd"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCert
                imgPath={certCommand}
                isBlog={false}
                title={i18n.t("projects.codecademy-certificate")}
                description={i18n.t("projects.Codecademy-Certificate-in-Linux-Command-Line-a-photo-says-more-than-a-thousand-words")}
                demoLink="https://www.codecademy.com/profiles/ekisler/certificates/c87ba0541f8be78bc2f4ba1128233f6f"
              />
            </Col>

            <h1 className="project-heading">
            {i18n.t("projects.my-recent")}{" "}
            <strong className="text-info">{i18n.t("projects.works")} </strong>
          </h1>
          <p style={{ color: "white" }}>
            {i18n.t("projects.here-are-a-few-projects-i-ve-worked-on-recently")}
          </p>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={darkmode}
                isBlog={false}
                title="React Dark Mode"
                description="Plantilla en React.js, Redux, HTML, CSS para realizar el Dark Mode en tus proyectos. Usalo como una guía experimental"
                ghLink="https://github.com/ekisler/ekdarklight"
                demoLink="https://ekdarklight.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chat}
                isBlog={false}
                title="ChatGPT3"
                description="Pregunta a la Inteligencia Artifical de OpenAI y te respondera de inmediato. Sin registrarte, solo entras y comienzas a interactuar con la AI"
                ghLink="https://github.com/ekisler/chatgpt"
                demoLink="https://chatgpt-ek.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={scane}
                isBlog={false}
                title="ScaneaMe"
                description={i18n.t(
                  "projects.api-for-clothing-sales-where-you-can-see-create-edit-and-delete-products-payment-gateway-and-image-management"
                )}
                ghLink="https://github.com/ekisler/scaneame"
                demoLink="https://scaneame.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Poke-Api"
                description={i18n.t(
                  "projects.api-to-search-the-Pokemons-from-pokeapi-co-where-you-can-create-edit-delete-and-combine-your-pokemons-with-the-ones-from-pokeapi-co"
                )}
                ghLink="https://github.com/ekisler/PI-Pokemon"
                demoLink="https://kisler-poke.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="React Portfolio"
                description={i18n.t(
                  "projects.Modern-portfolio-made-in-React-Node-js-express-to-make-the-best-presentation-to-potential-employers-Good-presence-is-important"
                )}
                ghLink="https://github.com/ekisler/portfolio"
                demoLink="https://kisler-portfolio.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Api-Movie"
                description={i18n.t(
                  "projects.Api-Movie-the-api-to-search-for-information-on-your-favorite-movie-Director-actors-year-of-creation-and-much-more-Find-the-movie-you-like-the-most-and-download-all-the-information-you-want"
                )}
                ghLink="https://github.com/ekisler/apimovie.github.io"
                demoLink="https://ekisler.github.io/apimovie.github.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leaf}
                isBlog={false}
                title="React Goal"
                description={i18n.t(
                  "projects.Now-you-can-write-your-goals-and-take-them-wherever-you-want-with-this-simple-app-you-can-register-and-write-your-goals-you-can-open-them-from-your-cell-phone-tablet-or-PC-Read-them-and-remember-them-wherever-you-are"
                )}
                ghLink="https://github.com/ekisler/newmern"
                demoLink="https://kisler-mern.herokuapp.com/login/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={respon}
                isBlog={false}
                title="Responsive"
                description={i18n.t(
                  "projects.Responsive-Web-with-HTML-CSS-and-FlexBox"
                )}
                ghLink="https://github.com/ekisler/responsive.github.io"
                demoLink="https://ekisler.github.io/responsive.github.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={suicide}
                isBlog={false}
                title="Cafe-Menu"
                description={i18n.t(
                  "projects.We-design-the-menu-for-your-cafe-ice-cream-parlor-bar-restaurant-whatever-you-need-we-adapt-to-your-requirement-We-are-ready-to-meet-your-request-whenever-you-want-from-something-simple-to-the-most-complex-We-re-at-your-ervice"
                )}
                ghLink="https://github.com/ekisler/menucafe.github.io"
                demoLink="https://ekisler.github.io/menucafe.github.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={emotion}
                isBlog={false}
                title={i18n.t(
                  "projects.Portfolio-Made-in-HTML-CSS-and-JavaScript"
                )}
                description={i18n.t(
                  "projects.Portfolio-made-in-HTML-CSS-and-JavaScript-it-is-important-to-have-all-the-projects-carried-out-as-a-web-developer-in-one-place-so-that-future-employers-can-see-them-and-value-your-work-Every-sowing-bears-fruit"
                )}
                ghLink="https://github.com/ekisler/ekisler.github.io"
                demoLink="https://ekisler.github.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={nutri}
                isBlog={false}
                title="Sticker Nutri Farm"
                description="Sticker Nutri Farm"
                ghLink="https://github.com/ekisler/nutrition.github.io"
                demoLink="https://ekisler.github.io/nutrition.github.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={form}
                isBlog={false}
                title="Formularios"
                description="Diesño de Formularios en HTML, CSS para cualquier uso en cualquier proyecto incluso de React y otras bibliotecas"
                ghLink="https://github.com/ekisler/form.github.io"
                demoLink="https://ekisler.github.io/form.github.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gallery}
                isBlog={false}
                title="PhotoGallery"
                description="Galeria de fotos realizado en HTML y CSS, ejemplo sencillo de práctica básica"
                ghLink="https://github.com/ekisler/photogallery.github.io"
                demoLink="https://ekisler.github.io/photogallery.github.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={csscolor}
                isBlog={false}
                title="CSS Colors Markers"
                description="CSS Colors Markers, agrega color a tus páginas Web con CSS puro, aquí tienes una muestra de lo que puedes hacer"
                ghLink="https://github.com/ekisler/css-colors-market.github.io"
                demoLink="https://ekisler.github.io/css-colors-market.github.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={pick}
                isBlog={false}
                title="Pick Paleta de Colores"
                description="Color Pick es una herramienta útil para seleccionar colores de forma rápida."
                ghLink=""
                demoLink="https://kisler-color.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={boton}
                isBlog={false}
                title="Botones Animados"
                description="Crea botones animados con CSS y HTML. Aprende a usar transiciones, transformaciones y animaciones para darles vida a tus botones. ¡Aprende a crear botones animados!"
                ghLink="https://github.com/ekisler/buttons.github.io"
                demoLink="https://ekisler.github.io/buttons.github.io/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;
