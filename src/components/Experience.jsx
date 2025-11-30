import React from "react";

const experience = [
  {
    year: "Dec 2024 - May 2025",
    role: "Associate Engineer - Development Intern",
    company: "Aptean India Pvt Ltd",
    description:
      "Developed and optimized enterprise modules in Java and SQL, improving system uptime and reducingerror rates by 15%. Performed unit testing (JUnit, Postman) and automated API validations, reducing integration bugs by 20%. Diagnosed and resolved backend issues in customer-facing applications, cutting response times by 30%. Collaborated in an Agile/Scrum environment with sprint planning, daily stand-ups, and JIRA-based task tracking.",
    certificate: "/icons/Aarthiya_Intern_certificate.pdf",
  },
];

const education = [
  {
    year: "2020 - 2024",
    degree: "B.Tech Information Technology - Thiagarajar College of Engineering",
    description: "CGPA : 8.48",
  },
  {
    year: "2019 - 2020",
    degree: "HSC - G N G V Hr Sec School",
    description: "Percentage : 79%",
  },
  {
    year: "2017 - 2018",
    degree: "SSLC - Govt Hr Sec School",
    description: "Percentage: 86%",
  },
];

export default function Experience() {
  return (
    <section id="journey" className="container-card container-fluid">
      <h2 className="text-center mb-5 fw-bold">
        My <span className="text-info">Journey</span>
      </h2>

      <div className="row position-relative">
        {/* Vertical Center Line */}
        <div className="timeline-line"></div>

        {/* Experience Column */}
        <div className="col-md-6 journey-column">
          <h4 className="text-center mb-4">Experience</h4>

          {experience.map((exp, index) => (
            <div key={index} className="journey-card mb-4 left-card">
              <span className="journey-dot"></span>
              <span className="journey-year">{exp.year}</span>

              {/* Certificate Icon */}
              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-icon position-absolute top-0 end-0 m-2"
                >
                  <img src="icons/transper_link.png" alt="Certificate" />
                </a>
              )}

              <h5 className="fw-bold">{exp.role}</h5>
              <h6 className="fw-bold">{exp.company}</h6>

              <ul className="experience-list">
                {exp.description.split(". ").map((point, i) => {
                  if (!point.trim()) return null;
                  return <li key={i}>{point.trim()}.</li>;
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Column */}
        <div className="col-md-6 journey-column">
          <h4 className="text-center mb-4">Education</h4>

          {education.map((edu, index) => (
            <div key={index} className="journey-card mb-4 right-card">
              <span className="journey-dot"></span>
              <span className="journey-year">{edu.year}</span>

              <h5 className="fw-bold">{edu.degree}</h5>
              <p className="para-color">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
