import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Decifra from "../../Assets/Projects/Decifra.png";
import VirtualTerminal from "../../Assets/Projects/VirtualTerminal.png";
import RicardoBarbearia from "../../Assets/Projects/RicardoBarbearia.png";
import DrMagnus from '../../Assets/Projects/DrMagnus.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DrMagnus}
              isBlog={false}
              title="Doutor Magnus"
              description="A professional landing page for a Doctor"
              // ghLink="https://github.com/Caiquekola/VirtualTerminal"
              demoLink="https://drmagnus.caiquekola.com.br/"  
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VirtualTerminal}
              isBlog={false}
              title="Virtual Terminal"
              description="A virtual system that simulates a console and file explorer, designed to help users learn and practice Linux terminal commands"
              ghLink="https://github.com/Caiquekola/VirtualTerminal"
              demoLink="https://osvirtualterminal.netlify.app"  
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RicardoBarbearia}
              isBlog={false}
              title="Ricardo Barber Shop"
              description="A virtual system that simulates a console and file explorer, designed to help users learn and practice Linux terminal commands"
              ghLink="https://github.com/Caiquekola/app-barber-frontend"
              // demoLink="https://ricardobarbearia.netlify.app/"  
            />
          </Col>+<Col md={4} className="project-card">
            <ProjectCard
              imgPath={Decifra}
              isBlog={false}
              title="Decifra"
              description="A virtual system that simulates a console and file explorer, designed to help users learn and practice Linux terminal commands"
              ghLink="https://github.com/Caiquekola/DECIFRA"
              //demoLink="https://ricardobarbearia.netlify.app/"  
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
