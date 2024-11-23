/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 15/09/2023 - 22:33:15
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 15/09/2023
 * - Author          : Saif
 * - Modification    :
 **/
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './index.css'

export const CompanyHeader = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({});
  const LogoutData = localStorage.getItem('company_login')
  const handleLogout = () => {
   
    fetch(`https://member.MATH KNOTs.com/backend/api/v1/logout/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${LogoutData}`
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        localStorage.removeItem('login')
        console.log(data)
        localStorage.removeItem('login')
        navigate('/login')
        // setUserData(data.user)
        // setMembersData(data.members)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(()=>{
    fetch(`https://member.MATH KNOTs.com/backend/get_user_and_member_data/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${LogoutData}`
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setUserData(data.user)
      })
      .catch(error => {
        console.log(error)
      })
      
  }, [])

  return (
    <header>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-9 col-md-3'>
            <Link to='/user-dashboard' className='logo'>
              <img
                src='https://MATH KNOTs.com/wp-content/themes/listingpro/MATH KNOTs/images/MATH KNOTs.png'
                className='img-fluid'
              />
            </Link>
          </div>
          <div className='col-3 col-md-8 d-flex'>
            <nav className='navbar navbar-expand-lg ms-auto'>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <i className='fas fa-bars'></i>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav align-items-center'>
                  <li>
                    <Link className={`sideLink ${location.pathname.includes('/dashboard') ? 'active' : ''}`} to='/dashboard'>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className={`sideLink ${location.pathname.includes('/employee-management') ? 'active' : ''}`} to='/employee-management'>
                      Employee Management
                    </Link>
                  </li>
                  <li>
                    <Link className={`sideLink ${location.pathname.includes('/company-subscriptions') ? 'active' : ''}`} to='/company-subscriptions'>
                      Subscription
                    </Link>
                  </li>
                  <li>
                    <Link className={`sideLink ${location.pathname.includes('/company-payments') ? 'active' : ''}`} to='/company-payments'>
                      Payments
                    </Link>
                  </li>
                  <li className='dropdown'>
                    <Link
                      className='dropdown-toggle'
                      role='button'
                      aria-expanded='false'
                    >
                      {`Hi ${userData?.username}`}
                    </Link>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link className='dropdown-item' to='/edit-company'>
                          Edit Profile
                        </Link>
                      </li>
                      <li>
                        <Link className='dropdown-item' onClick={handleLogout}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
