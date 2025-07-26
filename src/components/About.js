import React from 'react';
import profileImg from '../assets/photo.jpg'; // Make sure this image exists
import './About.css';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const headingText = "Full Stack Developer".split("");
const directions = ['up', 'down', 'left', 'right'];

const About = () => {
  return (
    <section id="about" className="container py-5 justify-content-space-around">
      <div className="row align-items-center mt-4 p-4">
        
        {/* Profile Image */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={profileImg}
            alt="Profile"
            className="img-fluid rounded-circle shadow-lg"
            style={{ width: '250px', height: '250px', objectFit: 'cover' }}
          />
        </div>

        {/* Info Section */}
        <div className="col-md-8">
          

          <h5 className="fw-bold">Hello, I'M</h5>
          <h1 className="fw-bold display-5" style={{ letterSpacing: '3px' }}>
            GUNDABOINA VENU KUMAR.
          </h1>
          <h4 className="fw-bold fst-italic animated-heading text-start">
            {headingText.map((char, i) => {
              const dir = directions[i % directions.length];
              return (
                <span
                  key={i}
                  className={`letter letter-${dir}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </h4>

          {/* Buttons */}
          <div className="mt-4 d-flex gap-4 flex-wrap">
            <a
              href="https://drive.google.com/file/d/1WfXZ0_OqK5opNvPd8Trgx4rbEv2y2eMs/view?usp=sharing"
              download
              className="btn btn-secondary border-1 rounded-4"
            >
              <FaDownload className="me-2" />
              Download CV
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light border-1 rounded-4"
            >
              <FaLinkedin className="me-2" />
              LinkedIn
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light border-1 rounded-4"
            >
              <FaGithub className="me-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
