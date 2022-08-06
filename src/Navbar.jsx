import React from 'react'
import icon from '../images/travelIcon.png'
import navCss from '../styles/navbar.module.css'

export default function Navbar() {

  return (
    <div className={navCss.content}>
        <img src={icon} className={navCss.icon}/>
        <h3>My Travel Journal</h3>
    </div>
  )
}