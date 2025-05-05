import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={"https://private-user-images.githubusercontent.com/99914098/414872643-e4a323b8-21c2-470f-bc2c-69ebbcc691aa.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY0NzkwNDYsIm5iZiI6MTc0NjQ3ODc0NiwicGF0aCI6Ii85OTkxNDA5OC80MTQ4NzI2NDMtZTRhMzIzYjgtMjFjMi00NzBmLWJjMmMtNjllYmJjYzY5MWFhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTA1VDIwNTkwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ1MWYxNmM3ODExNDM2NDhiNDA3MTlkOTZlMjQ4YTAwM2VmMzVmMGRlY2FiNmQ2ZDk0MTU4NDE0NTNlZGQ1YzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.8510IdEf-GGM7E-TWAy52VBxFT0-PKRFjN0iR7lD-dc"}
              isBlog={false}
              title="Virtual Terminal"
              description="A virtual system that simulates a console and file explorer, designed to help users learn and practice Linux terminal commands"
              ghLink="https://github.com/Caiquekola/VirtualTerminal"
              demoLink="https://osvirtualterminal.netlify.app"  
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://raw.githubusercontent.com/Caiquekola/app-barber-frontend/refs/heads/main/src/assets/HomePage.png?token=GHSAT0AAAAAAC5R7RNYA5RD6QFHVZJ6J5L22AZHEZQ"}
              isBlog={false}
              title="Ricardo Barber Shop"
              description="A virtual system that simulates a console and file explorer, designed to help users learn and practice Linux terminal commands"
              ghLink="https://github.com/Caiquekola/app-barber-frontend"
              demoLink="https://ricardobarbearia.netlify.app/"  
            />
          </Col>+<Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://private-user-images.githubusercontent.com/99914098/380557257-0e5d3fe6-a0ae-49ac-895b-b86546f73a2d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY0ODAzMzgsIm5iZiI6MTc0NjQ4MDAzOCwicGF0aCI6Ii85OTkxNDA5OC8zODA1NTcyNTctMGU1ZDNmZTYtYTBhZS00OWFjLTg5NWItYjg2NTQ2ZjczYTJkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTA1VDIxMjAzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJkY2E1NWRhNmM3MmE0YzdhMGUyNTIyMzdmZWJiYWUzMzhkMWY4ZmI2OTc3Yzg1NzkwNjkxMjQxNTA4NWQwZGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.q-LzXG8ul7FqLiopSMbgrHHtE_Yvz2NAkI3m4Rjwc2E"}
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
