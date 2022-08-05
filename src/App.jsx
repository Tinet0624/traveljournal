import React from 'react'
import Cards from './Cards'
import Navbar from './Navbar'
import appCss from '../styles/App.module.css'

export default function App() {

  return (
    <div className={appCss.content}>
      <Navbar />
      <Cards />
    </div>
  )
}
