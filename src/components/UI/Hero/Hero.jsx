import React from 'react'
import './Hero.css'
import heroImg from '../../../images/hero.svg'

const Hero = () => {
  return <section className='hero__section'>
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                <div>
                    <p className="hero__title">Agencia</p>
                    <h2>Le ayudamos a construir su proyecto soñado</h2>
                    <p className="hero__description">La agencia ofrece una gama completa de servicios que incluye conocimientos técnicos, diseño y comprensión del negocio.</p>
                    <div className="hero__btns">
                        <button className="primary__btn">Iniciar un proyecto</button>
                    </div>
                </div>
            </div>
            <div className="hero__img">
                <img src={heroImg} alt="digital-hauss-hero" />
            </div>
        </div>
    </div>
  </section>
}

export default Hero