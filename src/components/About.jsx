import React from "react";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
       
        <div className="about-left">
          <img
            src="/icons/Aarthiya_Profile.jpg" // replace with your profile image
            alt="Aarthiya"
            className="profile-img-about"
          />

          
         
          
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <p>
            I am a passionate <strong style={{color: '#16d8eaff' }}>Software Developer</strong> with hands-on experience in 
            <strong style={{color: '#04d9ecff' }}> AI, Java, Python, SQL, APIs and full-stack application development, </strong> backed by 
            real-world industry experience at <strong style={{color: '#0bcbdcff' }}>Aptean India Pvt Ltd</strong>. I focus on building scalable, 
            secure, and high-performance software solutions while continuously improving my skills in modern frameworks 
            and cloud technologies.
          </p>
          <p>
            I have contributed to production-grade modules—optimizing backend systems, reducing customer issue escalations, 
            improving uptime, and implementing automation that lowered integration bugs by 20%. My experience in Agile teams 
            has strengthened my ability to collaborate, troubleshoot, and deliver reliable features under tight timelines.
          </p>
          <p>Beyond work, I enjoy solving real problems through technology. I’ve built solutions such as:</p>
          <ul>
            <li>AI-Powered Phishing Detection System – ML model with 90% accuracy + browser extension</li>
            <li>IoT-Based Ambulance Tracking & Patient Monitoring – Java + Firebase + Arduino</li>
            <li>Student Tracking App – Android + Firebase, role-based access system</li>
          </ul>
          <p>
            I enjoy combining AI, IoT, backend engineering, and automation to build impactful solutions.

          </p>

            {/* Hobbies Section */}
          <div className="mt-4">
            <h3 className="sub-title">My Hobbies</h3>
            <ul className="hobby-list mt-2">
              <li>🎨 Doodle Art</li>
              <li>💃 Dancing</li>
              <li>🎧 Listening to music</li>
              <li>📚 Reading Book</li>
            </ul>
          </div>
          
          <p>
            I am actively seeking <strong>Software Engineer, Backend Developer, Java Developer, AI/ML Developer,</strong> 
            or <strong>Full-Stack</strong> opportunities where I can deliver value, grow professionally, and contribute to 
            innovative projects.
          </p>

          <div className="about-buttons">
             
            <a href="/Aarthiya_M_SoftwareDeveloper_Resume.pdf" className="btn-contact"
            target="_blank" 
            rel="noopener noreferrer">Hire me</a>
           </div>
                    {/* Hobbies Section */}
         
                    
          
        </div>
      </div>
    </section>
  );
};




