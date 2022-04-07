import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import guitar from "../../Assets/Projects/guitar.png";
import hotel from "../../Assets/Projects/hotel.png";
import workout from "../../Assets/Projects/workout.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="black">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workout}
              title="Flog"
              description="A fitness blog where gym goers can share their most recent workout and inspire others to due the same."
              link="https://github.com/johntannous/project-2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              title="Hotel Booking App"
              description="A Hotel Booking app using the MERN stack as well as Tailwind and Swipe."
              link="https://github.com/johntannous/booking"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guitar}
              title="Coming Soon: Jad Khzam"
              description="An Artist page for a local artist on Spotify, Jad Khzam. The project is in the works and I look forward to revealing it soon."
              link="https://github.com/johntannous"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
