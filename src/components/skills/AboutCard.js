import React from "react";
import Card from "react-bootstrap/Card";
import { ImHome, ImPointRight } from "react-icons/im";

// I'm a hardworking person, who wants to group up in a professional sphere. So I prefer to spend my free time learning something new.

// Now I'm a frontEnd developer, who wants to become Fullstack developer.
// Also I'm intresting in Machine Learning and Data Science.

// Besides styding i also like to walk in national parks, cycling and travelling.

// The best investment is an investment in yourself.

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="quote-body">
            I'm a <b className="purple"> hardworking person</b>, who wants to
            group up in a professional sphere. So I prefer to spend my free time
            <b className="purple"> learning something new.</b>
            <br />
            <br />
            Now I'm a <b className="purple"> FrontEnd developer</b>, who wants
            to become a<b className="purple"> Fullstack developer.</b>
            <br />
            <br />
            Also I'm interesting in<b className="purple"> Machine Learning </b>
            and
            <b className="purple"> Data Science.</b>
            <br />
            <br />
            Besides styding i also like to walk in national parks, cycling and
            travelling. This activities are helping me to restart my brain work
            and to restart my work with new energy.
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
