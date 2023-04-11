import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCert from "./ProjectCert";
import Particle from "../Particle";
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
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675192075/t7r5cdu2vazub9u2s7b3.png"
                isBlog={false}
                title="EK Cloudinary"
                description={i18n.t(
                  "projects.Upload-your-images-and-videos-and-keep-them-safe-using-the-Cloudinary-API-together-with-the-React-library"
                )}
                ghLink="https://github.com/ekisler/ek-cloudinary"
                demoLink="https://ek-cloudinary.vercel.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675188819/fib0nmv2kkm8irolklud.png"
                isBlog={false}
                title="EK Auth-0"
                description={i18n.t(
                  "projects.Making-your-site-have-the-best-authentication-is-a-great-idea-Use-the-Auth-0-API-in-your-React-projects"
                )}
                ghLink="https://github.com/ekisler/ek-auth0"
                demoLink="https://ek-auth0.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675192215/eikhqbxbpt46cdld25bi.png"
                isBlog={false}
                title={i18n.t("projects.react-dark-mode")}
                description={i18n.t(
                  "projects.template-in-React-Redux-HTML-CSS-to-perform-the-Dark-Mode-in-your-projects-Use-it-as-an-experimental-guide"
                )}
                ghLink="https://github.com/ekisler/ekdarklight"
                demoLink="https://ekdarklight.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675192301/a1qn5u0eopio4os8zfzn.png"
                isBlog={false}
                title="ChatGPT3"
                description={i18n.t(
                  "projects.Ask-OpenAI-Artificial-Intelligence-and-they-will-answer-you-immediately-Without-registering-you-just-go-in-and-start-interacting-with-the-AI"
                )}
                ghLink="https://github.com/ekisler/chatgpt"
                demoLink="https://chatgpt-ek.vercel.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675192378/nnjvp8ayf4ooy243nfy6.png"
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
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675192484/bmzbuq97x36jion1gbts.png"
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
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675192607/mraytgshxijhn54ky0zj.png"
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
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675192738/zr0l5fgibihmnpudpguu.png"
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
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675192873/ygesx1qe7pzey1w7a4rm.png"
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
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675192995/v9rk9fam870ff98jycjx.png"
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
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675193142/ekqa18cebuxfqk5gbhbw.png"
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
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675193219/wwwvfqiuptoq1r4ifpsu.png"
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
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675193305/edclwvzijpfcuamum236.png"
                isBlog={false}
                title="Sticker Nutri Farm"
                description="Sticker Nutri Farm"
                ghLink="https://github.com/ekisler/nutrition.github.io"
                demoLink="https://ekisler.github.io/nutrition.github.io/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675193369/fucggyxqqaoyzwgikkct.png"
                isBlog={false}
                title={i18n.t("projects.form")}
                description={i18n.t(
                  "projects.design-of-Forms-in-HTML-CSS-for-any-use-in-any-project-including-React-nd-other-libraries"
                )}
                ghLink="https://github.com/ekisler/form.github.io"
                demoLink="https://ekisler.github.io/form.github.io/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675193443/uncxsl9aroijtosphjv9.png"
                isBlog={false}
                title={i18n.t("projects.photo-gallery")}
                description={i18n.t(
                  "projects.photo-gallery-made-in-HTML-and-CSS-simple-example-of-basic-practice"
                )}
                ghLink="https://github.com/ekisler/photogallery.github.io"
                demoLink="https://ekisler.github.io/photogallery.github.io/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675193522/lczrddgt9udhy1qqdkgr.png"
                isBlog={false}
                title={i18n.t("projects.css-colors-markers")}
                description={i18n.t(
                  "projects.css-colors-markers-add-color-to-your-Web-pages-with-pure-css-here-is-a-sample-of-what-you-can-do"
                )}
                ghLink="https://github.com/ekisler/css-colors-market.github.io"
                demoLink="https://ekisler.github.io/css-colors-market.github.io/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675193588/nmwak0nwwoydinso43az.png"
                isBlog={false}
                title={i18n.t("projects.pick-color-palette")}
                description={i18n.t(
                  "projects.color-pick-is-a-useful-tool-to-select-colors-quickly"
                )}
                ghLink=""
                demoLink="https://kisler-color.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="https://res.cloudinary.com/dxfksb8ua/image/upload/v1675193643/vdgrtbsefnu4rehumjgn.png"
                isBlog={false}
                title={i18n.t("projects.animated-buttons")}
                description={i18n.t(
                  "projects.Create-animated-buttons-with-CSS-and-HTML-Learn-how-to-use-transitions-transformations-and-animations-to-bring-your-buttons-to-life-Learn-how-to-create-animated-buttons"
                )}
                ghLink="https://github.com/ekisler/buttons.github.io"
                demoLink="https://ekisler.github.io/buttons.github.io/"
              />
            </Col>
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
