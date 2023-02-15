import React from 'react'
import './Hero.css'
import heroImg from '../../images/about.svg'

const Hero = () => {
  return <section className='hero__section'>
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                <div>
                    <p className="hero__title">Agency</p>
                    <h2>We're help to build your dream project</h2>
                    <p className="hero__description">Agency provides a full service range including technical skills, design, business understanding.</p>
                    <div className="hero__btns">
                        <button className="primary__btn">Start a project</button>
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