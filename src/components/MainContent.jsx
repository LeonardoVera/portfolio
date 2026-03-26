import './MainContent.css'
import iconAvatar from '../assets/avatar.jpg'
import htmlIcon from '../assets/techIcons/html.svg'
import cssIcon from '../assets/techIcons/css.svg'
import javascriptIcon from '../assets/techIcons/javascript.svg'
import reactIcon from '../assets/techIcons/react.svg'
import nodejsIcon from '../assets/techIcons/nodejs.svg'
import figmaIcon from '../assets/techIcons/figma.svg'
import mysqlIcon from '../assets/techIcons/mysql.svg'
import gitIcon from '../assets/techIcons/git.svg'
import githubIcon from '../assets/techIcons/github.svg'
import gastosPreview from '../assets/projectsPreviews/guardian-gastos-preview.png'
import { Button } from '../components/UI/Button.jsx'
import { TechItem } from './TechItem.jsx'
import { ProjectItem } from './ProjectItem.jsx'
import { ExperienceItem } from './ExperienceItem.jsx'
import curriculum from '../../public/curriculum.pdf'

export function MainContent() {
    return (
        <>
            <div className="container" id='home'>
                <div className="presentation">
                    <img src={iconAvatar} />
                    <h1>Web developer</h1>
                    <p>Estudiante del 7mo ciclo de la carrera de Ingenieria de software
                        enfocado en el desarrollo Web Full Stack y entusiaste en el diseño UI</p>
                </div>
                <div className="action-buttons">
                    <Button text="Get in touch" link="https://www.linkedin.com/in/leonardovera20" />
                    <Button text="Download CV" link={curriculum} downloadName="curriculum.pdf"/>
                </div>
                <div className="tech-stack">
                    <h2>Tech Stack</h2>
                    <div className="tech-stack-items">
                        <TechItem icon={htmlIcon} />
                        <TechItem icon={cssIcon} />
                        <TechItem icon={javascriptIcon} />
                        <TechItem icon={gitIcon} />
                        <TechItem icon={githubIcon} />
                        <TechItem icon={mysqlIcon} />
                        <TechItem icon={reactIcon} />
                        <TechItem icon={nodejsIcon} />
                        <TechItem icon={figmaIcon} />
                    </div>
                </div>
                <div className="projects">
                    <h2 id='projects'>Projects</h2>
                    <div className="projects-items">
                        <ProjectItem preview={gastosPreview} title="Gestor de Gastos" />
                    </div>
                </div>
                <div className="experience">
                    <h2 id='experience'>Experience</h2>
                    <div className="experience-items">
                        <ExperienceItem
                            title="Voluntariado IEEE Computer Society"
                            date="May 2024 - Dic 2024"
                            desc="Fui encargado de la planeacion y documentacion de proyectos
                            lo que me aporto enormemente en desarrollar mi capacidad de 
                            trabajo en equipo." />
                    </div>
                </div>
            </div>
        </>
    )
}