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
import { UserModule } from '../Layout'
import { SubHeader } from '../../../components/SubHeader'
import CustomTable from '../../../components/CustomTable'
import { Link } from 'react-router-dom'
// import './index.css'

export const ProviderList = () => {
  const [providerData, setProviderData] = useState()

  useEffect(() => {
    // const LogoutData = localStorage.getItem('login')
    document.querySelector('.loaderBox').classList.remove('d-none')
    fetch(`https://member.MATH KNOTs.com/backend/api/v1/provider-directories/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        // 'Authorization': `Token ${LogoutData}`
      }
    })
      .then(response => {
        return response.json()
      })

      .then(data => {
        setProviderData(data)
        console.log('provider', providerData)
        document.querySelector('.loaderBox').classList.add('d-none')
        // setMembersData(data.members)
      })
      .catch(error => {
        console.log(error)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
  }, [])

  return (
    <UserModule>
      <SubHeader title='Provider List' />
      <div className='container'>
        <div className='profileSection shadow p-md-5 my-5 border'>
          {providerData &&
            providerData?.map((item, index) => (
              <div className='row flexing mb-5'>
                <div className='col-md-2'>
                  <img
                    src={`https://member.MATH KNOTs.com${item?.business_image}`}
                    className='img-margin mw-100'
                  />
                </div>
                <div className='col-md-4 vtcl-align'>
                  <h2>{item?.business_name}</h2>
                </div>
                <div className='col-md-4 vtcl-align text-center'>
                  <a className='btn-c text-center'>{item?.address}</a>
                </div>
                <div className='col-md-2 vtcl-align text-center'>
                 
                  <a
                    href={item?.website}
                    target='_blank'
                    className='btn-c bg-blue color-white mb-2'
                  >
                    Go to website
                    <i className='fas fa-external-link-alt'></i>
                  </a>
                  <Link to={`/proivder-list/provider-details/${item?.id}`} className='text-success'>View Price List</Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </UserModule>
  )
}
