import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const UserLayout = (props) => {
  return (
    <div className='mainBody'>
      <div className='header'>
        {/* <TopBar /> */}
        <Header />
      </div>
      <div className='pageContent'>
        {props.children}
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}
