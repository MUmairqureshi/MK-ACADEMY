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
import CustomInput from '../../../components/CustomInput'
import './index.css'
import CustomModal from '../../../components/CustomModal'
import CustomButton from '../../../components/CustomButton'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
// import './style.css'

export const EditCompany = () => {
  const [membersData, setMembersData] = useState({})
  const [userData, setUserData] = useState({})
  const [formData, setFormData] = useState({})
  const [tabs, setTabs] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [changePassword, setChangePassword] = useState();
  const [phone, setPhone] = useState('')
  const [passwordMessage, setPasswordMesage] = useState(false);
  const LogoutData = localStorage.getItem('company_login')
  

  useEffect(() => {
    document.title = 'MATH KNOTs | Edit Company Info'
  }, [])

  useEffect(() => {
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
        // console.log(data)
        setFormData(data?.user)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
      .catch(error => {
        console.log(error)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
  }, [])

  console.log(userData)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
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


  async function handleSubmit () {
    document.querySelector('.loaderBox').classList.remove('d-none')
    const userId = localStorage.getItem('user_id')
    const apiUrl = `https://member.MATH KNOTs.com/backend/get_company_details/`

    // Create a FormData object
    const formDataMethod = new FormData()

    // Append the data to the FormData object
    for (const key in formData) {
      formDataMethod.append(key, formData[key])
    }

    console.log(formData)

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
        alert('Company Profile Updated Successfully.')
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
    <CompanyModule>
      <SubHeader title='Edit Company Details' />
      <div className='container'>
        <div className='profileSection shadow p-md-5 my-5 border'>
          <div className='userProfile'>
            <div className='row mb-5'>
              <div className='col-md-6 mb-5'>
                <div className='titleBox'>
                  <h3>Edit Company Detail</h3>
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
              <div className='col-md-3 mb-4'>
                <CustomInput
                  label='Company Name'
                  required
                  id='companyName'
                  type='text'
                  name='company_name'
                  disabled
                  value={formData?.company_name}
                  placeholder='Enter Company Name'
                  labelClass='mainLabel'
                  inputClass='mainInput'
                  onChange={handleChange}
                />
              </div>
              <div className='col-md-3 mb-4'>
                <CustomInput
                  label='First Name'
                  required
                  id='FirstName'
                  type='text'
                  name='first_name'
                  placeholder='Enter First Name'
                  value={formData?.first_name}
                  disabled
                  labelClass='mainLabel'
                  inputClass='mainInput'
                  onChange={handleChange}
                />
              </div>
              <div className='col-md-3 mb-4'>
                <CustomInput
                  label='Last Name'
                  required
                  id='LastName'
                  type='text'
                  name='last_name'
                  placeholder='Enter Last Name'
                  value={formData?.last_name}
                  disabled
                  labelClass='mainLabel'
                  inputClass='mainInput'
                  onChange={handleChange}
                />
              </div>

              <div className='col-md-3 mb-4'>
                  <label>
                  Company Contact No<span>*</span>
                  </label>
                  <PhoneInput
                    defaultCountry='us'
                    value={formData.phone_number} // Ensure value is not undefined or null
                    name='phone_number'
                    className='phoneField'
                    onChange={phone => {
                      setPhone(phone)
                      setFormData({
                        ...formData,
                        phone_number: phone
                      })
                      console.log(formData)
                    }}
                  />
                </div>

              {/* <div className='col-md-3 mb-4'>
                <CustomInput
                  label='Company Contact No'
                  required
                  value={formData?.phone_number}
                  id='number'
                  type='number'
                  name='phone_number'
                  placeholder='Enter Company No'
                  labelClass='mainLabel'
                  inputClass='mainInput'
                  onChange={handleChange}
                />
              </div> */}
              <div className='col-md-3 mb-4'>
                <CustomInput
                  label='Company Email'
                  required
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Enter Company Email'
                  value={formData?.email}
                  disabled
                  labelClass='mainLabel'
                  inputClass='mainInput'
                  onChange={handleChange}
                />
              </div>

              <div className='col-md-3 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='Referred By:'
                    // required
                    name='referred_by'
                    value={formData?.referred_by}
                    onChange={handleChange}
                  />
                </div>
              <div className='col-md-3 mb-4'>
                <CustomInput
                  label='Address'
                  required
                  id='address'
                  type='text'
                  name='address'
                  placeholder='Enter Address'
                  value={formData?.address}
                  labelClass='mainLabel'
                  inputClass='mainInput'
                  onChange={handleChange}
                />
              </div>
              <div className='col-md-3 mb-4'>
                <CustomInput
                  label='City'
                  required
                  id='city'
                  type='text'
                  name='city'
                  placeholder='Enter City'
                  value={formData?.city}
                  labelClass='mainLabel'
                  inputClass='mainInput'
                  onChange={handleChange}
                />
              </div>
              <div className='col-md-3 mb-4'>
                <CustomInput
                  label='Zip Code'
                  required
                  id='zipcode'
                  type='number'
                  name='zip_code'
                  placeholder='Enter Zip Code'
                  value={formData?.zip_code}
                  labelClass='mainLabel'
                  inputClass='mainInput'
                  onChange={handleChange}
                />
              </div>
              <div className='col-md-3 mb-4'>
                <CustomInput
                  label='User Name'
                  required
                  id='UserName'
                  type='text'
                  name='username'
                  placeholder='Enter User Name'
                  disabled
                  value={formData?.username}
                  labelClass='mainLabel'
                  inputClass='mainInput'
                  onChange={handleChange}
                />
              </div>
              <div className='col-md-12'>
                <div className='mt-4'>
                  <CustomButton
                    variant='primaryButton'
                    text='Update'
                    type='button'
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
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
    </CompanyModule>
  )
}
