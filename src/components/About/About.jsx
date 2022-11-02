import React from 'react'
import './About.css'
import ay1 from '../../assets/pictures/ay1.jpg'
import ay2 from '../../assets/pictures/ay2.jpg'
import ay3 from '../../assets/pictures/ay3.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ay3} alt=''/>
          </div>
        </div>
        <div className='about__content'>
<div className="about__cards">
  <article className='about__card'>
    <FaAward className='about__icon'/>
    <h5>Experience</h5>
    <small>2+ Years Working</small>
  </article>
  <article className='about__card'>
    <FiUsers className='about__icon'/>
    <h5>Projects</h5>
    <small>10+ Completed</small>
  </article>
  <article className='about__card'>
    <VscFolderLibrary className='about__icon'/>
    <h5>Clients</h5>
    <small>10+ Worldwide</small>
  </article>
</div>
<p>
----------------
</p>
<a href='#Contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    </div>
   </section>
  )
}

export default About