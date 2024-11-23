/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 15/09/2023 - 22:18:28
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 15/09/2023
 * - Author          : Saif
 * - Modification    :
 **/
import { React, useState, useEffect } from 'react'
import { SubHeader } from '../../components/SubHeader'
import { UserLayout } from '../Layout'
import './index.css'
import CustomInput from '../../components/CustomInput'

export const AccountVerification = () => {
  const [formData, setFormData] = useState({})
  const [status, setStatus] = useState('');
  const [initError, setError] = useState();
  const [active, setActive] = useState();

  const handleSubmit = async event => {
    document.querySelector('.loaderBox').classList.remove('d-none')
    event.preventDefault()

    const formDataMethod = new FormData()
    // formDataMethod.append('username', formData.username);
    // formDataMethod.append('password', formData.password);

    for (const key in formData) {
      formDataMethod.append(key, formData[key])
    }

    console.log(formData)

    const apiUrl = `https://member.MATH KNOTs.com/backend/api/v1/subscription-status/?family_id=${formData?.family_id}&dob=${formData?.dob}`

    try {
      const response = await fetch(apiUrl, {
        method: 'POST'
        // body: JSON.stringify(formData)
      })

      document.querySelector('.loaderBox').classList.add('d-none')
      const responseData = await response.json()
      console.log(responseData)
      if(responseData?.error) {
        setError('Invalid');
        setActive('');
      }

      if(responseData?.subscription_status == 'incomplete') {
        setError('')
        setError('Invalid');
      } 
      
      if(responseData?.subscription_status == 'active') {
        setError('')
        setActive('Valid');
      }


      // setStatus(responseData?.error || responseData?.subscription_status == 'incomplete' ? 'You are not active member' : 'You are active member.')
    } catch (error) {
      const errorMessage = error.message || 'An unknown error occurred';
      setStatus(errorMessage);
      alert(errorMessage);
      document.querySelector('.loaderBox').classList.add('d-none');
      console.error('Error:', errorMessage);
    }
    
  }

  // useEffect(()=>{
  //   alert()
  // },[status])
  return (
    <UserLayout>
      <div className='providerDirectory'>
        <SubHeader title='ACCOUNT VERIFICATION' />
        <section className='video-section bg-grey mb-190'>
          <div className='container'>
            <form className='verification-form'>
              <div className='row justify-content-center'>
                <div className='col-md-5'>
                  <div className='mb-4'>
                    <form>
                      <CustomInput
                        label='Member ID'
                        id='userEmail'
                        type='username'
                        name='family_id'
                        placeholder='Enter Your Member ID'
                        labelClass='mainLabel'
                        inputClass='mainInput'
                        onChange={event => {
                          setFormData({
                            ...formData,
                            family_id: event.target.value
                          })
                          console.log(event.target.value)
                        }}
                      />
                      <CustomInput
                        label='Date of Birth e.g. 00/00/0000'
                        id='pass'
                        type='date'
                        name='dob'
                        labelClass='mainLabel'
                        inputClass='mainInput'
                        // value="2020-08-11"
                        onChange={event => {
                          setFormData({
                            ...formData,
                            dob: event.target.value
                          })
                          console.log(event.target.value)
                        }}
                      />

                      <div className='col-md-12 text-center'>
                        <button
                          type='button'
                          onClick={handleSubmit}
                          className='wpcf7-form-control has-spinner wpcf7-submit btn-c bg-blue color-white'
                        >
                          Authenticate
                        </button>
                      </div>
                        {
                          initError && (
                            <div className="text-danger text-center mt-2 font-weight-bold">
                              <p>{initError}</p>
                            </div>
                          )
                        }

                        {
                          active && (
                            <div className="text-success text-center mt-2 font-weight-bold">
                              <p>{active}</p>
                            </div>
                          )
                        }
                      {/* <p className='error'>{status}</p> */}
                    </form>
                  </div>
                </div>
                {/* <div className='col-md-12 text-center'>
                  <input
                    type='submit'
                    value='Authenticate'
                    id='search_subs'
                    className='wpcf7-form-control has-spinner wpcf7-submit btn-c bg-blue color-white'
                    name='search_registration'
                  />
                </div> */}
              </div>
            </form>
          </div>
        </section>
      </div>
    </UserLayout>
  )
}
