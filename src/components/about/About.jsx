import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt='About'/>
            </div>
          </div>
          
          <div className='about__content'>
              {/* <div className='about__cards'>
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>Years Working</small>
                </article>
              </div> */}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit deleniti vitae nihil impedit mollitia modi aliquid ex totam ipsum laborum ratione hic temporibus consectetur, pariatur animi. Adipisci, error. Esse, quia.</p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About