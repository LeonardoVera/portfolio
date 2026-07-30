import { useState, useEffect, useRef } from 'react'
import iconLogo from '../assets/logoWhite.png'
import './Header.css'

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const sentinelRef = useRef(null);

    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setScrolled(!entry.isIntersecting);
            },
            {
                threshold: [0],
            }
        );

        observer.observe(sentinel);

        return () => {
            if (sentinel) {
                observer.unobserve(sentinel);
            }
        };
    }, []);

    return <>
        <div 
            ref={sentinelRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '10px',
                width: '100%',
                pointerEvents: 'none'
            }}
        />
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