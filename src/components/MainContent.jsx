import './MainContent.css'
import iconAvatar from '../assets/avatar.svg'
import htmlIcon from '../assets/techIcons/html.svg'
import cssIcon from '../assets/techIcons/css.svg'
import javascriptIcon from '../assets/techIcons/javascript.svg'
import reactIcon from '../assets/techIcons/react.svg'
import nodejsIcon from '../assets/techIcons/nodejs.svg'
import gastosPreview from '../assets/projectsPreviews/guardian-gastos-preview.png'
import { Button } from '../components/UI/Button.jsx'
import { TechItem } from './TechItem.jsx'
import { ProjectItem } from './ProjectItem.jsx'
import { ExperienceItem } from './ExperienceItem.jsx'

export function MainContent() {
    return (
        <>
            <div className="container" id='home'>
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
                    <div className="tech-stack-items">
                        <TechItem icon={htmlIcon} />
                        <TechItem icon={cssIcon} />
                        <TechItem icon={javascriptIcon} />
                        <TechItem icon={reactIcon} />
                        <TechItem icon={nodejsIcon} />
                    </div>
                </div>
                <div className="projects">
                    <h2 id='projects'>Projects</h2>
                    <div className="projects-items">
                        <ProjectItem preview={gastosPreview} title="Gestor de Gastos" />
                        <ProjectItem preview={gastosPreview} title="Gestor de Gastos" />
                        <ProjectItem preview={gastosPreview} title="Gestor de Gastos" />
                        <ProjectItem preview={gastosPreview} title="Gestor de Gastos" />
                    </div>
                </div>
                <div className="experience">
                    <h2 id='experience'>Experience</h2>
                    <div className="experience-items">
                        <ExperienceItem
                            title="Prueba"
                            date="Nov 2019 - Present"
                            desc="Esto es una prueba" />
                        <ExperienceItem
                            title="Prueba"
                            date="Nov 2019 - Present"
                            desc="Esto es una prueba" />
                        <ExperienceItem
                            title="Prueba"
                            date="Nov 2019 - Present"
                            desc="Esto es una prueba" />
                    </div>
                </div>
            </div>
        </>
    )
}