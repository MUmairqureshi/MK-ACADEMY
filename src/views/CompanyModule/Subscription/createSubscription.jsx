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
import { SubHeader } from '../../../components/SubHeader'
import CustomButton from '../../../components/CustomButton'
// import { UserPlusLayout } from '../../LayoutPlus'
// import CheckoutForm from './CheckoutForm'

import { CompanyModule } from '../Layout'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import './index.css'
import { event } from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { PhoneInput } from 'react-international-phone'
import { useNavigate } from 'react-router-dom'
import CustomModal from '../../../components/CustomModal'

export const createSubscription = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [phone, setPhone] = useState('')

  const [monthly, Yearly] = useState(false)
  const [companyPackage, setCompanyPackage] = useState()

  //   step form
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [planBox, setPlanBox] = useState(false);
  const [priceData, setPrice] = useState();
  const [count, setCount] = useState(1)
  const [membersCount, setmembersCount] = useState(0)
  const [success, setSuccss] = useState({
    display: false,   
    success: false
  })
  const userID = localStorage.getItem('user_id');

  const [step, setStep] = useState(1)
  const [plan, setPlan] = useState({})
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
    members: [
      {
        first_name: '',
        middle_name: '',
        last_name: '',
        dob: '',
        relation_to_member1: ''
      }
    ],
    email: '',
    password: '',
    role: '3',
    password_confirmation: '',
    product_id: '',
    additional_member: '4',
    username: '',
    product_price_id: ''
  })

 


const token = localStorage.getItem('company_login');
  const createStripePayment = async () => {
    document.querySelector('.loaderBox').classList.remove('d-none');
    try {
      const stripeResponse = await fetch(
        `https://member.MATH KNOTs.com/backend/company_subscription/${formData?.product_price_id}/${count}/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
          }
        }
      )

      if (stripeResponse.ok) {
        const stripeData = await stripeResponse.json()
        console.log(stripeData)
        document.querySelector('.loaderBox').classList.add('d-none')

        companyPackage < 1 ? await stripeDataConfig(stripeData) : await stripePaymentProcess(stripeData?.client_secret, stripeData) 
        
      } else {
        document.querySelector('.loaderBox').classList.add('d-none')
        console.error('Error:', stripeResponse.statusText)
      }
    } catch (error) {
      document.querySelector('.loaderBox').classList.add('d-none')
      console.error('Error:', error)
    }
  }

  const stripePaymentProcess = async (paymentKey, objectData) => {
    document.querySelector('.loaderBox').classList.remove('d-none')
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return
    }
    const result = await stripe.confirmCardPayment(paymentKey, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    })
    if (result.error) {
      console.error(result.error.message)
      document.querySelector('.loaderBox').classList.add('d-none')
      setSuccss({
        display: true,
        success: false
      })
    } else {
      await stripeDataConfig(objectData)
      setSuccss({
        display: true,
        success: true
      })
      document.querySelector('.loaderBox').classList.add('d-none')
      console.log(result)
    }
  }

  async function stripeDataConfig(data) {

    document.querySelector('.loaderBox').classList.remove('d-none')

    const formDataMethod = new FormData();
    formDataMethod.append('stripe_config', JSON.stringify(data))



    const apiUrl = 'https://member.MATH KNOTs.com/backend/company_subscription_local/'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'multipart/form-data',
          'Authorization': `Token ${token}`
          },
          body: formDataMethod
      })

      if (response.ok) {
        const responseData = await response.json()
        console.log(responseData)
        document.querySelector('.loaderBox').classList.add('d-none')
        setShowModal(true)
        setTimeout(()=>{
          setShowModal(false);
          navigate('/employee-management')
        },2500)
      } else {
        document.querySelector('.loaderBox').classList.add('d-none')
        // Handle signup failure, e.g., show an error message to the user
      }
    } catch (error) {
      document.querySelector('.loaderBox').classList.add('d-none')
      console.error('Error:', error)
    }
  }



  console.log(formData)

  useEffect(() => {
    setmembersCount(count)
  }, [count])




  useEffect(() => {
    fetch(`https://member.MATH KNOTs.com/backend/api/v1/product/get_product/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product_type: 'company',
        user_id: userID
      })
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setFormData(data[0]);
        setPrice(data[0]?.product_price)
        setCompanyPackage(data[0]?.product_price);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleClickPlus = () => {
    setCount(prevCount => {
      const newCount = ++prevCount
      setCompanyPackage((newCount * priceData).toFixed(2))
    //   familyPlans(newCount)
      setFormData(prevFormData => ({
        ...prevFormData,
        additional_member: newCount - 1
      }))
      console.log(formData)
      return newCount
    })
  }

  const handleClickMinus = () => {
    if (count > 1) {
      setCount(prevCount => {
        const newCount = --prevCount
        setCompanyPackage((newCount * priceData).toFixed(2))
        // familyPlans(newCount)
        setFormData(prevFormData => ({
          ...prevFormData,
          additional_member: newCount - 1
        }))
        console.log(formData)
        return newCount
      })
    } else {
        return count
    }
  }

  return (
    <CompanyModule>
      <div className='individual-page'>
        <SubHeader
          title={
           'Create Subscription'
          }
        />
        <div className='container'>
          <div
            className={`initialScreen ${
              planBox == false ? 'd-block' : 'd-none'
            }`}
          >
            <div className='row'>
              <div className='col-md-7 m-auto'>
                <div className='upMember text-center mb-3'>
                  <p>Select No of Employee's</p>
                </div>
                <div className='memeberCount'>
                  <button onClick={handleClickMinus}>
                    <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
                  </button>
                  <CustomInput
                    type='number'
                    inputClass='memberBox'
                    required
                    name='first_name'
                    value={count}
                  />

                  <button onClick={handleClickPlus}>
                    <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                  </button>
                </div>
                <div className='familyMember'>
                  <div className='packagePrice text-center'>
                    <h3>
                      <span className='currency'>$</span>
                      {companyPackage}
                    </h3>
                    <p>Per Month</p>
                  </div>
                </div>
                <div
                  className={`packageBox ${monthly == true ? 'd-none' : ''}`}
                >
                  <div className='content shadow p-4 rounded-5 border'>
                    {/* <p></p> */}
                    <div className='priceBtn mt-3'>
                      <div className='planBtn'>
                        <div className='step mb-5'>
                          <div className='row'>
                            <div className='col-md-12'>
                              <div className='stepTitle'>
                                <h3>Payment Form</h3>
                              </div>
                              <CardElement />
                              <button
                                type='submit'
                                className='mt-5 d-inline-block w-auto px-5'
                                disabled={!stripe}
                                onClick={createStripePayment}
                              >
                                Pay Now
                              </button>
                            </div>
                          </div>
                          {/* Add more input fields for step 3 */}
                        </div>
                      </div>
                    </div>
                  </div>
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
        heading={'Subscription has been Created.'}
      />
    </CompanyModule>
  )
}
