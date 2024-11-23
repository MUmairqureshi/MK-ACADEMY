/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 21/09/2023 - 22:43:41
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 21/09/2023
 * - Author          : Saif
 * - Modification    :
 **/
import React from 'react'
import { Header } from './Header'

export const UserModule = props => {
  return (
    <div className='mainBody'>
      <div className='header'>
        <Header />
      </div>
      <div className='container-fluid px-0'>
        <div className='pageContent'>{props.children}</div>
      </div>
    </div>
  )
}
