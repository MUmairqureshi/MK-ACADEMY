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
import CustomTable from '../../../components/CustomTable'
import './index.css'
import CustomButton from '../../../components/CustomButton'
import CustomModal from '../../../components/CustomModal'
import { faEllipsisV, faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomInput from '../../../components/CustomInput'
import { useNavigate } from 'react-router-dom'

export const CompanySubscriptionListing = () => {
  const [userData, setUserData] = useState({})
  const [message, setMessage] = useState('Server Error')
  const [showModal, setShowModal] = useState(false)
  const [initShow, setInitShow] = useState(false);
  const [enquiryForm, setenquiryForm] = useState(false);
  const [formData, setFormData] = useState();

  const LogoutData = localStorage.getItem('company_login');
  const [successMessage, setSuccssMessage] = useState('Subscription Cancelled Successfuly!');

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/upgrade-subscription')
  }

  const subscriptionList = () => {
    document.querySelector('.loaderBox').classList.remove('d-none')
    fetch(
      `https://member.MATH KNOTs.com/backend/api/v1/login/get_subscription/`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${LogoutData}`
        }
      }
    )
      .then(response => {
        return response.json()
      })

      .then(data => {
        console.log('ssasas', data)
        setUserData(data)
        document.querySelector('.loaderBox').classList.add('d-none')
        // setMembersData(data.members)
      })
      .catch(error => {
        console.log(error)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
  }

  useEffect(() => {
    subscriptionList()
  }, [])

  const cancelSubscription = () => {
    const userID = localStorage.getItem('user_id')
    document.querySelector('.loaderBox').classList.remove('d-none')
    fetch(
      `https://member.MATH KNOTs.com/backend/cancel_user_subscription/${userID}/`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${LogoutData}`
        }
      }
    )
      .then(response => {
        return response.json()
      })

      .then(data => {
        console.log('ssasas', data)
        document.querySelector('.loaderBox').classList.add('d-none')
        setInitShow(false)
        // setMessage(data?.message)
        setShowModal(true)
        setTimeout(() => {
          setShowModal(false)
        }, 1500)
        subscriptionList()
      })
      .catch(error => {
        console.log(error)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
  }

  const SubscriptionHeader = [
    {
      key: 'id',
      title: 'S.No'
    },
    {
      key: 'membership',
      title: 'Membership'
    },
    {
      key: 'subscription',
      title: 'Subscription'
    },
    {
      key: 'member',
      title: 'Allowed Employees'
    },
    {
      key: 'status',
      title: 'Status'
    },
    {
      key: 'created',
      title: 'Created'
    },
    {
      key: 'action',
      title: 'Action'
    }
  ]

  useEffect(() => {
    document.title = 'MATH KNOTs | Subscription'
  }, [])


  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
    console.log(formData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    document.querySelector('.loaderBox').classList.remove('d-none');
    // Ensure formData is defined and contains the form data
    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }

    const apiUrl = 'https://member.MATH KNOTs.com/backend/api/v1/support_form/';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'multipart/form-data', // Commented out since FormData is being used
          Authorization: `Token ${LogoutData}`
        },
        body: formDataMethod
      });

      if (response.ok) {
        const responseData = await response.json();
        // Check if responseData contains the expected user_id
        let user_id = responseData.user_id; // Assuming user_id is the property name
        console.log(user_id);

        // Hide loader and show success message
        document.querySelector('.loaderBox').classList.add('d-none');
        setenquiryForm(false);
        setSuccssMessage('Form has been submitted!');
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 1500);
      } else {
        // Handle non-successful response
        document.querySelector('.loaderBox').classList.add('d-none');
        // Show error message or handle accordingly
      }
    } catch (error) {
      // Handle fetch errors
      document.querySelector('.loaderBox').classList.add('d-none');
      console.error('Error:', error);
      // Show error message or handle accordingly
    }
  };


  return (
    <CompanyModule>
      <SubHeader title='Subscription Details' />
      <div className='container'>
        <div className='profileSection shadow p-md-5 my-5 border'>
          <div className='d-flex justify-content-end'>
            {/* <CustomButton
              text='Cancel Subscription'
              variant='primaryButton'
              onClick={() => {
                setInitShow(true)
              }}
              disabled={userData?.subscription_status == 'canceled'}
            ></CustomButton> */}

            <CustomButton
              text='Edit Subscription'
              variant='primaryButton'
              onClick={handleNavigate}
            ></CustomButton>
          </div>
          <CustomTable headers={SubscriptionHeader}>
            <tbody>
              <tr>
                <td>01</td>
                <td>{`SNW ${userData?.product_name}`}</td>
                <td>{userData?.recurring}</td>
                <td>{userData?.allowed_members}</td>
                <td
                  className={`text-capitalize ${userData?.subscription_status == 'canceled'
                    ? 'text-danger'
                    : 'text-success'
                    }`}
                >
                  {userData?.subscription_status == 'canceled' ? 'cancelled' : userData?.subscription_status}
                </td>
                <td>{userData?.subscription_created_at}</td>
                <td>
                  <Dropdown className='tableDropdown'>
                    <Dropdown.Toggle
                      variant='transparent'
                      className='notButton classicToggle'
                    >
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      align='end'
                      className='tableDropdownMenu'
                    >
                      <button
                        type='button'
                        className='border-0 tableAction'
                        onClick={() => {
                          setenquiryForm(true);
                        }}
                      >
                        {' '}
                        <FontAwesomeIcon
                          icon={faHeadphones}
                        ></FontAwesomeIcon>{' '}
                        Contact Support
                      </button>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </CustomTable>
        </div>
      </div>

      <CustomModal
        show={initShow}
        close={() => {
          setInitShow(false)
        }}
        action={cancelSubscription}
        heading='Are you sure you want to cancel your subscription?'
      />
      <CustomModal
        show={showModal}
        close={() => {
          setShowModal(false)
        }}
        success
        heading={successMessage}
      />



      <CustomModal
        show={enquiryForm}
        close={() => {
          setenquiryForm(false)
        }}
        heading='Support Form'
      >

        <form>
          <div className='row'>
            <div className='col-md-12'>
              <CustomInput
                type='text'
                inputClass='mainInput'
                label='Name:'
                required
                placeholder='First Name'
                name='name'
                onChange={handleChange}
              />
            </div>

            <div className='col-md-12'>
              <CustomInput
                type='text'
                inputClass='mainInput'
                label='Designation:'
                required
                placeholder='First Name'
                name='designation'
                onChange={handleChange}
              />
            </div>

            <div className='col-md-12'>
              <CustomInput
                type='number'
                inputClass='mainInput'
                label='Contact Number:'
                required
                placeholder='First Name'
                name='contact_number'
                onChange={handleChange}
              />
            </div>


            <div className="col-md-12">
              <div className="inputWrapper">
                <label>Support Message:<span>*</span></label>
                <textarea name="support_message" className="mainInput" required onChange={handleChange}></textarea>
              </div>
            </div>

            <div className='col-md-12'>
              <button className='customButton primaryButton me-3 mb-2' type="button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </CustomModal>

    </CompanyModule >
  )
}
