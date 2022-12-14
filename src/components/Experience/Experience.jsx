import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='Experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
           </div> </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
         </div>   </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JS</h4>
              <small className='text-light'>Experienced</small>
         </div>   </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
    </div>        </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Flutter</h4>
              <small className='text-light'>Experienced</small>
    </div>        </article>

           

          </div>
        </div>
        <div className="experiencee_backend">
        <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
  </div>          </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
            </div>    </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
  </div>          </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>React</h4>
              <small className='text-light'>Experienced</small>
 </div>           </article>

            

           

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience