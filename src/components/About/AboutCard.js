import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import i18n from "../../i18n";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {i18n.t("about.hi-everyone-i-am")}{" "}
            <span className="purple">Emisael Kisler </span>
            {i18n.t("about.from")}{" "}
            <span className="purple"> Caracas, Venezuela.</span>
            <br />
            {i18n.t("home.FullStack-Developer")}.
            <br />
            <br />
            {i18n.t(
              "about.apart-from-coding-some-other-activities-that-i-love-to- do"
            )}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {i18n.t("about.playing-chess")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {i18n.t("about.read-about-tech-news")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {i18n.t("about.trekking")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {i18n.t("about.committed-to-constantly-learning-and-growing")}{" "}
          </p>
          <footer className="blockquote-footer">eKisler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
