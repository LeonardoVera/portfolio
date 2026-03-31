import "./ProjectItem.css";
import navIcon from "../assets/techIcons/navIcon.svg";

export function ProjectItem({ preview, title, link, description }) {
  return (
    <div className="project-item-container">
      <img src={preview} alt={title} />
      <div className="project-item-description">
        <a
          href={link}
          target="_blank"
          className="project-item-description-container"
        >
          <div className="item-desc-header">
            <h3>{title}</h3>
            <img src={navIcon} />
          </div>
        </a>
        <p className="item-desc-text">{description}</p>
      </div>
    </div>
  );
}
