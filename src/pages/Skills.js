import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "../components/skills/Techstack";
import Toolstack from "../components/skills/Toolstack";
import "./../components/skills/style.css";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row className="skills__section">
          <Col className="skills__header" md={7}>
            <h1>
              My <strong className="purple">Skills</strong>
            </h1>
          </Col>
          <Col md={5} className="skills-img"></Col>
        </Row>

        <h2 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h2>

        <Techstack />

        <h2 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h2>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
