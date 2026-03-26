import './MainContent.css'
import iconAvatar from '../assets/avatar.svg'
import htmlIcon from '../assets/techIcons/html.svg'
import cssIcon from '../assets/techIcons/html.svg'
import javascriptIcon from '../assets/techIcons/html.svg'
import reactIcon from '../assets/techIcons/html.svg'
import nodejsIcon from '../assets/techIcons/html.svg'
import { Button } from '../components/UI/Button.jsx'

export function MainContent() {
    return (
        <>
            <div className="container">
                <div className="presentation">
                    <img src={iconAvatar} />
                    <h1>Web developer</h1>
                    <p>Estudiante del 7mo ciclo de la carrera de Ingenieria de software
                        enfocado en el desarrollo Web Full Stack </p>
                </div>
                <div className="action-buttons">
                    <Button text="Get in touch" />
                    <Button text="Download CV" />
                </div>
                <div className="tech-stack">
                    <h2>Tech Stack</h2>
                </div>
            </div>
        </>
    )
}