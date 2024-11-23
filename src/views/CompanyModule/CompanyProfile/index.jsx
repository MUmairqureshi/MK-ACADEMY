/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 21/09/2023 - 22:44:56
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 21/09/2023
 * - Author          : Saif
 * - Modification    :
 **/
import React, { useEffect, useState } from 'react'

import './index.css'
import { SubHeader } from '../../../components/SubHeader'
import { CompanyModule } from '../Layout'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../../components/CustomButton'

export const CompanyProfile = () => {
  const [membersData, setMembersData] = useState({})
  const [userData, setUserData] = useState({})
  const [tabs, setTabs] = useState(false)
  const navigate = useNavigate()
  const Allowed = localStorage.getItem('allowedEmployee')
  const isPaid = localStorage.getItem('isPaid')
  const totalEmployee = localStorage.getItem('number_of_employees')

  useEffect(() => {
    document.title = 'MATH KNOTs | Company Dashoard'
  }, [])

  const handleRoute = () => {
    navigate('/create-subscription')
  }

  // const handleRouteUpgrade = () => {
  //   navigate('/upgrade-subscription')
  // }

  useEffect(() => {
    const LogoutData = localStorage.getItem('company_login')
    document.querySelector('.loaderBox').classList.remove('d-none')
    fetch(`https://member.MATH KNOTs.com/backend/get_company_details/`, {
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
        // setMembersData(data.members)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
      .catch(error => {
        console.log(error)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
  }, [])
  return (
    <CompanyModule>
      <SubHeader title='Company Profile' />
      <div className='container'>
        <div className='profileSection shadow p-md-5 my-5 border'>
          <div className='userProfile'>
            <div className='row justify-content-between'>
              <div className='mb-5 col-md-4'>
                <div className='titleBox'>
                  <h3>Company Details</h3>
                </div>
              </div>
              <div className='mb-5 col-md-3'>
                <div className='addSubs text-right'>
                 

                  {Allowed == 0 && (
                    <CustomButton
                      text='Add Subsciption'
                      variant='primaryButton'
                      onClick={handleRoute}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className='row mb-5'>
              <div className='col-md-4 mb-5'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Company Name:</p>
                  <p className='formData'>{userData?.company_name}</p>
                  {/* <p className='formData'>ABC Company</p> */}
                </div>
              </div>
              <div className='col-md-4 mb-5'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>First Name:</p>
                  <p className='formData'>{userData?.first_name}</p>
                </div>
              </div>
              <div className='col-md-4 mb-5'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Last Name:</p>
                  <p className='formData'>{userData?.last_name}</p>
                </div>
              </div>
              <div className='col-md-4 mb-5'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>User Name:</p>
                  <p className='formData'>{userData?.username}</p>
                </div>
              </div>
              <div className='col-md-4 mb-5'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>
                    Company Contact No:
                  </p>
                  <p className='formData'>{userData?.phone_number}</p>
                </div>
              </div>
              <div className='col-md-4 mb-5'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Company Email:</p>
                  <p className='formData'>{userData?.email}</p>
                </div>
              </div>
              <div className='col-md-4 mb-5'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Address:</p>
                  <p className='formData'>{userData?.address}</p>
                </div>
              </div>
              <div className='col-md-4 mb-5'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>City:</p>
                  <p className='formData'>{userData?.city}</p>
                </div>
              </div>
              <div className='col-md-4 mb-5'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Zip Code:</p>
                  <p className='formData'>{userData?.zip_code}</p>
                </div>
              </div>
              <div className='col-md-4 mb-5'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Company ID:</p>
                  <p className='formData'>{userData?.family_id}</p>
                </div>
              </div>

              <div className='col-md-4 mb-5'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Referred By:</p>
                  <p className='formData'>{userData?.referred_by}</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </CompanyModule>
  )
}
