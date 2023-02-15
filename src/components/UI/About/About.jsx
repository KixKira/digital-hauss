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
                    <p className="about__title">About</p>
                    <h2>An Experience Design Agency</h2>
                    <p className="about__description">
                    Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
                    </p>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default About