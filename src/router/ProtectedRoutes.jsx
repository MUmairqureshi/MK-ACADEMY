/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 21/09/2023 - 22:39:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 21/09/2023
    * - Author          : Saif
    * - Modification    : 
**/
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
export const ProtectedRoutes = (props) => {
    const { Components } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login) {
            navigate('/login');
        }
    })
    return (
        <>
            <Components />
        </>
    )
}