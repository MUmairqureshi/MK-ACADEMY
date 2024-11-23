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
import CustomInput from '../../../components/CustomInput'
import './index.css'
import CustomModal from '../../../components/CustomModal'
import CustomButton from '../../../components/CustomButton'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

export const UserScreenEdit = () => {
  const [membersData, setMembersData] = useState({})
  const [userData, setUserData] = useState({})
  const [formData, setFormData] = useState({})
  const [tabs, setTabs] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [changePassword, setChangePassword] = useState()
  const [passwordMessage, setPasswordMesage] = useState(false);
  const [phone, setPhone] = useState('')

  useEffect(() => {
    document.title = 'MATH KNOTs | Edit Profile'
  }, [])

  useEffect(() => {
    document.querySelector('.loaderBox').classList.remove('d-none')
    const LogoutData = localStorage.getItem('login')
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
        // console.log(data)
        setUserData(data.user)
        setMembersData(data.members)
        setFormData(data)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
      .catch(error => {
        console.log(error)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
  }, [])

  const handleMemberChange = (e, memberIndex) => {
    const { name, value } = e.target
    const updatedMembers = [...formData.members]
    updatedMembers[memberIndex][name] = value
    setFormData(prevData => ({ ...prevData, members: updatedMembers }))
    console.log(formData)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value
    })
    console.log(userData)
  }

  const handleChangePassword = e => {
    const { name, value } = e.target
    setChangePassword({
      ...changePassword,
      [name]: value
    })
    console.log(changePassword)
  }

  const hanldeSubmitPassword = async e => {
    e.preventDefault();
  
    document.querySelector('.loaderBox').classList.remove('d-none');
    const LogoutData = localStorage.getItem('login');
    const userId = localStorage.getItem('user_id');
    const apiUrl = `https://member.MATH KNOTs.com/backend/api/v1/users/${userId}/change_password/`;
  
    // Create a FormData object
    const formDataMethod = new FormData();
  
    // Append the data to the FormData object
    for (const key in changePassword) {
      formDataMethod.append(key, changePassword[key]);
    }
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Token ${LogoutData}`
        },
        body: formDataMethod
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('abc', responseData);
        document.querySelector('.loaderBox').classList.add('d-none');
        setShowModal(false);
        setPasswordMesage(true)
        setTimeout(()=>{
          setPasswordMesage(false)
        },2000)
      } else {
        throw new Error('Failed to update password');
      }
    } catch (error) {
      document.querySelector('.loaderBox').classList.add('d-none');
      console.error('Error:', error);
    }
  };
  
  async function handleSubmit() {
    document.querySelector('.loaderBox').classList.remove('d-none')
    const LogoutData = localStorage.getItem('login')
    const userId = localStorage.getItem('user_id')
    const apiUrl = `https://member.MATH KNOTs.com/backend/api/v1/users/${userId}/`

    // Create a FormData object
    const formDataMethod = new FormData()

    // Append the data to the FormData object
    for (const key in userData) {
      // if(key == 'dob') {
      //   formDataMethod.append(key, yearFormat(userData[key]))
      // } else {
      // formDataMethod.append(key, userData[key])
      // }

      formDataMethod.append(key, userData[key])
    }

    console.log(userData)

    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          Authorization: `Token ${LogoutData}`
        },
        body: formDataMethod
      })

      if (response.ok) {
        const responseData = await response.json()
        console.log(responseData)
        document.querySelector('.loaderBox').classList.add('d-none')
        alert('Profile Update Successfully.')
        // Redirect or show a success message to the user
      } else {
        document.querySelector('.loaderBox').classList.add('d-none')
        // Handle signup failure, e.g., show an error message to the user
      }
    } catch (error) {
      document.querySelector('.loaderBox').classList.add('d-none')
      console.error('Error:', error)
    }
  }

  const handleUpdateMembers = async e => {
    e.preventDefault()
    document.querySelector('.loaderBox').classList.remove('d-none')
    const LogoutData = localStorage.getItem('login')
    const userId = localStorage.getItem('user_id')
    const apiUrl = `https://member.MATH KNOTs.com/backend/get_user_and_member_data/
    `

    // Create a FormData object
    const formDataMethod = new FormData()

    const memberData = { formData }
    delete formData?.user
    // Append the data to the FormData object

    formDataMethod.append('members', JSON.stringify(formData?.members))

    // console.log(formData?.members)

    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${LogoutData}`
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        const responseData = await response.json()
        console.log(responseData)
        document.querySelector('.loaderBox').classList.add('d-none')
        alert("Member's Update Successfully.")
        // Redirect or show a success message to the user
      } else {
        document.querySelector('.loaderBox').classList.add('d-none')
        // Handle signup failure, e.g., show an error message to the user
      }
    } catch (error) {
      document.querySelector('.loaderBox').classList.add('d-none')
      console.error('Error:', error)
    }
  }



  return (
    <UserModule>
      <SubHeader title='Edit User Details' />
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
              <div className='row mb-5'>
                <div className='col-md-6 mb-5'>
                  <div className='titleBox'>
                    <h3>Profile Details</h3>
                  </div>
                </div>
                <div className='col-md-6 mb-5'>
                  <div className='titleBox text-right'>
                    <button
                      type='button'
                      className='bg-transparent border-0 text-danger'
                      onClick={() => {
                        setShowModal(true)
                      }}
                    >
                      Change Password
                    </button>
                  </div>
                </div>
                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='First Name:'
                    required
                    placeholder='First Name'
                    name='first_name'
                    value={userData?.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='Middle Name:'
                    required
                    placeholder='Middle Name'
                    name='middle_name'
                    value={userData?.middle_name}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='Last Name:'
                    required
                    placeholder='Last Name'
                    name='last_name'
                    value={userData?.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='date'
                    inputClass='mainInput'
                    label='DOB:'
                    required
                    name='dob'
                    // max='09-04-3000'
                    value={userData?.dob}
                    onChange={handleChange}
                  />
                </div>

                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='Referred By:'
                    // required
                    name='referred_by'
                    value={userData?.referred_by}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='Address:'
                    required
                    placeholder='Address'
                    name='address'
                    value={userData?.address}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='City:'
                    required
                    placeholder='City'
                    name='city'
                    value={userData?.city}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='State:'
                    required
                    placeholder='State'
                    name='state'
                    value={userData?.state}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='number'
                    inputClass='mainInput'
                    label='Zip Code:'
                    required
                    placeholder='Zip Code'
                    name='zip_code'
                    value={userData?.zip_code}
                    onChange={handleChange}
                  />
                </div>
                {/* <div className='col-md-4 mb-4'>
                  <label>
                  Company Contact No<span>*</span>
                  </label>
                  <PhoneInput
                    defaultCountry='us'
                    value={userData?.phone_number} 
                    name='phone_number'
                    className='phoneField'
                    onChange={phone => {
                      setPhone(phone)
                      setUserData({
                        ...userData,
                        phone_number: phone
                      })
                      console.log(formData)
                    }}
                  />
                </div> */}
                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='Best # for Contact:'
                    required
                    name='phone_number'
                    placeholder='Best # for Contact'
                    value={userData?.phone_number}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label="Driver's License/ID:"
                    required
                    placeholder="Driver's License/ID"
                    name='driver_license'
                    value={userData?.driver_license}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='titleBox mb-5'>
                <h3>Account Details</h3>
              </div>
              <div className='row'>
                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='Username:'
                    required
                    placeholder='Username'
                    name='username'
                    value={userData?.username}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-md-4 mb-4'>
                  <CustomInput
                    type='email'
                    inputClass='mainInput'
                    label='email:'
                    required
                    placeholder='email'
                    name='email'
                    value={userData?.email}
                    disabled
                  />
                </div>

                {userData?.additional_member > 0 && (
                  <div className='col-md-4 mb-4'>
                    <div className='profileData'>
                      <p className='labelName font-weight-bold'>
                        Additional Members:
                      </p>
                      <p className='formData'>{`${userData?.additional_member} Members`}</p>
                    </div>
                  </div>
                )}

                <div className='row'>
                  <div className='col-md-12'>
                    <button
                      className='customButton primaryButton me-3 mb-2'
                      onClick={handleSubmit}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='userProfile'>
              <div className='titleBox mb-5'>
                <h3>Members Detail</h3>
              </div>
              <form onSubmit={handleUpdateMembers}>
                {formData?.members?.map((member, index) => (
                  <div className='row step mb-5' key={index}>
                    <div className='col-md-4 mb-4'>
                      <CustomInput
                        type='text'
                        inputClass='mainInput'
                        label={`First Name for Member ${index + 1}:`}
                        required
                        placeholder='First Name'
                        name='first_name'
                        value={member?.first_name}
                        onChange={e => handleMemberChange(e, index)}
                      />
                    </div>
                    <div className='col-md-4 mb-4'>
                      <CustomInput
                        type='text'
                        inputClass='mainInput'
                        label={`Last Name for Member ${index + 1}:`}
                        required
                        placeholder='Last Name'
                        name='last_name'
                        value={member?.last_name}
                        onChange={e => handleMemberChange(e, index)}
                      />
                    </div>
                    <div className='col-md-4 mb-4'>
                      <CustomInput
                        type='text'
                        inputClass='mainInput'
                        label={`Middle Name for Member: ${index + 1}`}
                        required
                        placeholder='Middle Name'
                        name={`middle_name`}
                        value={member?.middle_name}
                        onChange={e => handleMemberChange(e, index)}
                      />
                    </div>
                    <div className='col-md-6 mb-4'>
                      <CustomInput
                        type='date'
                        inputClass='mainInput'
                        label={`DOB for Member: ${index + 1}`}
                        required
                        name={`dob`}
                        value={member?.dob}
                        onChange={e => handleMemberChange(e, index)}
                      />
                    </div>
                    <div className='col-md-6 mb-4'>
                      <CustomInput
                        type='text'
                        inputClass='mainInput'
                        label={`Relation to Family for Member: 1`}
                        required
                        name={`relation_to_member1`}
                        value={member?.relation_to_member1}
                        onChange={e => handleMemberChange(e, index)}
                      />
                    </div>
                  </div>
                ))}
                <div className='row'>
                  <div className='col-md-12'>
                    <button
                      className='customButton primaryButton me-3 mb-2'
                      type='submit'
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <CustomModal
        show={showModal}
        heading='Change Password'
        close={() => {
          setShowModal(false)
        }}
      >
        <div className='changePassword'>
          <CustomInput
            type='password'
            inputClass='mainInput'
            label={`Old Password`}
            required
            placeholder='Enter Old Password'
            name='old_password'
            onChange={handleChangePassword}
          />

          <CustomInput
            type='password'
            inputClass='mainInput'
            label={`New Password`}
            required
            placeholder='Enter New Password'
            name='new_password'
            onChange={handleChangePassword}
          />

          <CustomButton
            text='Update'
            className='primaryButton mt-3'
            onClick={hanldeSubmitPassword}
          />
        </div>
      </CustomModal>

      <CustomModal
        bodyClass='p-5'
        show={passwordMessage}
        close={() => {
          setChangePassword(false)
        }}
        success
        heading={'Password Update Successfully!'}
      />
    </UserModule>
  )
}
