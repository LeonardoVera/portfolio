import './ExperienceItem.css'

export function ExperienceItem({title, date, desc}) {
    return (
        <div className="experience-item-container">
            <div className="experience-item-header">
                <h3>{title}</h3>
                <span className="experience-date">{date}</span>
            </div>
            <p className="experience-desc">{desc}</p>
        </div>
    )
}