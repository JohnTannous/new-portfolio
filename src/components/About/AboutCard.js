import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, my name is <span className="black">John Tannous </span>
            from <span className="black"> Granada Hills, California.</span>
            <br />I am a Software Engineer and Graphic Designer with the main goal of helping people make their visions a reality.
            <br />
            <br />
            Apart from coding and designing, Here are some of my hobbies!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "black" }}>
          “Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn’t really do it, they just saw something. It seemed obvious to them after a while.”{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
