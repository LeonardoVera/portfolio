import iconLogo from '../assets/logoWhite.png'
import './Header.css'

export function Header() {
    return <>
        <header>
            <img src={iconLogo} />
            <div className="nav-bar">
                <a href="#home" className="nav-bar-item">Home</a>
                <a href="#projects" className="nav-bar-item">Projects</a>
                <a href="#experience" className="nav-bar-item">Experience</a>
                <a href="#contact" className="nav-bar-item">Contact</a>
            </div>
        </header>
    </>
}