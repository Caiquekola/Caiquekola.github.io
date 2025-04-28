import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Caique Augusto </span>
            from <span className="purple"> Minas Gerais, Brazil.</span>
            <br />
            I currently work as a data analyst at CLI Consultoria and am studying 
            for a bachelor's degree in Information Systems at IFMG.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Competitive Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with my family and my girlfriend
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never give up on never giving up!"{" "}
          </p>
          <footer className="blockquote-footer">Caiquekola</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
