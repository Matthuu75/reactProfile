import React from "react";
import resumeData from "./resumeData";
import "./Resume.css";

export const Resume = () => {
  const downloadResume = () => {

    // Create a string from the resume data
    const resumeString = resumeData.join("\n");

    const blob = new Blob([resumeString], { type: "text/plain" });

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "Marcus Matthews Resume.txt";

    document.body.appendChild(downloadLink);

    downloadLink.click();
  };

  return (
    <div className="resume-main">
      <h1 className="resume-title">Resume</h1>
      <button className="resume-button" onClick={downloadResume}>
        Download Resume
      </button>
      <div className="resume-body">
        <section>
          <h2 className="resume-skills">Skills</h2>
          <ul className="resume-ul">
            <li>
              Proficient in MERN (MongoDB, Express.js, React, Node.js) stack
              development
            </li>
            <li>Front-end: HTML5, CSS3, JavaScript (ES6+), React, Redux</li>
            <li>Back-end: Node.js, Express.js, MongoDB</li>
            <li>RESTful API design and implementation</li>
            <li>Responsive web design with Bootstrap and CSS frameworks</li>
            <li>Version control with Git and GitHub</li>
            <li>Deployment using Heroku and Netlify</li>
            <li>Strong problem-solving and debugging skills</li>
            <li>Excellent teamwork and communication skills</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
