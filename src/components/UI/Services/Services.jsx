import React from 'react'
import './Services.css'

const serviceData = [
    {
        number: '01.',
        title: 'Design',
        desc: 'Agency provides a full service range including technical skills, design.'
    },
    {
        number: '02.',
        title: 'Development',
        desc: 'Agency provides a full service range including technical skills, design.'
    },
    {
        number: '03.',
        title: 'Marketing',
        desc: 'Agency provides a full service range including technical skills, design.'
    }
]

const Services = () => {
  return <section className='services__section'>
    <div className="container">
        <div className="services__wrapper">
            <div className="services__content">
                <h2>What we do</h2>
            </div>
        </div>
        <div className="service__item-wrapper">
            {
                serviceData.map((item, index) => (
                    <div className="services__item">
                        <p className="service__number">
                            {item.number}
                        </p>
                        <h3 className="service__title">{item.title}</h3>
                        <p className="description">
                            {item.desc}
                        </p>
                    </div>
                ))
            }
        </div>
        <div className="service__btn">
            <button className="primary__btn">More</button>
        </div>
    </div>
  </section>
}

export default Services