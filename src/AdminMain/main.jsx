/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 30/08/2023 - 00:43:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/08/2023
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/umd/popper.min.js'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_live_51JpH4fFAe9a6wzuz1wK40JDvfTqALWLleMgWBeShsEOeufTkZm0BtmIKwRBA0YXZ66EyGFlik0ydR0kvzXtXOKH200TrLFvc6M')

ReactDOM.createRoot(document.getElementById('root')).render(
  <Elements stripe={stripePromise}>
    <App />
    <div className="loaderBox d-none">
      <div className="spinner"></div>
    </div>
  </Elements>
)
