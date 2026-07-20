import { useState, useEffect } from 'react'
import iconLogo from '../assets/logoWhite.png'
import './Header.css'

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Run handler on mount in case the page is already scrolled
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <>
        <header className={scrolled ? 'scrolled' : ''}>
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