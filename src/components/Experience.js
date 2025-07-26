import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="experience"
      className={`container py-5 fade-section ${animate ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <h1 className="text-center mb-2 fw-bold">About Me</h1>
      <h5 className="text-center mb-4 fw-light fst-italic">My Story in Tech</h5>
      <div className="row">
        {/* Education Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100 border-1 rounded-4">
            <div className="card-body fade-text">
              <h4 className="card-title mb-3 text-center">
                <FaGraduationCap className="me-2 text-primary" />
                Education
              </h4>
              <ul className="list-unstyled px-4">
                <li className="mb-4">
                  <h5 className="fw-bold mb-1">Bachelor of Technology - CS</h5>
                  <p className="mb-1 text-muted">Sri Indu Institute of Engg & Tech. (2021 - 2025)</p>
                  <p className="mb-1 fs-6 fw-light text-muted">CGPA 7.4/10</p>
                  <p>Hyderabad, Telangana - 500070</p>
                </li>
                <li>
                  <h5 className="fw-bold mb-1">Intermediate (MPC)</h5>
                  <p className="mb-1 text-muted">Narayana Junior College (2019 - 2021)</p>
                  <p className="mb-1 fs-6 fw-light text-muted">Percentage 96%</p>
                  <p>Hyderabad, Telangana - 500070</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100 border-1 rounded-4">
            <div className="card-body fade-text">
              <h4 className="card-title mb-3 text-center">
                <FaBriefcase className="me-2 text-success" />
                Work Experience
              </h4>
              <ul className="list-unstyled px-4">
                <li className="mb-4">
                  <h5 className="fw-bold mb-1">Web Development Intern (Remote)</h5>
                  <p className="mb-1 text-muted">Cognifyz (Jan 2025 - Apr 2025)</p>
                  <p>
                    <strong>Python Programming:</strong> Writing efficient and scalable code<br />
                    <strong>Web Development:</strong> Building dynamic applications with Python frameworks<br />
                    <strong>Automation & Scripting:</strong> Creating efficient workflow solutions<br />
                    <strong>Database Management:</strong> Handling and optimizing data storage
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
