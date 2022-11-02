import React from 'react'
import './Header.css'
import ay from 'C:/Users/Ayoub Ajdour/my-portfolio/src/assets/pictures/ay.png'
import HeaderSocials from './HeaderSocials'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'am</h5>
            <h1>Ayoub Ajdour</h1>
            <h5 className='text-light'>Softwer Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className='me'>
              <img src={ay} alt='Me'/>
            </div>
            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header