import React from 'react'
import './Services.css'

const serviceData = [
    {
        number: '01.',
        title: 'Diseño',
        desc: 'La agencia ofrece una gama completa de servicios que incluye competencias técnicas, diseño.'
    },
    {
        number: '02.',
        title: 'Desarrollo',
        desc: 'La agencia ofrece una gama completa de servicios que incluye competencias técnicas, diseño.'
    },
    {
        number: '03.',
        title: 'Marketing',
        desc: 'La agencia ofrece una gama completa de servicios que incluye competencias técnicas, diseño.'
    }
]

const Services = () => {
  return <section className='services__section'>
    <div className="container">
        <div className="services__wrapper">
            <div className="services__content">
                <h2>A qué nos dedicamos</h2>
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
            <button className="primary__btn">Ver más</button>
        </div>
    </div>
  </section>
}

export default Services