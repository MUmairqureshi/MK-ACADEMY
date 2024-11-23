/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 01/09/2023 - 23:24:27
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 01/09/2023
 * - Author          : Saif
 * - Modification    :
 **/
import React, { useState, useEffect } from 'react'
import CustomInput from '../../../components/CustomInput'
import { useNavigate } from 'react-router-dom'
import { SubHeader } from '../../../components/SubHeader'
import { CompanyModule } from '../Layout'
import CustomButton from '../../../components/CustomButton'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

// import CheckoutForm from './CheckoutForm'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import './index.css'
import { event } from 'jquery'
import CustomModal from '../../../components/CustomModal'

export const AddEmployee = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [phone, setPhone] = useState('')

  const [monthly, Yearly] = useState(false)
  const [showModal, setShowModal] = useState(false)

  //   step form

  const [planBox, setPlanBox] = useState(false)
  const [success, setSuccss] = useState({
    display: false,
    success: false
  })

  const navigate = useNavigate()

  const [step, setStep] = useState(1)
  const [plan, setPlan] = useState({})
  // const [stripeObject, setStripeObject] = useState();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    middle_name: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    phone_number: '',
    driver_license: '',
    email: '',
    password: '',
    password_confirmation: '',
    username: ''
  })

  const validateStep1 = () => {
    // Check if required fields in Step 1 are filled
    if (
      !formData.first_name ||
      // !formData.middle_name ||
      !formData.last_name ||
      !formData.dob
    ) {
      // You can also display an error message to the user if fields are missing
      alert('Please fill in all required fields in Presonal Detail')
      return false
    }
    return true // Validation passed
  }

  // Validation function for Step 2
  const validateStep2 = () => {
    // Check if required fields in Step 2 are filled
    if (
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zip_code ||
      !formData.phone_number ||
      !formData.driver_license
    ) {
      // You can also display an error message to the user if fields are missing
      alert('Please fill in all required fields in Contact Information')
      return false
    }

    if (formData.driver_license.length > 20) {
      // You can also display an error message to the user if fields are missing
      alert('Your Driving id must be less than 20.')
      return false
    }

    return true // Validation passed
  }

  // Validation function for Step 3
  const validateStep3 = () => {
    // Check if required fields in Step 3 are filled
    if (
      !formData.username ||
      !formData.password ||
      !formData.password_confirmation ||
      !formData.email
    ) {
      // You can also display an error message to the user if fields are missing
      alert('Please fill in all required fields in Account Crdentials')
      return false
    }
    return true // Validation passed
  }

  const handleNextStep = () => {
    // Assuming step 1 validation function is named validateStep1
    if (step === 1 && !validateStep1(formData)) {
      // Validation failed for step 1, do not proceed to the next step.
      return
    }

    // Assuming step 2 validation function is named validateStep2
    if (step === 2 && !validateStep2(formData)) {
      // Validation failed for step 2, do not proceed to the next step.
      return
    }

    // Assuming step 3 validation function is named validateStep3
    if (step === 3 && !validateStep3(formData)) {
      // Validation failed for step 3, do not proceed to the next step.
      return
    }

    // If validation passes for the current step, move to the next step
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const token = localStorage.getItem('company_login')
  async function signUpAPi () {
    const formDataMethod = new FormData()
    for (const key in formData) {
      formDataMethod.append(key, formData[key])
    }

    const apiUrl = 'https://member.MATH KNOTs.com/backend/api/v1/employee/'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'multipart/form-data',
          Authorization: `Token ${token}`
        },
        body: formDataMethod
      })

      if (response.ok) {
        const responseData = await response.json()
        let user_id = responseData
        console.log(user_id)
        document.querySelector('.loaderBox').classList.add('d-none')
        setShowModal(true)
        setTimeout(() => {
          setShowModal(false)
          navigate('/employee-management')
        }, 1500)
        // let price_id = 'price_1NijPOHQIxnKFErGjY2y1m25'

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

  const handleSubmit = async event => {
    event.preventDefault()
    if (formData?.password === formData?.password_confirmation) {
      document.querySelector('.loaderBox').classList.remove('d-none')
      await signUpAPi()
    } else {
      alert('Password and confirm password are not same.')
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
    console.log(formData)
  }

  useEffect(() => {
    fetch(`https://member.MATH KNOTs.com/backend/api/v1/product/get_product/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product_type: 'individual'
      })
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPlan(data)
      })
      .catch(error => {
        console.log(error)
      })

    plan[0]
  }, [])

  console.log(plan)

  return (
    <CompanyModule>
      <div className='individual-page'>
        <SubHeader
          title={
            monthly == false
              ? 'INDIVIDUAL PLAN MONTHLY'
              : 'INDIVIDUAL PLAN YEARLY'
          }
        />
        <div className='container'>
          <div
            className={`initialScreen ${
              planBox == false ? 'd-block' : 'd-none'
            }`}
          ></div>
          <div
            className={`wizardForm my-5 pt-4'
              }`}
          >
            <div className='row'>
              <div className='col-md-8 m-auto'>
                <div className='stepBar'>
                  <div
                    className={`stepCount ${
                      step == 1
                        ? 'activeStep'
                        : step >= 2
                        ? 'completedStep'
                        : ''
                    }`}
                  >
                    <div className='steper'>
                      <p className='counter'>1</p>
                      <p>Personal Details</p>
                    </div>
                  </div>
                  <div
                    className={`stepCount ${
                      step == 2
                        ? 'activeStep'
                        : step >= 3
                        ? 'completedStep'
                        : ''
                    }`}
                  >
                    <div className='steper'>
                      <p className='counter'>2</p>
                      <p>Contact Information</p>
                    </div>
                  </div>
                  <div
                    className={`stepCount ${
                      step == 3
                        ? 'activeStep'
                        : step >= 4
                        ? 'completedStep'
                        : ''
                    }`}
                  >
                    <div className='steper'>
                      <p className='counter'>3</p>
                      <p>Account Credentials</p>
                    </div>
                  </div>
                  <div
                    className={`stepCount ${
                      step == 4
                        ? 'activeStep'
                        : step >= 5
                        ? 'completedStep'
                        : ''
                    }`}
                  >
                    <div className='steper'>
                      <p className='counter'>4</p>
                      <p>Confirm </p>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className='step-form'>
                    {step === 1 && (
                      <div className='step'>
                        <div className='row'>
                          <div className='col-md-12'>
                            <div className='stepTitle'>
                              <h3>Membership Form </h3>
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
                              value={formData.first_name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className='col-md-4 mb-4'>
                            <CustomInput
                              type='text'
                              inputClass='mainInput'
                              label='Middle Name:'
                              // required
                              placeholder='Middle Name'
                              name='middle_name'
                              value={formData.middle_name}
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
                              value={formData.last_name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className='col-md-4 mb-4'>
                            <CustomInput
                              type='date'
                              max='9999-12-31'
                              inputClass='mainInput'
                              label='DOB:'
                              required
                              name='dob'
                              value={formData.dob}
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
                              value={formData.referred_by}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='justify-content-end d-flex'>
                            <button
                              className='customButton primaryButton me-3 mb-2'
                              type='button'
                              onClick={handleNextStep}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className='step'>
                        <div className='row'>
                          <div className='col-md-12'>
                            <div className='stepTitle'>
                              <h3>Membership Form </h3>
                            </div>
                          </div>
                          <div className='col-md-6 mb-4'>
                            <CustomInput
                              type='text'
                              inputClass='mainInput'
                              label='Address:'
                              required
                              placeholder='Address'
                              name='address'
                              value={formData.address}
                              onChange={handleChange}
                            />
                          </div>
                          <div className='col-md-6 mb-4'>
                            <CustomInput
                              type='text'
                              inputClass='mainInput'
                              label='City:'
                              required
                              placeholder='City'
                              name='city'
                              value={formData.city}
                              onChange={handleChange}
                            />
                          </div>
                          <div className='col-md-6 mb-4'>
                            <CustomInput
                              type='text'
                              inputClass='mainInput'
                              label='State:'
                              required
                              placeholder='State'
                              name='state'
                              value={formData.state}
                              onChange={handleChange}
                            />
                          </div>
                          <div className='col-md-6 mb-4'>
                            <CustomInput
                              type='number'
                              inputClass='mainInput'
                              label='Zip Code:'
                              required
                              placeholder='Zip Code'
                              name='zip_code'
                              value={formData.zip_code}
                              onChange={handleChange}
                            />
                          </div>
                          <div className='col-md-6 mb-4'>
                            <label>
                              Best # for Contact<span>*</span>
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
                          {/* <div className='col-md-4 mb-4'>
                        <CustomInput
                          type='email'
                          inputClass='mainInput'
                          label='Email:'
                          required
                          placeholder='Email'
                          value={formData.field4}
                          onChange={handleChange}
                        />
                      </div> */}
                          <div className='col-md-6 mb-4'>
                            <CustomInput
                              type='text'
                              inputClass='mainInput'
                              label="Driver's License/ID:"
                              required
                              placeholder="Driver's License/ID"
                              name='driver_license'
                              value={formData.driver_license}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        {/* Add more input fields for step 2 */}
                        <div className='col-md-12'>
                          <div className='actionBtns justify-content-between d-flex'>
                            <button
                              className='customButton primaryButton me-3 mb-2'
                              onClick={handlePrevStep}
                            >
                              Previous
                            </button>
                            <button
                              className='customButton primaryButton me-3 mb-2'
                              type='button'
                              onClick={handleNextStep}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className='step'>
                        <div className='row'>
                          <div className='col-md-12'>
                            <div className='stepTitle'>
                              <h3>Membership Form </h3>
                            </div>
                          </div>
                          <div className='col-md-6 mb-4'>
                            <CustomInput
                              type='text'
                              inputClass='mainInput'
                              label='Username:'
                              required
                              placeholder='Username'
                              name='username'
                              value={formData.username}
                              onChange={handleChange}
                            />
                          </div>
                          <div className='col-md-6 mb-4'>
                            <CustomInput
                              type='email'
                              inputClass='mainInput'
                              label='Email:'
                              required
                              placeholder='Email'
                              name='email'
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                          <div className='col-md-6 mb-4'>
                            <CustomInput
                              type='password'
                              inputClass='mainInput'
                              label='Password:'
                              required
                              placeholder='Password'
                              name='password'
                              value={formData.password}
                              onChange={handleChange}
                            />
                          </div>
                          <div className='col-md-6 mb-4'>
                            <CustomInput
                              type='password'
                              inputClass='mainInput'
                              label='Password Confirmation:'
                              required
                              placeholder='Password Confirmation'
                              name='password_confirmation'
                              value={formData.password_confirmation}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        {/* Add more input fields for step 3 */}
                        <div className='col-md-12'>
                          <div className='actionBtns justify-content-between d-flex'>
                            <button
                              className='customButton primaryButton me-3 mb-2'
                              onClick={handlePrevStep}
                            >
                              Previous
                            </button>
                            <button
                              className='customButton primaryButton me-3 mb-2'
                              type='button'
                              onClick={handleNextStep}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {step == 4 && (
                      <div className='confirmation'>
                        <div className='step mb-5'>
                          <div className='row'>
                            <div className='col-md-12'>
                              <div className='stepTitle'>
                                <h3>Membership Form </h3>
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
                                value={formData.first_name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='col-md-4 mb-4'>
                              <CustomInput
                                type='text'
                                inputClass='mainInput'
                                label='Middle Name:'
                                // required
                                placeholder='Middle Name'
                                name='middle_name'
                                value={formData.middle_name}
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
                                value={formData.last_name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='col-md-4 mb-4'>
                              <CustomInput
                                type='date'
                                max='9999-12-31'
                                inputClass='mainInput'
                                label='DOB:'
                                required
                                name='dob'
                                value={formData.dob}
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
                                value={formData.referred_by}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        {/* second box  */}

                        <div className='step mb-5'>
                          <div className='row'>
                            <div className='col-md-6 mb-4'>
                              <CustomInput
                                type='text'
                                inputClass='mainInput'
                                label='Address:'
                                required
                                placeholder='Address'
                                name='address'
                                value={formData.address}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='col-md-6 mb-4'>
                              <CustomInput
                                type='text'
                                inputClass='mainInput'
                                label='City:'
                                required
                                placeholder='City'
                                name='city'
                                value={formData.city}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='col-md-6 mb-4'>
                              <CustomInput
                                type='text'
                                inputClass='mainInput'
                                label='State:'
                                required
                                placeholder='State'
                                name='state'
                                value={formData.state}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='col-md-6 mb-4'>
                              <CustomInput
                                type='number'
                                inputClass='mainInput'
                                label='Zip Code:'
                                required
                                placeholder='Zip Code'
                                name='zip_code'
                                value={formData.zip_code}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='col-md-6 mb-4'>
                              <label>
                                Best # for Contact<span>*</span>
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
                            <div className='col-md-6 mb-4'>
                              <CustomInput
                                type='text'
                                inputClass='mainInput'
                                label="Driver's License/ID:"
                                required
                                placeholder="Driver's License/ID"
                                name='driver_license'
                                value={formData.driver_license}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        {/* third box  */}

                        <div className='step mb-5'>
                          <div className='row'>
                            <div className='col-md-6 mb-4'>
                              <CustomInput
                                type='text'
                                inputClass='mainInput'
                                label='Username:'
                                required
                                placeholder='Username'
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='col-md-6 mb-4'>
                              <CustomInput
                                type='email'
                                inputClass='mainInput'
                                label='Email:'
                                required
                                placeholder='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='col-md-6 mb-4'>
                              <CustomInput
                                type='password'
                                inputClass='mainInput'
                                label='Password:'
                                required
                                placeholder='Password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='col-md-6 mb-4'>
                              <CustomInput
                                type='password'
                                inputClass='mainInput'
                                label='Password Confirmation:'
                                required
                                placeholder='Password Confirmation'
                                name='password_confirmation'
                                value={formData.password_confirmation}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                        {/* forth box  */}

                        <div className='row'>
                          <div className='col-md-12'>
                            <div className='justify-content-between d-flex'>
                              <button
                                className='customButton primaryButton me-3 mb-2'
                                onClick={handlePrevStep}
                              >
                                Previous
                              </button>
                              <button className='customButton primaryButton me-3 mb-2'>
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
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
        heading={'Employee Added successfully!'}
      />
    </CompanyModule>
  )
}
