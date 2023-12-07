import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <a href="https://github.com/Matthuu75">
          <img
            src="./src/assets/GitHub-logo.png"
            className="githubLogo"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/marcus-matthews-2655a5119/">
          <img
            src="./src/assets/linkedin.png"
            className="linkedInLogo"
            alt=""
          />
        </a>
      </footer>
    </div>
  );
};
