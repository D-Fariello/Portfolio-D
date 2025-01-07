import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../style/main.scss";
import Home from "./pages/Home";
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
