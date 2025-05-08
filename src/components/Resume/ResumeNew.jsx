import React, { useState, useEffect, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import { AiOutlineDownload } from 'react-icons/ai';

// Caminho para o arquivo PDF
import pdfFile from '../../Assets/CaiqueCurriculum.pdf';

function ResumeNew() {
  const [dimensions, setDimensions] = useState({
    width: '80%',
    height: '1399px'
  });
  const [isMobile, setIsMobile] = useState(false);
  const pdfContainerRef = useRef(null);

  // Detecta se é mobile e ajusta dimensões
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      updateDimensions();
    };

    const updateDimensions = () => {
      if (pdfContainerRef.current) {
        const containerWidth = pdfContainerRef.current.offsetWidth;
        const aspectRatio = 1.414; // Proporção A4 (297/210)
        const height = containerWidth * aspectRatio;
        
        setDimensions({
          width: '100%',
          height: `${height}px`
        });
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            style={{ maxWidth: '250px' }}
            download
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row 
          className="resume" 
          ref={pdfContainerRef}
          style={{ 
            height: dimensions.height,
            margin: '20px 0',
            overflow: 'hidden'
          }}
        >
          {isMobile ? (
            // Versão otimizada para mobile com zoom e scroll
            <div style={{
              width: '100%',
              height: '100%',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y pinch-zoom'
            }}>
              <iframe
                src={pdfFile}
                width="100%"
                height={dimensions.height}
                style={{ 
                  border: 'none',
                  transform: 'scale(1.5)',
                  transformOrigin: '0 0'
                }}
                title="PDF Viewer"
                allow="autoplay; fullscreen"
              />
            </div>
          ) : (
            // Versão desktop
            <iframe
              src={pdfFile}
              width={dimensions.width}
              height={dimensions.height}
              style={{ border: 'none' }}
              title="PDF Viewer"
            />
          )}
        </Row>

        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            style={{ maxWidth: '250px' }}
            download
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;