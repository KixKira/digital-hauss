import React from 'react'
import './Projects.css'
import fsBanner from '../../../images/fs-banner.svg'
import saBanner from '../../../images/sa-banner.svg'
import seBanner from '../../../images/se-banner.svg'
import lpsBanner from '../../../images/lps-banner.svg'
import s23Banner from '../../../images/s23-banner.svg'

const Projects = () => {
    return <section className='projects__section'>
    <div className="container">
        <div className="projects__wrapper">
            <div className="projects__content">
                <h2>Últimos proyectos</h2>
            </div>
        </div>
        <div className="projects__latest">
            <div className="projects__one">
                <img src={fsBanner} alt="fusion-shop-banner" />
            </div>
            <div className="projects__two">
                <img src={saBanner} alt="sound-advisors-banner" />
            </div>
        </div>
        <div className="projects__latest_two">
            <div className="projects__three">
                <img src={seBanner} alt="simultaneo-estudio-banner" />
            </div>
            <div className="projects__four">
                <img src={lpsBanner} alt="lps-banner" />
            </div>
            <div className="projects__five">
                <img src={s23Banner} alt="studio-23-banner" />
            </div>
        </div>
        <div className="projects__btn">
            <button className="primary__btn">Ver más</button>
        </div>
    </div>
  </section>
}

export default Projects