import './ExperienceItem.css'

export function ExperienceItem({title, date, desc}) {
    return (
        <div className="experience-item-container">
            <div className="experience-item-header">
                <h3>{title}</h3>
                <small>{date}</small>
            </div>
            <p>{desc}</p>
        </div>
    )
}