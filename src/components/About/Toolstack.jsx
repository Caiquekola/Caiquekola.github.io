import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSlack,
  SiVercel,
  SiIntellijidea as Intelijj,
  SiClickup as Clickup,
  SiTermius
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Intelijj />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTermius />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Clickup />
      </Col>
    </Row>
  );
}

export default Toolstack;
