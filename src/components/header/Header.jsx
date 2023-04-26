import React from 'react'
import "./header.css"

// import ME from "../../assets/me.png"
import ME from "../../assets/asttt.png"
import AIR from "../../assets/airr.png"
import MOON from "../../assets/moon.png"
import HeaderSocials from './HeaderSocials'
import Typer from './Typer'

const Header = () => {
  return (
    <div className=' header container header__container'>
      <h1 data-text="S&nbsp;H&nbsp;I&nbsp;V&nbsp;A&nbsp;M">S&nbsp;H&nbsp;I&nbsp;V&nbsp;A&nbsp;M</h1>
      
      {/* <Typer className='text-light' /> */}
  
    
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="me" className ="imagine"/>
      </div>
      <div className="air">
        <img src={AIR} alt="me" className ="imagine"/>
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
  )
}

export default Header