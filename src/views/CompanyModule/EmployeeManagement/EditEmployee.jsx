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
import { useParams } from 'react-router-dom'
// import './style.css'

export const EditEmployee = () => {
  const [membersData, setMembersData] = useState({})
  const [userData, setUserData] = useState({})
  const [formData, setFormData] = useState({})
  const [tabs, setTabs] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [changePassword, setChangePassword] = useState()
  const [phone, setPhone] = useState('')
  const [passwordMessage, setPasswordMesage] = useState(false)
  const LogoutData = localStorage.getItem('company_login')

  const { id } = useParams()

  useEffect(() => {
    document.title = 'MATH KNOTs | Edit Employee Info'
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
        // console.log(data)
        setFormData(data)
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

  async function handleSubmit () {
    document.querySelector('.loaderBox').classList.remove('d-none')
    const userId = localStorage.getItem('user_id')
    const apiUrl = `https://member.MATH KNOTs.com/backend/api/v1/employee/${id}/`

    delete formData?.last_login
    delete formData?.is_superuser
    delete formData?.is_staff
    delete formData?.is_active
    delete formData?.date_joined
    delete formData?.card_pdf
    delete formData?.groups
    delete formData?.user_permissions
    delete formData?.qr_code

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
        setShowModal(true)
        setTimeout(() => {
          setShowModal(false)
        }, 1500)
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
      <SubHeader title='Edit Employee Details' />
      <div className='container'>
        <div className='profileSection'>
          <div className='confirmation mb-5'>
            <div className='step mb-5'>
              <div className='row'>
                {/* <div className='col-md-12'>
                  <div className='stepTitle'>
                    <h3>Membership Form </h3>
                  </div>
                </div> */}
                <div className='col-md-4 col-lg-3 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='First Name:'
                    required
                    // placeholder='First Name'
                    name='first_name'
                    value={formData?.first_name}
                    onChange={handleChange}
                    // onBlur={handleOnValidate}
                  />
                </div>
                <div className='col-md-4 col-lg-3 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='Middle Name:'
                    // required
                    // placeholder='Middle Name'
                    name='middle_name'
                    value={formData?.middle_name}
                    onChange={handleChange}
                    // onBlur={handleOnValidate}
                  />
                </div>
                <div className='col-md-4 col-lg-3 mb-4'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='Last Name:'
                    required
                    // placeholder='Last Name'
                    name='last_name'
                    value={formData?.last_name}
                    onChange={handleChange}
                    // onBlur={handleOnValidate}
                  />
                </div>
                <div className='col-md-4 col-lg-3 mb-4'>
                  <CustomInput
                    type='date'
                    max='9999-12-31'
                    inputClass='mainInput'
                    label='DOB:'
                    required
                    name='dob'
                    value={formData?.dob}
                    onChange={handleChange}
                    // onBlur={handleOnValidate}
                  />
                </div>
              </div>
            </div>

            {/* second box  */}

            <div className='step mb-5'>
              <div className='row'>
                <div className='col-md-6 mb-4 col-lg-3'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='Username:'
                    required
                    // placeholder='Username'
                    name='username'
                    value={formData?.username}
                    onChange={handleChange}
                    // onBlur={e => {
                    //   handleOnValidate(e)
                    //   handleOnBlur(e)
                    // }}
                  />

                  {/* {nameValidation && (
                    <p className='text-danger'>
                      Username is already registered.
                    </p>
                  )} */}
                </div>
                <div className='col-md-6 mb-4 col-lg-3'>
                  <CustomInput
                    type='email'
                    inputClass='mainInput'
                    label='Email:'
                    required
                    // placeholder='email'
                    name='email'
                    value={formData?.email}
                    onChange={handleChange}
                    disabled
                    // onBlur={e => {
                    //   handleOnValidate(e)
                    //   handleOnBlur(e)
                    // }}
                  />

                  {/* {emailValidation && (
                    <p className='text-danger'>Email is already registered.</p>
                  )} */}
                </div>
                <div className='col-md-6 mb-4 col-lg-3'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='Address:'
                    required
                    // placeholder='Address'
                    name='address'
                    value={formData?.address}
                    onChange={handleChange}
                    // onBlur={handleOnValidate}
                  />
                </div>
                <div className='col-md-6 mb-4 col-lg-3'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='City:'
                    required
                    // placeholder='City'
                    name='city'
                    value={formData?.city}
                    onChange={handleChange}
                    // onBlur={handleOnValidate}
                  />
                </div>
                <div className='col-md-6 mb-4 col-lg-3'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='State:'
                    required
                    // placeholder='State'
                    name='state'
                    value={formData?.state}
                    onChange={handleChange}
                    // onBlur={handleOnValidate}
                  />
                </div>
                <div className='col-md-6 mb-4 col-lg-3'>
                  <CustomInput
                    type='number'
                    inputClass='mainInput'
                    label='Zip Code:'
                    required
                    // placeholder='Zip Code'
                    name='zip_code'
                    value={formData?.zip_code}
                    onChange={handleChange}
                    // onBlur={handleOnValidate}
                  />
                </div>
                <div className='col-md-6 mb-4 col-lg-3'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label=' Best # for Contact:'
                    required
                    // placeholder='Zip Code'
                    name='phone_number'
                    value={formData?.phone_number}
                    onChange={handleChange}
                    // onBlur={handleOnValidate}
                  />
                </div>
                <div className='col-md-6 mb-4 col-lg-3'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label="Driver's License/ID:"
                    required
                    // placeholder="Driver's License/ID"
                    name='driver_license'
                    value={formData?.driver_license}
                    onChange={handleChange}
                    // onBlur={handleOnValidate}
                  />
                </div>

                <div className='col-md-6 mb-4 col-lg-3'>
                  <CustomInput
                    type='text'
                    inputClass='mainInput'
                    label='Referred By:'
                    // required
                    name='referred_by'
                    value={formData.referred_by}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12'>
                <div className='justify-content-between d-flex'>
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
        </div>
      </div>

      <CustomModal
        show={showModal}
        close={() => {
          setShowModal(false)
        }}
        success
        heading={'Employee Update successfully!'}
      />
    </CompanyModule>
  )
}
