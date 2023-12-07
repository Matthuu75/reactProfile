import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <a href="https://github.com/Matthuu75">
          <img
            src="https://drive.google.com/file/d/15DZQSza3MnbzTYIaQr_PRmVt6HY_-VPc/view?usp=drive_link"
            className="githubLogo"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/marcus-matthews-2655a5119/">
          <img
            src="https://drive.google.com/file/d/1WWrODSnvNTu9ASoWBo1NPM5cZjuUfhxw/view?usp=drive_link"
            className="linkedInLogo"
            alt=""
          />
        </a>
      </footer>
    </div>
  );
};
