import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
