import React from 'react'
import './Portfolio.css'
import test1 from 'C:/Users/Ayoub Ajdour/my-portfolio/src/assets/pictures/test1.webp'
const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio_item'>
          <div className='portflio__item-image'>
          <img src={test1} alt=''/>
          </div>
          
          <h3>This is a portfolio item title</h3>
        <a href='https://github.com' className='btn' target='_blank'>Github</a>
        <a href='https://youtube.com' className='btn btn-primay' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio