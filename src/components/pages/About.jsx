import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="container">
      <header>
        <h1>Marcus Matthews</h1>
              <div>
          <img src={src/assets/Headshot.jpg} className= "headshot" alt="Headshot" />
              </div>
        <h2>Web Developer</h2>
      </header>

      <div className="bio">
        <p>
          Hello! I'm Marcus Matthews, a passionate web developer based in the
          Greater Orlando area. I specialize in front-end and back-end
          development, creating responsive and user-friendly websites.
        </p>
        <p>
          With a strong foundation in HTML, CSS, and JavaScript, I love turning
          ideas into reality. My goal is to build web applications that not only
          look great but also provide a seamless user experience.
        </p>
        <p>
          Outside of coding, I enjoy exploring new technologies, spending time
          with my family and my two dogs, and staying up-to-date with the latest industry
          trends.
        </p>
      </div>
    </div>
  );
};
