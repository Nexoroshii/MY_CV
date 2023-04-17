import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="quote-body">
            I'm a <b className="purple"> hardworking person,</b> who is eager to
            grow in the professional sphere. Therefore, I prefer to spend my
            free time
            <b className="purple"> learning something new.</b>
            <br />
            <br />
            Currently, I am working as a
            <b className="purple"> FrontEnd developer</b>, but my goal is to
            become a<b className="purple"> Fullstack developer.</b>
            <br />
            <br />
            Additionally, I am interested in
            <b className="purple"> Machine Learning </b>
            and
            <b className="purple"> Data Science.</b>
            <br />
            <br />
            Aside from studying, I also enjoy walking in national parks,
            cycling, and traveling. These activities help me to refresh my mind
            and restart my work with new energy.
          </p>

          <p className="quote-footer" style={{ color: "rgb(155 126 172)" }}>
            "The best investment is an investment in yourself!"
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
