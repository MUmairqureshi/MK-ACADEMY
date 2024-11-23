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

export const upgradeSubscription = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [phone, setPhone] = useState('')

  const [monthly, Yearly] = useState(false)
  const [companyPackage, setCompanyPackage] = useState()

  //   step form
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [planBox, setPlanBox] = useState(false)
  const [count, setCount] = useState(1)
  const [membersCount, setmembersCount] = useState(0)
  const [success, setSuccss] = useState({
    display: false,
    success: false
  })

  const [step, setStep] = useState(1)
  const [plan, setPlan] = useState({})
  const Allowed = localStorage.getItem('allowedEmployee')
  const [formData, setFormData] = useState()
  const [priceData, setPrice] = useState();

  const token = localStorage.getItem('company_login');
  const userID = localStorage.getItem('user_id');

  const upgradeStripePayment = async () => {
    document.querySelector('.loaderBox').classList.remove('d-none')
    try {
      const stripeResponse = await fetch(
        `https://member.MATH KNOTs.com/backend/company_subscription_update/${count}/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
          }
        }
      )

      if (stripeResponse.ok) {
        const stripeData = await stripeResponse.json()
        console.log(stripeData)
        document.querySelector('.loaderBox').classList.add('d-none')
        setShowModal(true)
        setTimeout(() => {
          setShowModal(false)
          navigate('/employee-management')
        }, 2500)
        // await stripePaymentProcess(stripeData?.client_secret, stripeData)
      } else {
        document.querySelector('.loaderBox').classList.add('d-none')
        console.error('Error:', stripeResponse.statusText)
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
        // setCount(parseInt(Allowed));
    
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
        <SubHeader title={'Change Subscription'} />
        <div className='container'>
          {Allowed && (
            <div className='text-center mb-4'>
              <h4 className='text-success'>
                You are already subscribed {Allowed} Employees plan.
              </h4>
            </div>
          )
           }
           {/* {
            setCount(Allowed)
           } */}
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
                      <span className='currency'>$</span> {companyPackage}
                    </h3>
                    <p>Per Month</p>
                  </div>
                </div>
                <div className='planBtn'>
                  <div className='step p-0 border-0 shdowNone text-center mb-5'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <button
                          type='submit'
                          className='mt-5 d-inline-block w-auto px-5'
                          disabled={!stripe}
                          onClick={upgradeStripePayment}
                        >
                          Upgrade Now
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
      <CustomModal
        show={showModal}
        close={() => {
          setShowModal(false)
        }}
        success
        heading={'Subscription has been Updated.'}
      />
    </CompanyModule>
  )
}
