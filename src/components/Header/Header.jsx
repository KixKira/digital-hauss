import React, {useEffect, useRef} from 'react';
import Logo from  '../../logo.svg';
import './Header.css';

const nav__links = [
    {
        path: '#about',
        display: 'Acerca'
    },
    {
        path: '#projects',
        display: 'Proyectos'
    },
    {
        path: '#start-a-project',
        display: 'Iniciar un Proyecto'
    },
]

const Header = () => {

    const headerRef = useRef(null)

    const headerFunc = () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('header__shrink')
        } else {
            headerRef.current.classList.remove('header__shrink')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', headerFunc)
        return () => window.removeEventListener('scroll', headerFunc)
    },[])

    return (
        <header className='header' ref={headerRef}>
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
                    <span className="mobile__menu">
                        <i class="ri-menu-line"></i>
                    </span>
                </div>
                <hr />
                
            </div>
        </header>
    )
}

export default Header