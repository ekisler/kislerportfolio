import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function projectCards({ project }) {
  return (
    <div className="card-container">
      <Card className="project-card-view">
        <Card.Body className="custom-card-body">
          <Card.Title>{project.title}</Card.Title>
          <Card.Img variant="top" src={project.imgPath} alt="card-img" />
          <Card.Text style={{ textAlign: "justify" }}>
            {project.description}
          </Card.Text>
          <Button variant="info" href={project.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {project.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}
          {!project.isBlog && project.demoLink && (
            <Button
              variant="info"
              href={project.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default projectCards;
