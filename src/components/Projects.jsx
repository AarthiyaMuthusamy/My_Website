import React, { useState } from "react";

const projectData = [
  {
    id: 1,
    title: "AI-Enabled Phishing Detection - Intelligent Web Security",
    type: "Web App Development",
    image: "/icons/phishing-detection.jpeg",
    github: "https://github.com/AarthiyaMuthusamy/phising_detection",
    
    description:
      "This project introduces a smart AI-powered phishing detection system designed to protect users from malicious websites in real time. Using machine learning & browser automation techniques, the system automatically analyzes website features and predicts whether a site is legitimate or a phishing threat.The solution aims to reduce risks like data breaches, credential theft, financial fraud, and other cyber-attacks by providing instant alerts during web browsing.",
    tech: ["AI", "Python", "scikit-learn", "pandas","NumPy"],
  },
  {
    id: 2,
    title: "Ambulance Tracking with Patient Monitoring System - Real Time IoT Solution",
    type: "Web App Development",
    image: "/icons/ambulance-tracking.jpeg",
    github: "https://github.com/AarthiyaMuthusamy/Arduino",
    
    description:
      "This project provides a real-time IoT solution designed for emergency healthcare systems.It tracks the live location of an ambulance, monitors a patient’s vital health parameters, and sends data instantly to the hospital dashboard so doctors can prepare in advance.The goal: Faster response, better coordination, and improved survival rates.",
    tech: ["IOT", "Firebase", "Auduino","GPS","GSM"],
  },
  {
    id: 3,
    title: "Student Tracking App - Academic Monitoring System",
    type: "Mobile App Development",
    image: "/icons/student.jpeg",
    github: "#",
    
    description:
      "The Student Tracking App is a mobile-based academic monitoring system developed using Android Studio (Java + XML) with Firebase as the backend.It allows institutions, faculty, and parents to track a student's attendance, academic progress, assignments, performance, and behavior in real time.",
    tech: ["Java", "XML", "Android","Firebase"],
  },
  {
    id: 4,
    title: "Workload Analysis in GPU Cluster",
    type: "Deep Learning (ML)",
    image: "/icons/cluster_image.jpeg",
    github: "https://github.com/AarthiyaMuthusamy/Gpu-workload",
    description:
      "The primary objective of this project was to enhance the performance and efficiency of time-series data processing and forecasting within a GPU cluster environment. It aimed to optimize resource utilization, improve scalability, and handle multivariate time-series data with complex dynamics for real-world applications like workload analysis.",
    tech: ["Python", "TensorFlow","PyTorch", "CNN","Google Colab"],
  },
  {
    id: 5,
    title: "Brain Tumor Detection",
    type: "Deep Learning (ML)",
    image: "/icons/brain.jpeg",
    github: "https://github.com/AarthiyaMuthusamy/Brain-tumor-detection",
    description:
      "This project is a deep-learning–based brain tumor detection system built using a Convolutional Neural Network (CNN).It classifies MRI brain images into tumor or non-tumor categories and includes a web application interface for easy uploading and prediction",
    tech: ["Python", "TensorFlow", "CNN"],
  },
  {
    id: 6,
    title: "Face Recognition Using CNN",
    type: "Deep Learning (ML)",
    image: "/icons/face_recognition.jpeg",
    github: "https://github.com/AarthiyaMuthusamy/Brain-tumor-detection",

    description:
      "This project uses a Convolutional Neural Network (CNN) to extract facial features and classify individuals with high accuracy.OpenCV is used for detecting faces from live video, and the trained model identifies the person based on learned features.",
    tech: ["Python 3", "OpenCV","NumPy",  "Pandas", "Scikit-Learn","Matplotlib" ,"TensorFlow", "CNN"],
  },
  {
    id: 7,
    title: "Pet-Feeding System",
    type: "Iot",
    image: "/icons/pet-feeding.jpeg",
    github: "https://github.com/AarthiyaMuthusamy/Pet-Feeding-system",

    description:
      "This project is an automated pet-feeding system designed using Arduino. It detects when a pet approaches the food bowl using an ultrasonic sensor and then automatically releases food through a servo-operated flap.The system ensures pets get food at the correct time without human intervention, making it useful for pet owners who are often away from home.",
    tech: ["Arduino", "Iot Kit"],
  },
  {
    id: 8,
    title: "AI-powered Career Assistant (ChatBot)",
    type: "Agentic AI ",
    image: "/icons/chatbot.jpeg",
    github: "https://github.com/AarthiyaMuthusamy/Demo",
   
    description:
      "This project is an AI-driven career assistant chatbot built using Python and powered by the DeepSeek AI API. It is designed to answer queries about my career, projects, skills, and experiences — acting as a smart, interactive portfolio.The chatbot is deployed on Hugging Face Spaces and includes an automated Pushover notification system for enhanced monitoring and safety.",
    tech: ["Python", "OpenAI","Cursor","Gradio","Hugging Face","Pushover","DeepSeek API"],
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
