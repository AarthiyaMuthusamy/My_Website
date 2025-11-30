import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow-sm">
      <div className="container-fluid nav-container">
        <a className="navbar-brand fw-bold fs-4" href="#home">
          
           <span className="brand-animated">AARTHIYA</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-container" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item ms-4 text-info"><a className="nav-link active-link" aria-current="page" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
