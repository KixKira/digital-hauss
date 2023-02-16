import React from 'react';
import Logo from  '../../logo.svg';
import './Header.css';

const nav__links = [
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#projects',
        display: 'Projects'
    },
    {
        path: '#start-a-project',
        display: 'Start A Project'
    },
]

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                    <img src={Logo} alt="Digital Hauss Logo" />
                </div>
                <div className="navigation">
                    <ul className="menu">
                        {
                            nav__links.map((item, index) => (
                                <li className="menu__item">
                                    <a href={item.path} className="menu__link">
                                        {item.display}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    </header>
  )
}

export default Header