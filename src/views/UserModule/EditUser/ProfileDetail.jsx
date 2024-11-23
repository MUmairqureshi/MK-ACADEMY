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
import { UserModule } from '../Layout'
import { SubHeader } from '../../../components/SubHeader'
import './index.css'

export const ProfileDetail = () => {
  const [membersData, setMembersData] = useState({})
  const [userData, setUserData] = useState({})
  const [tabs, setTabs] = useState(false)

  useEffect(() => {
    document.title = 'MATH KNOTs | Profile'
  }, [])

  useEffect(() => {
    const LogoutData = localStorage.getItem('login')
    document.querySelector('.loaderBox').classList.remove('d-none')
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
        setMembersData(data.members)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
      .catch(error => {
        console.log(error)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
  }, [])
  return (
    <UserModule>
      <SubHeader title='Profile Details' />
      <div className='container'>
        <div className='profileSection shadow p-md-5 my-5 border'>
          {userData?.role == '2' || userData?.role == '3' ? (
            <div className='tabs mb-4'>
              <button
                type='button'
                className={`tabBtn ${tabs == false ? 'bgActive' : ''}`}
                onClick={() => {
                  setTabs(false)
                }}
              >
                Personal Details
              </button>
              <button
                type='button'
                className={`tabBtn ${tabs == true ? 'bgActive' : ''}`}
                onClick={() => {
                  setTabs(true)
                }}
              >
                Members Details
              </button>
            </div>
          ) : (
            ''
          )}
          {tabs == false ? (
            <div className='userProfile'>
              <div className='titleBox mb-5'>
                <h3>Profile Detail</h3>
              </div>
              <div className='row mb-5'>
                {userData?.company_name && (
                  <div className='col-md-4 mb-4'>
                    <div className='profileData'>
                      <p className='labelName font-weight-bold'>Company Name:</p>
                      <p className='formData'>{userData?.company_name}</p>
                    </div>
                  </div>
                )}

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
                    <p className='labelName font-weight-bold'>
                      Driving License:
                    </p>
                    <p className='formData'>{userData?.driver_license}</p>
                  </div>
                </div>
                <div className='col-md-4 mb-4'>
                  <div className='profileData'>
                    <p className='labelName font-weight-bold'>{userData?.role == '6' ? 'Company ID' : 'Family ID:'}</p>
                    <p className='formData font-weight-bold'>
                      {userData?.family_id}
                    </p>
                  </div>
                </div>
              </div>
              <div className='titleBox mb-5'>
                <h3>Account Details</h3>
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
          ) : (
            <div className='userProfile'>
              <div className='titleBox mb-5'>
                <h3>Members Detail</h3>
              </div>
              {membersData &&
                membersData.map((item, index) => (
                  <div className='row mb-3' key={index}>
                    <div className='col-md-12'>
                      <div className='titleBox mb-4'>
                        <h4>{`Member ${index + 1}`}</h4>
                      </div>
                    </div>
                    <div className='col-md-3 mb-5'>
                      <div className='profileData'>
                        <p className='labelName font-weight-bold'>
                          First Name:
                        </p>
                        <p className='formData'>{item?.first_name}</p>
                      </div>
                    </div>
                    <div className='col-md-3 mb-5'>
                      <div className='profileData'>
                        <p className='labelName font-weight-bold'>
                          Middle Name:
                        </p>
                        <p className='formData'>{item?.middle_name}</p>
                      </div>
                    </div>
                    <div className='col-md-3 mb-5'>
                      <div className='profileData'>
                        <p className='labelName font-weight-bold'>Last Name:</p>
                        <p className='formData'>{item?.last_name}</p>
                      </div>
                    </div>
                    <div className='col-md-3 mb-5'>
                      <div className='profileData'>
                        <p className='labelName font-weight-bold'>DOB:</p>
                        <p className='formData'>{item?.dob}</p>
                      </div>
                    </div>
                    <div className='col-md-3 mb-5'>
                      <div className='profileData'>
                        <p className='labelName font-weight-bold'>Relation:</p>
                        <p className='formData'>{item?.relation_to_member1}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </UserModule>
  )
}
