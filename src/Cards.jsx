import React from 'react'
import cardCss from '../styles/cards.module.css'
import pin from '../images/pin.png'

export default function Cards(props) {

  return (
    <div className={cardCss.content}>
      <img src={`/images/${props.item.coverImg}`} className={cardCss.photo}/>
      <div className={cardCss.info}>
          <div className={cardCss.mapInfo}>
              <img src={pin} className={cardCss.pin}/>
              <p>{props.item.state}</p>
              <p>view on Google Maps</p>
          </div>
          <p className={cardCss.title}>{props.item.title}</p>
          <p className={cardCss.date}>{props.item.date}</p>
          <p>{props.item.description}</p>
      </div> 
    </div>
  )
}