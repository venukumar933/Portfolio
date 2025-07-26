import React from 'react';
import './Projects.css';
import { FaGithub, FaLink } from 'react-icons/fa';
import proj1 from '../assets/image.png';
import proj2 from '../assets/image2.jpg';
import proj3 from '../assets/image3.jpg'

const projectData = [
  {
    id: 1,
    title: 'Cyber Attack Detection  sing IOT',
    description: 'Tech Stack: IoT, Python, Machine Learning, ANN, SVM.',
    image: proj1,
    codeLink: 'https://github.com/venukumar933',
    demoLink: 'https://securesight-demo.com',
  },
  
  {
    id: 2,
    title: 'Weather Forecast',
    description: 'Created a weather forecast application using HTML,CSS and JavaScript.',
    image: proj3,
    codeLink: 'https://github.com/venukumar933',
    demoLink: 'https://securesight-demo.com',
  },
  {
    id: 3,
    title: 'Creative Portfolio',
    description: 'Developed a portfolio using react to show case my projects and skills.',
    image: proj2,
    codeLink: 'https://github.com/venukumar933',
    demoLink: 'https://github.com/venukumar933',
  },

];

const Projects = () => {
  return (
    <section id="projects" className="container py-5">
      <h1 className="text-center mb-2 fw-bold ">Projects</h1>
      <h5 className="text-center fst-italic fw-light mb-4">Explore My Recent projects</h5>
      <div className="row">
        {projectData.map(project => (
          <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
            <div className="card h-80 shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1 text-secondary fst-italic">{project.description}</p>
                <div className="d-flex justify-content-between mt-3">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm"
                   >
                    <FaGithub size={20} /> GitHub
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      LiveDemo<FaLink className="ms-2" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
