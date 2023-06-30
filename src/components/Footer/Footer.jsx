import React from 'react'
import './Footer.css'
import footerImg from '../../logo.svg'

const quickLinks01 = [
    {
        path: '#',
        icon: 'facebook',
        alt: 'Facebook'
    },
    {
        path: '#',
        icon: 'twitter',
        alt: 'Twitter'
    },
    {
        path: '#',
        icon: 'instagram',
        alt: 'Instagram'
    },
    {
        path: '#',
        icon: 'linkedin',
        alt: 'LinkedIn'
    },
]

const Footer = () => {
  return <footer className='footer'>
    <div className="container">
        <hr />
        <div className="footer__wrapper">
            <div className="footer__logo">
                <img src={footerImg} alt='digital-hauss-logo' />
                <p className="contact">contact@digitalhauss.com</p>
                <p className="number">+58 412 708 9438</p>
            </div>
            <div className="footer__quick-links">
                <div className="quick__links-title">Inicie un proyecto aquí mismo.</div>
                <ul className="quick__links">
                    {
                        quickLinks01.map((item, index) => (
                            <li className="quick__link-item" key={index}>
                                <a href={item.path}>
                                    <img
                                        src={require('../../images/' + item.icon + '.svg')}
                                        alt={item.alt}
                                    />
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <hr />
        <div className="footer__wrapper">
            <div className="footer__copy">
                <p className="copy">Copyright &copy; {new Date().getFullYear()} Digital Hauss. All Rights Reserved</p>
            </div>
            <div className="footer__created">
                <div className="copy">Created by Digital Hauss</div>
            </div>
        </div>
    </div>
  </footer>
}

export default Footer