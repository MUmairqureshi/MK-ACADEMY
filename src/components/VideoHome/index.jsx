/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 31/01/2024 - 04:54:17
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 31/01/2024
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'
import { Link } from 'react-router-dom'

export const VideoHome = () => {
    return (
        <section className="video-section bg-grey" id="video">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div >
                            <video width="100%"  controls >
                                <source src="https://MATH KNOTs.com/wp-content/themes/listingpro/assets/images/MATH KNOTs Explainer Video - Jan 23rd.mp4" type="video/mp4" ></source>
                            </video>

                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="content">
                            <h2 className="main-title text-uppercase">Don't <span>Break</span> the bank</h2>
                            <p>Going to the doctors doesn’t have to break the bank!!!<br /><br />

                                Stop wasting your life savings on insurance companies when you can take control of your
                                health and your costs!<br /><br />

                                Sick N Well offers transparent pricing while
                                allowing you affordable, quality care.
                            </p>
                            <p className="main-title"><strong className="color-red"><Link to="/small-business">JOIN NOW </Link></strong> to get <strong><span>exclusive</span></strong> provider pricing on selected services</p>
                            <p className="links">
                                <Link className="color-red" to="/individual-plan-plus">Individual Plan</Link>
                                <span> | </span>
                                <Link className="color-red" to="/couple-plan-plus"> Couples Plan</Link>
                                <span> | </span>
                                <Link className="color-red" to="/family-plan-plus"> Family Plan</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
