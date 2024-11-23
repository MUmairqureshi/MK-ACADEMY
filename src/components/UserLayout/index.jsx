import React from 'react'
import { Header } from '../../views/Layout/header'

export const RegisterUserLayout = (props) => {
    return (
      <div className='mainBody'>
        <div className='header'>
          <Header />
        </div>
        <div className='pageContent'>
          {props.children}
        </div>
      </div>
    )
  }