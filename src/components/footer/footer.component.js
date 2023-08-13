// components/Footer.js
import React from 'react';
import './footer.style.css';
import githubLogo from '../../imgs/GitHub_logo.png';
import facebookLogo from '../../imgs/Facebook_logo.png';
import igLogo from '../../imgs/Ig_logo.png';

function Footer()
{
    return (
        <footer>
            <div className="logo-con">
                <div className="logo">
                    <a href="https://www.facebook.com/garky.huoye" className="contact-button">
                        <img src={facebookLogo} alt="Facebook" className='rounded-3 fa' />
                    </a>
                </div>
                <div className="logo">
                    <a href="https://www.instagram.com/p2nxts_/" className="contact-button">
                        <img src={igLogo} alt="Instagram" className='rounded-3' />
                    </a>
                </div>
                <div className="logo">
                    <a href="https://github.com/Thanapoom-Dechalamai" className="contact-button">
                        <img src={githubLogo} alt="Github" className='rounded-3' />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
