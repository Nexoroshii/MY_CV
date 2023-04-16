import { Container, Row, Col } from "react-bootstrap";
import { projectsList } from "../components/project/projectsList";
import ProjectCard from "../components/project/ProjectCard";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <Row className="project-body">
          {projectsList.map((proj) => {
            return (
              <Col xs={12} sm={6} md={4} className="project-card" key={proj.id}>
                <ProjectCard
                  imgPath={proj.img}
                  isBlog={false}
                  title={proj.title}
                  ghLink={proj.linkGit}
                  demoLink={proj.link}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
