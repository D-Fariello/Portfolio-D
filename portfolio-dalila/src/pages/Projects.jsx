import React, { useState, useEffect } from "react";
import "../../style/_projects.scss";
import projectsData from "../data/projectsData";
// import Modal from "../components/Modal";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Filter state
  //   const [selectedProject, setSelectedProject] = useState(null);
  //   const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add("projects-body");
  }, []);

  // Filter projects by category
  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(selectedCategory)
        );

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-buttons">
        <button className="buttons" onClick={() => setSelectedCategory("All")}>
          All
        </button>
        <button
          className="buttons"
          onClick={() => setSelectedCategory("JavaScript")}
        >
          JavaScript
        </button>
        <button
          className="buttons"
          onClick={() => setSelectedCategory("React")}
        >
          React
        </button>
        <button
          className="buttons"
          onClick={() => setSelectedCategory("Redux")}
        >
          Redux
        </button>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project)} // Handle click
          >
            <img src={project.image} alt={project.alt} />
            <p className="projects-paragraph">{project.title}</p>
          </div>
        ))}
      </div>
      {/* Modal
      <Modal show={showModal} onClose={closeModal} project={selectedProject} /> */}
    </section>
  );
}

export default Projects;
