import "./MainContent.css";

// Tecnologies Icons Imports
import htmlIcon from "../assets/techIcons/html.svg";
import cssIcon from "../assets/techIcons/css.svg";
import javascriptIcon from "../assets/techIcons/javascript.svg";
import reactIcon from "../assets/techIcons/react.svg";
import nodejsIcon from "../assets/techIcons/nodejs.svg";
import figmaIcon from "../assets/techIcons/figma.svg";
import mysqlIcon from "../assets/techIcons/mysql.svg";
import gitIcon from "../assets/techIcons/git.svg";
import githubIcon from "../assets/techIcons/github.svg";
import nextjsIcon from "../assets/techIcons/nextjs.webp";

// Projects Previews imports
import patitasSanasPreview from "../assets/projectsPreviews/patitasSanas-preview.webp";
import gastosPreview from "../assets/projectsPreviews/guardian-gastos-preview.webp";
import ipLocationPreview from "../assets/projectsPreviews/ipLocation-preview.webp";
import linuxACLDemoPreview from "../assets/projectsPreviews/linux-acl-preview.webp";

import { Button } from "../components/UI/Button.jsx";
import { TechItem } from "./TechItem.jsx";
import { ProjectItem } from "./ProjectItem.jsx";
import { ExperienceItem } from "./ExperienceItem.jsx";
import curriculum from "../assets/CV-LeonardoVera.pdf";
import me from "../assets/me-icon.webp";

export function MainContent() {
  return (
    <>
      <div className="container" id="home">
        <div className="presentation">
          <img src={me} />
          <h1>Software Engineer</h1>
          <h2>Leonardo Vera</h2>
          <p>
            Estudiante del 8vo ciclo de la carrera de Ingenieria de software
            enfocado en el{" "}
            <span className="highlight">desarrollo web full stack</span> y
            entusiasta del <span className="highlight">diseño UI</span>
          </p>
        </div>
        <div className="action-buttons">
          <Button
            text="Get in touch"
            link="https://www.linkedin.com/in/leonardovera20"
          />
          <Button
            text="Download CV"
            link={curriculum}
            downloadName="CV Leonardo Vera.pdf"
          />
        </div>
        <div className="tech-stack">
          <h2>Tech Stack</h2>
          <div className="tech-stack-items">
            <TechItem icon={htmlIcon} name="HTML" />
            <TechItem icon={cssIcon} name="CSS" />
            <TechItem icon={javascriptIcon} name="JavaScript" />
            <TechItem icon={reactIcon} name="React" />
            <TechItem icon={nextjsIcon} name="Next.js" />
            <TechItem icon={nodejsIcon} name="Node.js" />
            <TechItem icon={gitIcon} name="Git" />
            <TechItem icon={githubIcon} name="GitHub" />
            <TechItem icon={mysqlIcon} name="MySQL" />
            <TechItem icon={figmaIcon} name="Figma" />
          </div>
        </div>
        <div className="projects">
          <h2 id="projects">Projects</h2>
          <div className="projects-items">
            <ProjectItem
              preview={linuxACLDemoPreview}
              title="Linux ACL Manager"
              githubLink="https://github.com/LeonardoVera/ACL-manager"
              liveLink="https://github.com/LeonardoVera/linux-acl"
              description="Aplicación desarrollada en React que facilita la gestión de permisos ACL en sistemas Linux, permitiendo a los usuarios administrar de manera eficiente el acceso a archivos y directorios de forma visual e intuitiva."
            />
            <ProjectItem
              preview={patitasSanasPreview}
              title="Patitas Sanas - Vet Maganment"
              githubLink="https://github.com/KevinBohorquez/PatitasSanas"
              liveLink="https://patitas-sanas-sigma.vercel.app"
              description="Plataforma web desarrollada en React que maneja la gestion de una clinica veterinaria, incluyendo manejo de servicios, gestion de pacientes y veterinarios, dashboards y manejo de estado financiero"
            />
            <ProjectItem
              preview={ipLocationPreview}
              title="Localizador via IP address"
              githubLink="https://github.com/LeonardoVera/"
              liveLink="https://ipaddresslocation.netlify.app/"
              description="App desarrollada en react, la cual realiza una peticion y obtiene datos de geolocalizacion mediante la ip y las muestra en una interfaz amigable."
            />
            <ProjectItem
              preview={gastosPreview}
              title="Gestor de Gastos"
              githubLink="https://github.com/MiguelTacoZavala/Sistema_Gestion_Gastos"
              liveLink="https://github.com/MiguelTacoZavala/Sistema_Gestion_Gastos"
              description="App desarrollada en react, la cual tiene como proposito ayudarte a gestionar tus gastos y obtener un balance general de estos mediante una grafica."
            />
          </div>
        </div>
        <div className="experience">
          <h2 id="experience">Experience</h2>
          <div className="experience-items">
            <ExperienceItem
              title="Voluntariado IEEE Computer Society"
              date="May 2024 - Dic 2024"
              desc="Fui encargado de la planeacion y documentacion de proyectos
                            lo que me aporto enormemente en desarrollar mi capacidad de 
                            trabajo en equipo."
            />
            <ExperienceItem
              title="Voluntariado en Soporte y Mantenimiento Tecnologico"
              date="Ago 2025 - Dic 2025"
              desc="Participe como organizacor en el Proyecto dee Responsabilidad Social de la UNMSM, enfocado en el
              fortalecimiento de la infraestructura tecnologica de la I.E. 1148 Juana Infantes Vera"
            />
          </div>
        </div>
      </div>
    </>
  );
}
