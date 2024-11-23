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
import './index.css'
import CustomButton from '../../../components/CustomButton'
import CustomModal from '../../../components/CustomModal'

export const SubscriptionModel = () => {
  const [userData, setUserData] = useState({});
  const [message, setMessage] = useState('Server Error');
  const [showModal, setShowModal] = useState(false);
  const LogoutData = localStorage.getItem('login');

  const subscriptionList = () => {
    document.querySelector('.loaderBox').classList.remove('d-none')
    fetch(`https://member.MATH KNOTs.com/backend/api/v1/login/get_subscription/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${LogoutData}`
      }
    })
    .then(response => {
      return response.json();
    })
    
      .then((data) => {
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
    subscriptionList();
    
  }, [])

  const cancelSubscription = () => {
    const userID = localStorage.getItem('user_id')
    document.querySelector('.loaderBox').classList.remove('d-none')
    fetch(`https://member.MATH KNOTs.com/backend/cancel_user_subscription/${userID}/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${LogoutData}`
      }
    })
    .then(response => {
      return response.json();
    })
    
      .then((data) => {
        console.log('ssasas', data)
        document.querySelector('.loaderBox').classList.add('d-none');
        setShowModal(true)
        setMessage(data?.message);
        setTimeout(()=>{
          setShowModal(false);
        },2000)
        subscriptionList();

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
      key: 'status',
      title: 'Status'
    },
    {
      key: 'created',
      title: 'Created'
    }
  ]

  useEffect(() => {
    document.title = 'MATH KNOTs | Subscription';
}, [])

  return (
    <UserModule>
      <SubHeader title='Subscription Details' />
      <div className='container'>
        <div className='profileSection shadow p-md-5 my-5 border'>
          <div className="d-flex justify-content-end">
            <CustomButton text="Edit Subscription" variant="primaryButton" onClick={()=>{cancelSubscription()}} disabled={userData?.subscription_status == "canceled"}></CustomButton>
          </div>
          <CustomTable headers={SubscriptionHeader}>
            <tbody>
          
               <tr>
                <td>01</td>
                <td>{`SNW ${userData?.product_name}`}</td>
                <td>{userData?.recurring}</td>
                <td className={`text-capitalize ${userData?.subscription_status == "canceled" ? 'text-danger' : 'text-success'}`}>{userData?.subscription_status}</td>
                <td>{userData?.subscription_created_at}</td>
              </tr>
             
             
            </tbody>
          </CustomTable>
        </div>
      </div>

      <CustomModal show={showModal} success heading={message} />

    </UserModule>
  )
}
