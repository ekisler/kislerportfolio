import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Emisael Kisler </span>
            from <span className="purple"> Caracas, Venezuela.</span>
            <br />I am a entusaist in Maths and Computing.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Read about Tech News
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Committed to constantly learning and growing!"{" "}
          </p>
          <footer className="blockquote-footer">eKisler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
