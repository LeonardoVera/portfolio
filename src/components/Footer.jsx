import './Footer.css'
import emailIcon from '../assets/contactIcons/email.svg'
import linkedinIcon from '../assets/contactIcons/linkedin.svg'
import githubIcon from '../assets/techIcons/github.svg'

export function Footer() {
    return (
        <footer>
            <div className="content">
                <div className="footer-info">
                    <h2 id='contact'>Contact</h2>
                    <p>Puedes contactar conmigo a través de los siguientes correos o mediante mis redes sociales.</p>
                    <div className="social-items">
                        <a href="https://www.linkedin.com/in/leonardovera20/" className='social-item' target='_blank' rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://www.github.com/LeonardoVera/" className='social-item' target='_blank' rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div className="footer-contacts">
                    <a href="mailto:leonardovera20037@gmail.com" className="email-item">
                        <img src={emailIcon} alt="Email" />
                        <span>leonardovera20037@gmail.com</span>
                    </a>
                    <a href="mailto:cristian.vera@unmsm.edu.pe" className="email-item">
                        <img src={emailIcon} alt="Email" />
                        <span>cristian.vera@unmsm.edu.pe</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}