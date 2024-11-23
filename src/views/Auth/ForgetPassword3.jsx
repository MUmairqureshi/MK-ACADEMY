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

const UpdatePassword = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({})

  console.log(formData.password)

  useEffect(() => {
    document.title = 'MATH KNOTs | Forgot Password'
  }, [])

  const handleSubmit = async event => {
    // document.querySelector('.loaderBox').classList.remove('d-none')
    // event.preventDefault()

    // const formDataMethod = new FormData()
    // // formDataMethod.append('username', formData.username);
    // // formDataMethod.append('password', formData.password);

    // for (const key in formData) {
    //   formDataMethod.append(key, formData[key])
    // }

    // console.log(formData)

    // const apiUrl = 'https://member.MATH KNOTs.com/backend/api/v1/password-reset/'

    // try {
    //   const response = await fetch(apiUrl, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //     body: JSON.stringify(formData)
    //   })

    //   if (response.ok) {
    //     const responseData = await response.json()
    //     console.log('Update', responseData)
    //     document.querySelector('.loaderBox').classList.add('d-none');
    //     alert('Password Updated Successfully.')
    //     navigate('/login');
    //   }
    // } catch (error) {
    //   document.querySelector('.loaderBox').classList.add('d-none');
    //   console.error('Error:', error)
    // }

    navigate('/login');
  }

  return (
    <>
      <UserLayout>
        <SubHeader title='Forgot Password'></SubHeader>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 m-auto'>
              <div className='bg-light formArea p-5 rounded-4 shadow'>
                <form onSubmit={handleSubmit}>
                <CustomInput
                    label='Enter Your Email Address'
                    required
                    id='userEmail'
                    type='text'
                    name='email'
                    placeholder='Enter Your Email Address'
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    onChange={event => {
                      setFormData({ ...formData, email: event.target.value })
                      console.log(event.target.value)
                    }}
                  />

                  <CustomInput
                    label='New Password'
                    required
                    id='pass'
                    type='password'
                    name='new_password'
                    placeholder='Enter New Password'
                    labelClass='mainLabel'
                    inputClass='mainInput'
                    onChange={event => {
                      setFormData({ ...formData, new_password: event.target.value })
                      console.log(event.target.value)
                    }}
                  />

                 
                  <div className='mt-4 text-center'>
                    <CustomButton
                      variant='primaryButton'
                      text='Update'
                      type='submit'
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  )
}

export default UpdatePassword
