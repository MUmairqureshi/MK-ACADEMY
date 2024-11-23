/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 21/09/2023 - 22:55:49
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 21/09/2023
 * - Author          : Saif
 * - Modification    :
 **/
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// import "./style.css";
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { UserLayout } from '../Layout'
import { SubHeader } from '../../components/SubHeader'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import './style.css'

const RegistrationForm = () => {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')

  const handleNavigate = () => {
    navigate('/login')
  }

  const [formData, setFormData] = useState({
    role: 5
  })
  // const [phone, setPhone] = useState('')

  console.log(formData.password)

  useEffect(() => {
    document.title = 'MATH KNOTs | User Registration Form'
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()
    if (formData?.password === formData?.password_confirmation) {
      document.querySelector('.loaderBox').classList.remove('d-none')
      event.preventDefault()
      const formDataMethod = new FormData()
      // formDataMethod.append('username', formData.username);
      // formDataMethod.append('password', formData.password);

      for (const key in formData) {
        formDataMethod.append(key, formData[key])
      }

      console.log(formData)

      const apiUrl = 'https://member.MATH KNOTs.com/backend/company_signup/'

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          body: formDataMethod
        })

        const responseData = await response.json()
        if (response.ok) {
          // localStorage.setItem('company', responseData?.token)
          // localStorage.setItem('user_id', responseData?.user_id)
          // console.log('Login Response:', responseData)
          document.querySelector('.loaderBox').classList.add('d-none')
          alert('Company Registered Successfully.')
          navigate('/login')
        } else {
          document.querySelector('.loaderBox').classList.add('d-none')
          alert(responseData?.errors?.email[0])

          console.error('Login failed')
        }
      } catch (error) {
        document.querySelector('.loaderBox').classList.add('d-none')
        console.error('Error:', error)
      }
    } else {
      alert('Passwords do not match.')
    }
  }

  // const handleSubmit = async event => {
  //   event.preventDefault()
  //   if (formData?.password === formData?.password_confirmation) {
  //     document.querySelector('.loaderBox').classList.remove('d-none')
  //     await signUpCompany()
  //   } else {
  //     alert('Password and confirm password are not same.')
  //   }

  // }

  return (
    <>
      <UserLayout>
        <SubHeader title='RESIGTER FORM'></SubHeader>
        <div className='container'>
          {/* <div className='loginTab'>
            <button className='authBtns' onClick={handleNavigate} type='button'>
              Login
            </button>
            <button className='authBtns activeLogin' type='button'>
              Register as a Company
            </button>
          </div> */}
          <div className='bg-light formArea p-5 rounded-4 shadow'>
            <form>
              <div className='row'>
                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label='User Name'
                    required
                    id='UserName'
                    type='text'
                    name='username'
                    placeholder='Enter User Name'
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    onChange={event => {
                      setFormData({
                        ...formData,
                        username: event.target.value
                      })
                      console.log(event.target.value)
                    }}
                  />
                </div>
                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label='Parent/LG Full Name'
                    required
                    id='companyName'
                    type='text'
                    name='company_name'
                    placeholder='Enter Parent/LG Full Name'
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    onChange={event => {
                      setFormData({
                        ...formData,
                        company_name: event.target.value
                      })
                      console.log(event.target.value)
                    }}
                  />
                </div>
                <div className='col-md-6 mb-4'>

                  <CustomInput
                    label="Parent's Phone"
                    required
                    id='number'
                    type='number'
                    name='phone_number'
                    placeholder="Enter Parent's Phone"
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    onChange={event => {
                      setFormData({
                        ...formData,
                        phone_number: event.target.value
                      })
                      console.log(event.target.value)
                    }}
                  />
                </div>

                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label="Parent's E-mail Address"
                    required
                    id='email'
                    type='email'
                    name='email'
                    placeholder="Enter Parent's E-mail Address"
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    onChange={event => {
                      setFormData({
                        ...formData,
                        email: event.target.value
                      })
                      console.log(event.target.value)
                    }}
                  />
                </div>
                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label="Student's Full Name"
                    required
                    id="FirstName"
                    type="text"
                    name="first_name"
                    placeholder="Enter Student's Full Name"
                    labelClass="mainLabel"
                    inputClass="mainInput"
                    onChange={event => {
                      setFormData({
                        ...formData,
                        first_name: event.target.value
                      })
                      console.log(event.target.value)
                    }}
                  />
                </div>
                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label="Secondary E-mail Address(optional)"
                    // required
                    id='email'
                    type='email'
                    name='email'
                    placeholder="Enter Secondary E-mail Address(optional)"
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    onChange={event => {
                      setFormData({
                        ...formData,
                        email: event.target.value
                      })
                      console.log(event.target.value)
                    }}
                  />
                </div>
                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label="Student's Grade"
                    required
                    id="LastName"
                    type="text"
                    name="last_name"
                    placeholder="Enter Student's Grade"
                    labelClass="mainLabel"
                    inputClass="mainInput"
                    onChange={event => {
                      setFormData({
                        ...formData,
                        last_name: event.target.value
                      })
                      console.log(event.target.value)
                    }}
                  />
                </div>

                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label='Address'
                    // required
                    id='address'
                    type='text'
                    name='address'
                    placeholder='Enter Address'
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    onChange={event => {
                      setFormData({ ...formData, address: event.target.value })
                      console.log(event.target.value)
                    }}
                  />
                </div>
                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label="Student's School Name"
                    required
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Enter Student's School Name"
                    labelClass="mainLabel"
                    inputClass="mainInput"
                    onChange={event => {
                      setFormData({ ...formData, city: event.target.value })
                      console.log(event.target.value)
                    }}
                  />
                </div>
                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label="Country"
                    required
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Select Country"
                    labelClass="mainLabel"
                    inputClass="mainInput"
                    onChange={event => {
                      setFormData({ ...formData, city: event.target.value })
                      console.log(event.target.value)
                    }}
                  />
                </div>
                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label="City"
                    required
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    labelClass="mainLabel"
                    inputClass="mainInput"
                    onChange={event => {
                      setFormData({ ...formData, city: event.target.value })
                      console.log(event.target.value)
                    }}
                  />
                </div>
                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label='State'
                    required
                    id='zipcode'
                    type='number'
                    name='zip_code'
                    placeholder='Enter State'
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    onChange={event => {
                      setFormData({ ...formData, zip_code: event.target.value })
                      console.log(event.target.value)
                    }}
                  />
                </div>

                
                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label='Password'
                    required
                    id='pass'
                    type='password'
                    name='password'
                    placeholder='Enter Password'
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    onChange={event => {
                      setFormData({ ...formData, password: event.target.value })
                      console.log(event.target.value)
                    }}
                  />
                </div>
                <div className='col-md-6 mb-4'>
                  <CustomInput
                    label='Confirm Password'
                    required
                    id='pass'
                    type='password'
                    name='password_confirmation'
                    placeholder='Enter Confirm Password'
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    onChange={event => {
                      setFormData({
                        ...formData,
                        password_confirmation: event.target.value
                      })
                      console.log(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className='mt-4 text-center'>
                <CustomButton
                  variant='primaryButton'
                  text='Submit'
                  type='submit'
                />
              </div>
            </form>
          </div>
        </div>
      </UserLayout>
    </>
  )
}

export default RegistrationForm
