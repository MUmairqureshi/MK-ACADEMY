/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 22/02/2024 - 23:17:00
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/02/2024
 * - Author          : Saif
 * - Modification    :
 **/
import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomButton = (props) => {
  return (
    <>
      <button
        type={props?.type}
        disabled={props?.disabled}
        className={`customButton ${props?.variant} ${props?.className}`}
        onClick={props?.onClick}
      >
       <span className="mx-2"> {props?.text}</span> <FontAwesomeIcon icon={props.icon} />
      </button>
    </>
  );
};
export default CustomButton;
