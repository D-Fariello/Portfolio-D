import React from "react";

function Modal({ show, onClose, project }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{project.title}</h2>
        <img className="image-modal" src={project.image} alt={project.alt} />
        <p className="modal-paragraph">{project.description}</p>
        <div className="buttons-div">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              GitHub
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="website-button"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
