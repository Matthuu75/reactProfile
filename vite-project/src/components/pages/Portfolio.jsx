import React from "react";
import "./Portfolio.css"; // Add the correct path to your CSS file

export const Portfolio = () => {
  return (
    <div>
      <h2 id="work">My Work</h2>
      <div className="mywork">
        <a
          className="horiseon"
          href="https://matthuu75.github.io/Horiseon-Marketing-Strategies/"
        >
          <div>
            <h3>Horiseon</h3>
          </div>
        </a>
        <a className="project1" href="https://madeleinea42.github.io/moody/">
          <div>
            <h3>Project 1</h3>
          </div>
        </a>
        <a
          className="project2"
          href="https://club-book-688a8712a651.herokuapp.com/"
        >
          <div>
            <h3>Project 2</h3>
          </div>
        </a>
      </div>

      <div className="github-links">
        <a href="https://github.com/matthuu75/Horiseon-Marketing-Strategies">
          GitHub - Horiseon
        </a>
        <a href="https://github.com/madeleinea42/moody">
          GitHub - Project 1
        </a>
        <a href="https://github.com/your-username/your-project2-repo">
          GitHub - Project 2
        </a>
      </div>
    </div>
  );
};
