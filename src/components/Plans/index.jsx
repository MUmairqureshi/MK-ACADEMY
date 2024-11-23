/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 16/09/2023 - 01:44:50
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/09/2023
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'
import { Link } from 'react-router-dom'

export const Plans = () => {
    return (
        <section className="our-plans">
            <div className="container mb-5">
                <h2 className="main-title text-center text-uppercase">Our <span>Plans</span></h2>
                <div className='logoBox pt-5 plusLogo'>
                    <img src="./images/logo.png" className="img-fluid" />
                </div>
                <div className="row flex-md-nowrap overflow-x-auto">
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="package-item">
                            <div className="package">
                                <div className="price">
                                    <div className="package-type">
                                        <p className="text-uppercase first">INDIVIDUAL</p>
                                        <p className="text-uppercase second">monthly plan</p>
                                    </div>
                                    <div className="actual-price">
                                        <p className="price">$49.99</p>

                                        <p className="negotiate">per month </p>
                                    </div>
                                </div>
                                <div className="ul-pkg">
                                    <div className='qcmLogo'>
                                        <img src="./images/QCM-$30-Horizontal.svg" className="img-fluid" />
                                    </div>
                                    <ul>
                                        {/* <li>$30 Visits</li> */}
                                        <li>Chiropractor</li>
                                        <li>Counseling</li>
                                        <li>Dentist</li>
                                        <li>Diabetic Eye Care</li>
                                        <li>Diabetes Management</li>
                                        <li>Endodontics</li>
                                        <li>Family Care Doctor</li>
                                        <li>Imaging Center</li>
                                        <li>Lab Services</li>
                                        <li>Ophthalmologist</li>
                                        <li>Pediatrician</li>
                                        <li>Podiatry</li>
                                        <li>Primary Physician</li>
                                        <li>Sleep Apnea Testing</li>
                                        <li>Urgent Care</li>
                                        <li>Women Care</li>

                                    </ul>
                                </div>
                                <div className="rush"> WITH MORE TO COME </div>
                                <div className="text-center package-footer py-4">
                                    <Link to="/individual-plan-plus" className="btn-c bg-red  text-uppercase color-white">Select
                                        Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="package-item">
                            <div className="package">
                                <div className="price">
                                    <div className="package-type">
                                        <p className="text-uppercase first">COUPLES</p>
                                        <p className="text-uppercase second">monthly plan</p>
                                    </div>
                                    <div className="actual-price">
                                        <p className="price">$79.99</p>

                                        <p className="negotiate">per month </p>
                                    </div>
                                </div>
                                <div className="ul-pkg">
                                    <div className='qcmLogo'>
                                        <img src="./images/QCM-$30-Horizontal.svg" className="img-fluid" />
                                    </div>
                                    <ul>
                                        {/* <li>$30 Visits</li> */}
                                        <li>Chiropractor</li>
                                        <li>Counseling</li>
                                        <li>Dentist</li>
                                        <li>Diabetic Eye Care</li>
                                        <li>Diabetes Management</li>
                                        <li>Endodontics</li>
                                        <li>Family Care Doctor</li>
                                        <li>Imaging Center</li>
                                        <li>Lab Services</li>
                                        <li>Ophthalmologist</li>
                                        <li>Pediatrician</li>
                                        <li>Podiatry</li>
                                        <li>Primary Physician</li>
                                        <li>Sleep Apnea Testing</li>
                                        <li>Urgent Care</li>
                                        <li>Women Care</li>
                                    </ul>
                                </div>
                                <div className="rush"> WITH MORE TO COME </div>
                                <div className="text-center package-footer py-4">
                                    <Link to="/couple-plan-plus" className="btn-c bg-red  text-uppercase color-white">Select
                                        Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="package-item">
                            <div className="package">
                                <div className="price">
                                    <div className="package-type">
                                        <p className="text-uppercase first">Family</p>
                                        <p className="text-uppercase second">monthly plan</p>
                                    </div>

                                    <div className="actual-price with-upto-text">
                                        <p className="price">$109.99</p>

                                        <p className="negotiate">per month</p>
                                        <span className="upto-text">Starting at 3 members</span>
                                    </div>
                                </div>
                                <div className="ul-pkg">
                                    <div className='qcmLogo'>
                                        <img src="./images/QCM-$30-Horizontal.svg" className="img-fluid" />
                                    </div>
                                    <ul>
                                        {/* <li>$30 Visits</li> */}
                                        <li>Chiropractor</li>
                                        <li>Counseling</li>
                                        <li>Dentist</li>
                                        <li>Diabetic Eye Care</li>
                                        <li>Diabetes Management</li>
                                        <li>Endodontics</li>
                                        <li>Family Care Doctor</li>
                                        <li>Imaging Center</li>
                                        <li>Lab Services</li>
                                        <li>Ophthalmologist</li>
                                        <li>Pediatrician</li>
                                        <li>Podiatry</li>
                                        <li>Primary Physician</li>
                                        <li>Sleep Apnea Testing</li>
                                        <li>Urgent Care</li>
                                        <li>Women Care</li>
                                    </ul>
                                </div>
                                <div className="rush"> WITH MORE TO COME </div>
                                <div className="text-center package-footer py-4">
                                    <Link to="/family-plan-plus" className="btn-c bg-red  text-uppercase color-white">Select
                                        Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                {/* <h2 className="main-title text-center text-uppercase">Our <span>Plans</span></h2> */}
                <div className='logoBox mt-5 pt-5'>
                    <img src="https://MATH KNOTs.com/wp-content/themes/listingpro/MATH KNOTs/images/MATH KNOTs.png" className="img-fluid" />
                </div>
                <div className="row flex-md-nowrap overflow-x-auto">
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="package-item">
                            <div className="package">
                                <div className="price">
                                    <div className="package-type">
                                        <p className="text-uppercase first">INDIVIDUAL</p>
                                        <p className="text-uppercase second">monthly plan</p>
                                    </div>
                                    <div className="actual-price">
                                        <p className="price">$29.99</p>

                                        <p className="negotiate">per month </p>
                                    </div>
                                </div>
                                <div className="ul-pkg">
                                    {/* <div className='qcmLogo'>
                                        <img src="./images/qcm.png" />
                                    </div> */}
                                    <ul>
                                        {/* <li>$30 Visits</li> */}
                                        <li>Chiropractor</li>
                                        <li>Counseling</li>
                                        <li>Dentist</li>
                                        <li>Diabetic Eye Care</li>
                                        <li>Diabetes Management</li>
                                        <li>Endodontics</li>
                                        <li>Family Care Doctor</li>
                                        <li>Imaging Center</li>
                                        <li>Lab Services</li>
                                        <li>Ophthalmologist</li>
                                        <li>Pediatrician</li>
                                        <li>Podiatry</li>
                                        <li>Primary Physician</li>
                                        <li>Sleep Apnea Testing</li>
                                        <li>Urgent Care</li>
                                        <li>Women Care</li>

                                    </ul>
                                </div>
                                <div className="rush"> WITH MORE TO COME </div>
                                <div className="text-center package-footer py-4">
                                    <Link to="/individual-plan" className="btn-c bg-red  text-uppercase color-white">Select
                                        Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="package-item">
                            <div className="package">
                                <div className="price">
                                    <div className="package-type">
                                        <p className="text-uppercase first">COUPLES</p>
                                        <p className="text-uppercase second">monthly plan</p>
                                    </div>
                                    <div className="actual-price">
                                        <p className="price">$39.99</p>

                                        <p className="negotiate">per month </p>
                                    </div>
                                </div>
                                <div className="ul-pkg">
                                    {/* <div className='qcmLogo'>
                                        <img src="./images/qcm.png" />
                                    </div> */}
                                    <ul>
                                        {/* <li>$30 Visits</li> */}
                                        <li>Chiropractor</li>
                                        <li>Counseling</li>
                                        <li>Dentist</li>
                                        <li>Diabetic Eye Care</li>
                                        <li>Diabetes Management</li>
                                        <li>Endodontics</li>
                                        <li>Family Care Doctor</li>
                                        <li>Imaging Center</li>
                                        <li>Lab Services</li>
                                        <li>Ophthalmologist</li>
                                        <li>Pediatrician</li>
                                        <li>Podiatry</li>
                                        <li>Primary Physician</li>
                                        <li>Sleep Apnea Testing</li>
                                        <li>Urgent Care</li>
                                        <li>Women Care</li>
                                    </ul>
                                </div>
                                <div className="rush"> WITH MORE TO COME </div>
                                <div className="text-center package-footer py-4">
                                    <Link to="/couple-plan" className="btn-c bg-red  text-uppercase color-white">Select
                                        Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="package-item">
                            <div className="package">
                                <div className="price">
                                    <div className="package-type">
                                        <p className="text-uppercase first">Family</p>
                                        <p className="text-uppercase second">monthly plan</p>
                                    </div>

                                    <div className="actual-price with-upto-text">
                                        <p className="price">$49.99</p>

                                        <p className="negotiate">per month</p>
                                        <span className="upto-text">Up to 5 members</span>
                                    </div>
                                </div>
                                <div className="ul-pkg">
                                    {/* <div className='qcmLogo'>
                                        <img src="./images/qcm.png" />
                                    </div> */}
                                    <ul>
                                        {/* <li>$30 Visits</li> */}
                                        <li>Chiropractor</li>
                                        <li>Counseling</li>
                                        <li>Dentist</li>
                                        <li>Diabetic Eye Care</li>
                                        <li>Diabetes Management</li>
                                        <li>Endodontics</li>
                                        <li>Family Care Doctor</li>
                                        <li>Imaging Center</li>
                                        <li>Lab Services</li>
                                        <li>Ophthalmologist</li>
                                        <li>Pediatrician</li>
                                        <li>Podiatry</li>
                                        <li>Primary Physician</li>
                                        <li>Sleep Apnea Testing</li>
                                        <li>Urgent Care</li>
                                        <li>Women Care</li>
                                    </ul>
                                </div>
                                <div className="rush"> WITH MORE TO COME </div>
                                <div className="text-center package-footer py-4">
                                    <Link to="/family-plan" className="btn-c bg-red  text-uppercase color-white">Select
                                        Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row mt-5">
                    <div className='col-md-12'>
                        <div className='logoBox'>
                            <img src="https://MATH KNOTs.com/wp-content/themes/listingpro/MATH KNOTs/images/MATH KNOTs.png" className="img-fluid" />
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
