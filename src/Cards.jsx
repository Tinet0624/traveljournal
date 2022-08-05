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
                <p className="state">state</p>
                <p className="maps">view on Google Maps</p>
            </div>
            <h3 className="title">Place</h3>
            <p className="date">Date</p>
            <p className="about">description</p>
        </div>
    </div>
  )
}