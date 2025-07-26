import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  return (
    <section id="contact" className="container py-5">
      <h1 className="text-center mb-2 fw-bold">Contact Me</h1>
      <h5 className='text-center mb-4 fw-light fst-italic'>Let's Get in Touch</h5>
      <div className="row">
    


        {/* Contact Info */}
        <div className=" col-md-6 mb-4 ">
          <h5><MdEmail className="me-2" /> Email</h5>
          <p>venukumarv943@gmail.com</p>

          <h5><MdPhone className="me-2" /> Phone</h5>
          <p>+91 6303536942</p>

          <h5><MdLocationOn className="me-2" /> Location</h5>
          <p>Hyderabad, India</p>

          <h5 className="mt-4">Find me on</h5>
          <div className="d-flex gap-3 mt-2">
            <a
              href="https://www.linkedin.com/in/venukumar-gundaboina-8509722a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn d-flex align-items-center gap-2"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>

            <a
              href="https://github.com/venukumar933"
              target="_blank"
              rel="noopener noreferrer"
              className="btn d-flex align-items-center gap-2"
            >
              <FaGithub size={20} /> GitHub
            </a>

            <a
              href="https://www.instagram.com/venu_kumar_yadav?igsh=MThpc2xmZ2MwZHU3Mg== "
              target="_blank"
              rel="noopener noreferrer"
              className="btn d-flex align-items-center gap-2"
            >
              <FaInstagram size={20} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
