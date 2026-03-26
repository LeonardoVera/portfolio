import './Footer.css'
import emailIcon from '../assets/contactIcons/email.svg'
import linkedinIcon from '../assets/contactIcons/linkedin.svg'
import githubIcon from '../assets/contactIcons/github.svg'

export function Footer() {
    return (
        <footer>
            <div className="content">
                <h2 id='contact'>Contact</h2>
                <p>Puedes contactar conmigo a través de los siguientes correos
                    o mediante mis redes sociales
                </p>
                <div className="email-items">
                    <div className="email-item">
                        <img src={emailIcon} />
                        <small>leonardovera20037@gmail.com</small>
                    </div>
                    <div className="email-item">
                        <img src={emailIcon} />
                        <small>cristian.vera@unmsm.edu.pe</small>
                    </div>
                </div>
                <div className="social-items">
                    <a href="https://www.linkedin.com/in/leonardovera20/" className='social-item' target='_blank'>
                        <img src={linkedinIcon} />
                    </a>
                    <a href="https://www.github.com/LeonardoVera/" className='social-item' target='_blank'>
                        <img src={githubIcon} />
                    </a>
                </div>
            </div>
        </footer>
    )
}