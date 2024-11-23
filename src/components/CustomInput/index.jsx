/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 29/08/2023 - 01:17:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/08/2023
    * - Author          : Saif
    * - Modification    : 
**/
import { useState } from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

const CustomInput = props => {
  const [typePass, setTypePass] = useState(true)

  const togglePassType = () => {
    setTypePass(!typePass)
  }

  return (
    <>
      <div className='inputWrapper'>
        {props?.label && (
          <label htmlFor={props?.id} className={props?.labelClass}>
            {props?.label}
            <span>{props?.required ? '*' : ''}</span>
          </label>
        )}
        {props?.type === 'password' ? (
          <div className='passwordWrapper'>
            <span
              // type='button'
              className='eyeButton'
              onClick={togglePassType}
              // tabIndex='2'
            >
              <FontAwesomeIcon icon={typePass ? faEyeSlash : faEye} />
            </span>
            
            <input
              type={typePass ? 'password' : 'text'}
              placeholder={props?.placeholder}
              required={props?.required}
              id={props?.id}
              name={props?.name}
              className={`${props?.inputClass} passInput`}
              onChange={props?.onChange}
              value={props?.value}
              onBlur={props?.onBlur}
              // tabIndex='1'
            />
            
          </div>
        ) : (
          <input
            type={props?.type}
            place={props?.show}
            placeholder={props?.placeholder}
            required={props?.required}
            id={props?.id}
            name={props?.name}
            className={props?.inputClass}
            onChange={props?.onChange}
            value={props?.value}
            max={props?.max}
            pattern={props?.pattern}
            disabled={props?.disabled}
            onBlur={props?.onBlur}
          />
        )}
      </div>
    </>
  )
}
export default CustomInput
