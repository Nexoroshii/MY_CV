import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as SpinSVG } from "./../../assets/img/AnimateMain.svg";

// import homeLogo from "./../../assets/img/home-main.svg";

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
              I enjoy programming and its influence on our lives. It's amazing
              to create programs that can simplify our lives <br />
              <br />I am interested in building new
              <b className="purple"> Projects </b>with the help of modern
              <b className="purple"> WEB technologies.</b> While working on
              projects, I strive to use and learn new technologies in order to
              grow as
              <b className="purple"> a developer</b> and expand my professional
              skill set.
              <br />
              <br />
              I’m
              <b className="purple">
                not afraid of tackling difficult tasks or learning
              </b>
              new things.
              <br />
              <br />
              Soon, I plan to learn<b className="purple"> NodeJs</b> and become
              a<b className="purple"> Full-Stack developer</b> .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <SpinSVG />
            {/* <img src={homeLogo} alt="home pic" className="img-fluid" /> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
