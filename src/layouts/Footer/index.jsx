import React from 'react'

import Location from '/logos/logo-localisation.png'
import Instagram from '/logos/logo-instagram.png'
import Linkedin from '/logos/logo-linkedin.png'
import Youtube from '/logos/logo-youtube.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__location">
                <img src={Location} alt="logo localisation" />
                <p>Paris, France</p>
            </div>
            <p className='footer__copyright'>© 2025 Caroline Lopez. All rights reserved.</p>
            <div className="footer__socials">
                <p className="footer__socials--text">N'hesite pas à me suivre sur mes réseaux</p>
                <div className="footer__socials--links">
                    <a href="https://www.instagram.com/david.charancon/" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="logo instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/david-charan%C3%A7on/" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="logo linkedin" />
                    </a>
                    <a href="https://www.youtube.com/@el-dadouquito" target="_blank" rel="noopener noreferrer">
                        <img src={Youtube} alt="logo youtube" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer