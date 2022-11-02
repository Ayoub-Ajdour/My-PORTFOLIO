import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='Services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className=' container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Developement</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Mobile Developement</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
            
            <li>
            <BiCheck className='service__list-icon'/>
            <p>test test test test test test test test </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services