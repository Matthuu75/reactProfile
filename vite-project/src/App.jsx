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
    </>
  );
}

export default App;
