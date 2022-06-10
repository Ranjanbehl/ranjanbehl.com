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
            <p>Hello, My name is Ranjan Behl. I recently graduated from Purdue University with a Bachelors of Science in Computer Engineering.  I love working on a variety of technologies, including Web Development, Mobile App Development and Machine Learning. My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience. Currently in my career I am trying to get a software engineering position for backend development or full stack development.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About
