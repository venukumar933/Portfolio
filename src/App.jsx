import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './App.css'


function App() {

  return (
    <div>
      <Navbar />
      <section id="about"><About /></section>
      <section id="experience"><Experience/></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="certifications"><Certifications /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
