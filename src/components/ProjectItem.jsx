import { useState, useEffect } from "react";
import "./ProjectItem.css";
import attachIcon from "../assets/attach.svg";
import githubIcon from "../assets/techIcons/github.svg";

export function ProjectItem({ preview, title, githubLink, liveLink, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="project-item-container">
        <div 
          className="project-image-wrapper project-preview-clickable" 
          onClick={() => setIsModalOpen(true)}
          title="Ver pantalla completa"
        >
          <img src={preview} alt={title} />
        </div>
        <div className="project-item-description">
          <div className="item-desc-header">
            <h3>{title}</h3>
            <div className="project-links">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                  title="Visitar sitio web"
                >
                  <img src={attachIcon} alt="Enlace" />
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                  title="Ver código fuente en GitHub"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              )}
            </div>
          </div>
          <p className="item-desc-text">{description}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="project-image-modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <img src={preview} alt={title} />
          </div>
        </div>
      )}
    </>
  );
}
