import { Container, Row, Col } from "react-bootstrap";

import homeLogo from "./../../assets/img/home-main.svg";

import "./style.css";

function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "2.6em" }}>
              LET'S GET <span className="purple"> ACQUAINTED</span>
            </h2>
            <p className="home-about-body">
              I like programming and its influence on our lives. It’s amazing to
              do some programs, that can simplify our life. <br />
              <br />
              I’m interested in building new
              <b className="purple"> Projects </b>with help of modern
              <b className="purple"> WEB technologies</b>. During the work, I
              try to use and learn new ones in order to grow up as
              <b className="purple"> developer</b> and increase my professional
              stack. <br />
              <br />
              I’m
              <b className="purple"> not afraid of hard tasks and studying </b>
              something new
              <br />
              <br />
              Soon, I plan to learn<b className="purple"> NodeJs</b> and became
              a<b className="purple"> FullStack developer</b> .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={homeLogo} alt="home pic" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
