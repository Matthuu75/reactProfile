import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Route, Routes } from "react-router-dom";

import { About, Contact, Portfolio, Resume } from "./components/pages/index";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>

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
              src="./src/assets/linkd in.png"
              className="linkedInLogo"
              alt=""
            />
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
