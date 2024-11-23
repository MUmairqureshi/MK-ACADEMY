/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 05/12/2023 - 00:20:56
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 05/12/2023
 * - Author          : Saif
 * - Modification    :
 **/
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CustomTable from '../../../components/CustomTable'
import { UserModule } from '../Layout'
import './style.css'
const ProviderDetails = () => {
  const { id } = useParams()
  const LogoutData = localStorage.getItem('login')
  console.log(LogoutData)

  const [profileData, setProfileData] = useState({})

  const getProviderDetail = () => {
    document.querySelector('.loaderBox').classList.remove('d-none')

    fetch(
      `https://member.MATH KNOTs.com/backend/api/v1/provider-directories/${id}/`,
      {
        method: 'GET',
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
        setProfileData(data)
        document.querySelector('.loaderBox').classList.add('d-none')
        console.log(data)
      })
      .catch(error => {
        document.querySelector('.loaderBox').classList.add('d-none')
        console.log(error)
      })
  }

  useEffect(() => {
    getProviderDetail()
  }, [id])

  const productHeader = [
    {
      key: 'name',
      title: 'Service Name'
    },
    {
      key: 'price',
      title: 'Price'
    }
  ]

  return (
    <>
      <UserModule>
        <div className='container'>
          <div className='profileSection shadow p-md-5 my-5 border'>
            <div className='dashCard mb-4'>
              <div className='row mb-3'>
                <div className='col-12 mb-2'>
                  <div className='titleBox mb-3'>
                    <h3> Provider Details</h3>
                  </div>
                </div>
              </div>
              <div className='row mb-3'>
                <div className='col-12'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='row align-items-center'>
                        <div className='col-xl-3 col-md-3 mb-3'>
                          <div className='businessLogo'>
                            <img
                              src={`https://member.MATH KNOTs.com${profileData?.business_image}`}
                              className='mw-100'
                            />
                          </div>
                        </div>
                        <div className='col-md-9'>
                          <div className='row justify-content-between'>
                            <div className='col-xl-4 col-md-4 mb-3'>
                              <h4 className='secondaryLabel'>Business Name</h4>
                              <p className='secondaryText'>
                                {profileData?.business_name}
                              </p>
                            </div>
                            <div className='col-xl-4 col-md-4 mb-3'>
                              <h4 className='secondaryLabel'>Address</h4>
                              <p className='secondaryText'>
                                {profileData?.address}
                              </p>
                            </div>
                            <div className='col-xl-4 col-md-4 mb-3'>
                              <h4 className='secondaryLabel'>Website</h4>
                              <p className='secondaryText'>
                                <a href={profileData?.website}>View Link</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {profileData?.provider_services_directory &&
                  profileData?.provider_services_directory.length > 0 ? (
                    <div className='row my-3 textLeft'>
                      <div className='col=md-12'>
                        <div className='titleBox mb-0'>
                          <h3> Price List</h3>
                        </div>
                      </div>
                      <div className='col-12'>
                        <CustomTable headers={productHeader}>
                          <tbody>
                            {profileData?.provider_services_directory?.map(
                              (item, index) => (
                                <tr key={index}>
                                  <td className='text-capitalize'>
                                    {item.name}
                                  </td>
                                  <td className='text-capitalize'>
                                    {`$${item.price}`}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </CustomTable>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </UserModule>
    </>
  )
}

export default ProviderDetails
