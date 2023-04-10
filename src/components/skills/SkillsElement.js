import { Col } from "react-bootstrap";

function SkillsElement(props) {
  const Icon = props.icon;
  return (
    <Col xs={4} md={2} className="tech-icons">
      <Icon />
    </Col>
  );
}

export default SkillsElement;
