import './TechItem.css'

export function TechItem({ icon, name }) {
  return (
    <div className="tech-item-container">
      <img className='tech-item-img' src={icon} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}