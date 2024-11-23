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
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEdit,
  faEllipsisV,
  faEye,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from '../../../components/CustomInput'
import CustomButton from '../../../components/CustomButton'
import CustomModal from '../../../components/CustomModal'

export const EmployeeManagement = () => {
  const [userData, setUserData] = useState()
  const [length, setLength] = useState()
  const navigate = useNavigate()
  const LogoutData = localStorage.getItem('company_login')
  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [removeID, setRemoveID] = useState()

  const Continue = async () => {
    try {
      document.querySelector('.loaderBox').classList.remove('d-none');
      // Show modal immediately
      
      const response = await fetch(`https://member.MATH KNOTs.com/backend/api/v1/employee/${removeID}/`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Token ${LogoutData}`
        }
      });

      if (response.status === 204) {
        setShowModal(false);
        setShowModal2(true); 
        getEmployee();
        
        setTimeout(() => {
          setShowModal2(false);
        }, 1500);


      } else {
        throw new Error('Failed to delete user');
      }

      document.querySelector('.loaderBox').classList.add('d-none');
    
     
      
    } catch (error) {
      console.log(error);
      document.querySelector('.loaderBox').classList.add('d-none');
    } 
  };
  
  

  localStorage.setItem('allowedEmployee', userData?.total_allowed_members)
  localStorage.setItem('isPaid', userData?.membership_purchased)

  useEffect(() => {
    document.title = 'MATH KNOTs | Employee Management'
  }, [])

  const handleRoute = () => {
    navigate('/add-employee')
  }

  const handleRouteUpgrade = () => {
    navigate('/upgrade-subscription')
  }

  const UserDelete = id => {
    document.querySelector('.loaderBox').classList.remove('d-none')
    fetch(`https://member.MATH KNOTs.com/backend/api/v1/employee/${id}/`, {
      method: 'DELETE',
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
        console.log(data)
        getEmployee()
        document.querySelector('.loaderBox').classList.add('d-none')
      })
      .catch(error => {
        console.log(error)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
  }
  const getEmployee = () => {
    document.querySelector('.loaderBox').classList.remove('d-none')
    fetch(`https://member.MATH KNOTs.com/backend/api/v1/employee/`, {
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
        console.log(data)
        setLength(data?.employees?.length)
        setUserData(data)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
      .catch(error => {
        console.log(error)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
  }

  useEffect(() => {
    getEmployee()
  }, [])

  const SubscriptionHeader = [
    {
      key: 'id',
      title: 'S.No'
    },
    {
      key: 'FirstName',
      title: 'First Name'
    },
    {
      key: 'LastName',
      title: 'Last Name'
    },
    {
      key: 'Email',
      title: 'Email'
    },
    {
      key: 'phone',
      title: 'Phone NO'
    },
    {
      key: 'UserName',
      title: 'User Name'
    },
    {
      key: 'dob',
      title: 'DOB'
    },
    {
      key: 'action',
      title: 'Action'
    }
  ]

  return (
    <CompanyModule>
      <SubHeader title='Employee Management' />
      <div className='container'>
        <div className='profileSection emloyeeTable shadow p-md-5 my-5 border'>
          <div className='row mb-3 justify-content-between'>
            <div className='col-md-6 mb-2'>
              <div className='d-flex flex-wrap gap-5 align-items-center'>
                <CustomButton
                  text='Add Employee'
                  variant='primaryButton'
                  onClick={handleRoute}
                  disabled={length >= userData?.total_allowed_members}
                />

                <p className='mt-0'>
                  {length != '' ? length : '0'} out of{' '}
                  {userData?.total_allowed_members} Employees Added
                </p>
              </div>
            </div>
            <div className='col-md-6 mb-2'>
              <div className='addUser d-flex justify-content-end align-items-center gap-5'>
                {length >= userData?.total_allowed_members && (
                  <CustomButton
                    text='Change Subscription'
                    variant='primaryButton'
                    className='flex-shrink-0'
                    onClick={handleRouteUpgrade}
                  />
                )}
                <CustomInput
                  type='text'
                  placeholder='Employee Search...'
                  inputClass='mainInput'
                  show={true}
                />
              </div>
            </div>
          </div>
          <CustomTable headers={SubscriptionHeader}>
            <tbody>
              {userData?.employees &&
                userData?.employees.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className='text-capitalize'>{item?.first_name}</td>
                    <td className='text-capitalize'>{item?.last_name}</td>
                    <td>{item?.email}</td>
                    <td>{item?.phone_number}</td>
                    <td>{item?.username}</td>
                    {/* <td>{item?.created_at}</td> */}
                    <td>{item?.dob}</td>
                    {/* <td className={item?.status == 1 ? 'greenColor' : "redColor"}>{item?.status == 1 ? 'Active' : "Inactive"}</td> */}
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
                          <Link
                            to={`/employee-management/employee-detail/${item.id}`}
                            className='tableAction'
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              className='tableActionIcon'
                            />
                            View
                          </Link>

                          <Link
                            to={`/employee-management/edit-employee/${item.id}`}
                            className='tableAction'
                          >
                            <FontAwesomeIcon
                              icon={faEdit}
                              className='tableActionIcon'
                            />
                            Edit
                          </Link>
                          <button
                            type='button'
                            className='border-0 tableAction'
                            onClick={() => {
                              // UserDelete(item?.id)
                              setShowModal(true)
                              setRemoveID(item?.id)
                            }}
                          >
                            {' '}
                            <FontAwesomeIcon
                              icon={faTrash}
                            ></FontAwesomeIcon>{' '}
                            Remove
                          </button>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
            </tbody>
            <CustomModal
              show={showModal}
              close={() => {
                setShowModal(false)
              }}
              action={Continue}
              heading='Are you sure you want to remove this employee?'
            />
            <CustomModal
              show={showModal2}
              close={() => {
                setShowModal2(false)
              }}
              success
              heading='Employee Removed Successfuly!'
            />
          </CustomTable>
        </div>
      </div>
    </CompanyModule>
  )
}
