import React, { useState } from "react";

const projectData = [
  {
    id: 1,
    title: "AI-Enabled Phishing Detection - Intelligent Web Security",
    type: "Web App Development",
    image: "/icons/phishing-detection.jpeg",
    github: "https://github.com/AarthiyaMuthusamy/phising_detection",
    live: "https://yourliveapp.com",
    description:
      "",
    tech: ["AI", "Python", "Firebase"],
  },
  {
    id: 2,
    title: "Ambulance Tracking with Patient Monitoring System - Real Time IoT Solution",
    type: "Web App Development",
    image: "/icons/ambulance-tracking.jpeg",
    github: "https://github.com/yourrepo/weather",
    live: "https://yourliveapp.com/weather",
    description:
      "A real-time weather app using OpenWeather API with animated UI and city search.",
    tech: ["IOT", "Firebase", "Auduino"],
  },
  {
    id: 3,
    title: "Student Tracking App - Academic Monitoring System",
    type: "Mobile App Development",
    image: "/icons/student.jpeg",
    github: "https://github.com/yourrepo/dog-ml",
    live: "#",
    description:
      "ML model predicting dog breeds using CNN architecture trained on large dataset.",
    tech: ["Python", "TensorFlow", "CNN"],
  },
  {
    id: 3,
    title: "Workload Analysis in GPU Cluster",
    type: "Mobile App Development",
    image: "/icons/student.jpeg",
    github: "https://github.com/yourrepo/dog-ml",
    live: "#",
    description:
      "ML model predicting dog breeds using CNN architecture trained on large dataset.",
    tech: ["Python", "TensorFlow", "CNN"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">What I've Built</h2>
      <p className="projects-subtitle">Some Of My Distinguished Works</p>

      <div className="project-grid">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <span className="project-type">{project.type}</span>
            <h3 className="project-name">{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-img"
            />
            <h2>{selectedProject.title}</h2>
            <p className="modal-type">{selectedProject.type}</p>

            <p className="modal-description">{selectedProject.description}</p>

            <h4>Tech Stack:</h4>
            <ul className="tech-list">
              {selectedProject.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

            <div className="modal-btns">
              <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn github">
                GitHub
              </a>
              <a href={selectedProject.live} target="_blank" rel="noreferrer" className="btn live">
                Live Demo
              </a>
            </div>

            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
