/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 19/01/2024 - 01:54:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/01/2024
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './style.css'

 const SelectBox = (props) => {
    const handleClick = (e) => {
        console.log(e)
    }

    return (
        <div className="inputWrapper">
            <div className="inputIcon">
                <FontAwesomeIcon icon={props?.iconShow} />
            </div>
            {props?.label && <label htmlFor={props?.id} className={props?.labelClass}>{props?.label}{props?.required ? '*' : ''}</label>}
            <div className="fieldData">
                <select className={props?.selectClass} name={props?.name} required={props.required}>
                    <option value=''>{props?.placehoder}</option>
                    {Array.isArray(props.option) && props.option.map(item => (
                        <option value={item.code}>{item.name}</option>
                    ))}
                </select>
               {props?.buttonAction && (
                <button type='button' onClick={handleClick}><FontAwesomeIcon icon={faTrashAlt} className="removeField"></FontAwesomeIcon></button>
               )
               }
            </div>

        </div>
    )
}

export default SelectBox;