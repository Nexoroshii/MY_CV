import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./style.css";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div className="project-wrapper-btn">
          <Button
            className="project-btn git"
            href={props.ghLink}
            target="_blank"
          >
            <BsGithub /> &nbsp; GitHub
          </Button>

          <Button
            className="project-btn"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
