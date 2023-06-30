import React from 'react'
import './About.css'
import aboutImg from '../../../images/about.svg'

function About() {
  return <section className='about__section'>
    <div className="container">
        <div className="about__wrapper">
            <div className="about__img">
                <img src={aboutImg} alt="digital-hauss-about" />
            </div>
            <div className="about__content">
                <div>
                    <p className="about__title">Acerca de</p>
                    <h2>Una agencia de diseño de experiencias</h2>
                    <p className="about__description">Capacidad de ponerse en el lugar del comerciante. Nuestro objetivo es asociarse a largo plazo y trabajar como una extensión del equipo del comerciante.</p>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default About