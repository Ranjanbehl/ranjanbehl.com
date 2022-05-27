import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'WIFICoin',
    github: 'https://github.com/Ranjanbehl/WIFICoin'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Roguelike Terminal Game',
    github: 'https://github.com/Ranjanbehl/ECE_39595_Project'
  },
  {
    id: 3,
    image: IMG3,
    title: 'MicroC Compiler',
    github: 'https://github.com/Ranjanbehl/Compilers_Project'
  },
  {
    id: 4,
    image: IMG4,
    title: '4',
    github: 'https://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: '5',
    github: 'https://github.com'
  },
  {
    id: 6,
    image: IMG6,
    title: '6',
    github: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My React Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt= {title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'> Github</a>
                {/* <a href='https://github.com' className='btn btn-primary' target='_blank'> Live Demo</a> */}
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio