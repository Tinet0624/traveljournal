import React from 'react'
import cardCss from '../styles/cards.module.css'
import pin from '../images/pin.png'
import photo from '../images/westvirginia.jpg'

export default function Cards() {

  return (
    <div className={cardCss.content}>
      <img src={photo} className={cardCss.photo}/>
      <div className={cardCss.info}>
          <div className={cardCss.mapInfo}>
              <img src={pin} className={cardCss.pin}/>
              <p>STATE</p>
              <p>view on Google Maps</p>
          </div>
          <p className={cardCss.title}>Place</p>
          <p className={cardCss.date}>Date</p>
          <p>description</p>
      </div> 
    </div>
  )
}