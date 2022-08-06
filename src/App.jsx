import React from 'react'
import Cards from './Cards'
import Navbar from './Navbar'
import appCss from '../styles/App.module.css'
import data from './data'

export default function App() {

  const cardInfo = data.map((item)=> {
    return (
      <Cards 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className={appCss.content}>
      <Navbar />
      {cardInfo}
    </div>
  )
}
