/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 19/01/2024 - 01:19:38
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/01/2024
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'
import { Link } from 'react-router-dom'

export const TopBar = () => {
    return (
        <div className="top-nav bg-blue color-white">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="text-with-icon d-flex">
                        <i className="fas fa-phone"></i> <span><Link to="#">(877) 346-WELL</Link></span>
                    </div>
                    <div className="d-flex align-items-center btn-container">
                        <Link to="/login" className="bg-red color-white text-uppercase btn-c font-weight-semibold">Member login</Link>
                        <Link to="/contact-us" className="btn-outlined color-white text-uppercase  font-weight-semibold">Contact us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
