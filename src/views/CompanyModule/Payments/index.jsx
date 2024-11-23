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
import { Link } from 'react-router-dom'

export const CompanyPaymentModel = () => {
  const [membersData, setMembersData] = useState({})
  const [userData, setUserData] = useState({})
  const [tabs, setTabs] = useState(false)

  useEffect(() => {
    document.title = 'MATH KNOTs | Payment';
}, [])


  useEffect(() => {
    const LogoutData = localStorage.getItem('company_login')
    document.querySelector('.loaderBox').classList.remove('d-none')
    fetch(`https://member.MATH KNOTs.com/backend/api/v1/login/get_invoice/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${LogoutData}`
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setUserData(data)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
      .catch(error => {
        console.log(error)
        document.querySelector('.loaderBox').classList.add('d-none')
      })
  }, [])

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
      key: 'recuringType',
      title: 'Recuring Type'
    },
    {
      key: 'total',
      title: 'Total'
    },
    {
      key: 'status',
      title: 'Status'
    },
    {
      key: 'date',
      title: 'Date'
    },
    {
      key: 'invoice',
      title: 'Invoice'
    }
  ]

  return (
    <CompanyModule>
      <SubHeader title='Payment Details' />
      <div className='container'>
        <div className='profileSection shadow p-md-5 my-5 border'>
          <CustomTable headers={SubscriptionHeader}>
            <tbody>
            <tr>
                  <td>01</td>
                  <td>{`SNW ${userData[0]?.product_name}`}</td>
                  <td>{userData[0]?.recurring_type}</td>
                  <td>{`$ ${userData[0]?.subscription_price}`}</td>
                  <td className='text-capitalize'>{userData[0]?.invoice_status}</td>
                  <td>{userData[0]?.invoice_date}</td>
                  <td>{userData[0]?.invoice_number}<Link className='invoiceBtn' target="_blank" to={userData[0]?.invoice_pdf}>View Invoice</Link></td>
                </tr>
            </tbody>
          </CustomTable>
        </div>
      </div>
    </CompanyModule>
  )
}
