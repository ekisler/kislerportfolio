import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import i18n from "../../i18n";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        {i18n.t("about.days-i")}{" "}
        <strong className="text-info">{i18n.t("about.code")}</strong>
      </h1>
      <GitHubCalendar
        username="ekisler"
        blockSize={15}
        blockMargin={5}
        color="#06c7f7"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
