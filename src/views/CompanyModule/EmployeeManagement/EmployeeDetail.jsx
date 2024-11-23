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
import { CompanyModule } from '../Layout'
import { SubHeader } from '../../../components/SubHeader'
import { useParams } from 'react-router-dom'
import './index.css'

export const EmployeeDetails = () => {
  const [membersData, setMembersData] = useState({})
  const [userData, setUserData] = useState({})
  const [tabs, setTabs] = useState(false)
  const { id } = useParams()
  const LogoutData = localStorage.getItem('company_login')

  useEffect(() => {
    document.title = 'MATH KNOTs | Employee Details'
  }, [])

  useEffect(() => {
    document.querySelector('.loaderBox').classList.remove('d-none')
    fetch(`https://member.MATH KNOTs.com/backend/api/v1/employee/${id}/`, {
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
        setUserData(data)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
      .catch(error => {
        console.log(error)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
  }, [])
  return (
    <CompanyModule>
      <SubHeader title='Employee Detail' />
      <div className='container'>
        <div className='profileSection shadow p-md-5 my-5 border'>
          <div className='userProfile'>
            <div className='titleBox mb-5'>
              <h3>Employee Profile Detail</h3>
            </div>
            <div className='row mb-5'>
              <div className='col-md-4 mb-4'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>First Name:</p>
                  <p className='formData'>{userData?.first_name}</p>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Middle Name:</p>
                  <p className='formData'>{userData?.middle_name}</p>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Last Name:</p>
                  <p className='formData'>{userData?.last_name}</p>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Phone Number:</p>
                  <p className='formData'>{userData?.phone_number}</p>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>DOB:</p>
                  <p className='formData'>{userData?.dob}</p>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Address:</p>
                  <p className='formData'>{userData?.address}</p>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>City:</p>
                  <p className='formData'>{userData?.city}</p>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>State:</p>
                  <p className='formData'>{userData?.state}</p>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Zip Code:</p>
                  <p className='formData'>{userData?.zip_code}</p>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>Driving License:</p>
                  <p className='formData'>{userData?.driver_license}</p>
                </div>
              </div>

              {userData?.referred_by && (
                <div className='col-md-4 mb-5'>
                  <div className='profileData'>
                    <p className='labelName font-weight-bold'>Referred By:</p>
                    <p className='formData'>{userData?.referred_by}</p>
                  </div>
                </div>
              )}
            </div>
            <div className='titleBox mb-5'>
              <h3>Employee Account Details</h3>
            </div>
            <div className='row'>
              <div className='col-md-4 mb-4'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>User Name:</p>
                  <p className='formData'>{userData?.username}</p>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='profileData'>
                  <p className='labelName font-weight-bold'>User Email:</p>
                  <p className='formData'>{userData?.email}</p>
                </div>
              </div>
              {userData?.additional_member &&
              userData?.additional_member > 0 ? (
                <div className='col-md-4 mb-4'>
                  <div className='profileData'>
                    <p className='labelName font-weight-bold'>
                      Additional Members:
                    </p>
                    <p className='formData'>{`${userData?.additional_member} Members`}</p>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </CompanyModule>
  )
}
