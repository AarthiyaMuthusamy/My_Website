import React from "react";

export default function Hero() {
  return (
    <section id="home" className="container-fluid hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Section */}
          <div className="col-lg-6">
            <div className="name-box p-3 mb-3">
              <h5 className="fw-bold display-5">Hi 👋🏻</h5>
              <h1 className="fw-bold display-5 fade-in">I'm Aarthiya M</h1>
              <h4 className="role text-info typing">Aspiring Software Developer</h4>
            </div>

            <p className="lead text-light slide-left">
              💡 Passionate about building intelligent, user-focused software solutions
              using Java, Python, Android, React, and IoT.
            </p>

            <div className="mt-4">
              <a className="custom-btn-outline btn-lg" href="/Aarthiya_M_SoftwareDeveloper_Resume.pdf"
              download
              >Download CV</a>
              <a className="custom-btn-fill btn-lg ms-3" href="#projects">View Projects</a>
            </div>

            <div className="social-icons mt-4">
              <a href="https://github.com/AarthiyaMuthusamy" className="icon" title="Github"><i className="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/aarthiyam" className="icon" title="Linkedln"><i className="bi bi-linkedin"></i></a>
              <a href="mailto:aarthiyam1510@gmail.com" className="icon" title="Mail"><i className="bi bi-envelope"></i></a>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="col-lg-6 text-center">
            <img
              src="/icons/Aarthiya_Profile.jpg"
              alt="Aarthiya"
              className="profile-img brand-animated"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
