import './ProjectItem.css'
import navIcon from '../assets/techIcons/navIcon.svg'

export function ProjectItem({ preview, title, link }) {
    return (
        <div className="project-item-container">
            <img src={preview} alt={title} />
            <a href='/'>
                <div className="project-item-description">
                    <h3>{title}</h3>
                    <img src={navIcon} />
                </div>
            </a>
        </div>
    )
}