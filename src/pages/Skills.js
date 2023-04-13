import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "../components/skills/Techstack";
import Toolstack from "../components/skills/Toolstack";
import "./../components/skills/style.css";
import { ReactComponent as SkillsSVG } from "./../assets/img/MySkillsLogo.svg";
import AboutCard from "../components/skills/AboutCard";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="skills__header">
          My<strong className="purple"> Skills</strong>
        </h1>
        <Row className="skills__section">
          <Col md={7} className="skills-description">
            <AboutCard />
          </Col>

          <Col md={5} className="skills-img">
            <SkillsSVG />
          </Col>
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
