/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 03/10/2023 - 02:07:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/10/2023
    * - Author          : Saif
    * - Modification    : 
**/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import CustomFilters from "../CustomFilters";

import "./style.css";

const CustomTable = (props) => {
  return (
    <>
      <CustomFilters
        filterSort={props?.filterSort}
        filterSortValue={props?.filterSortValue}
        setFilterSortValue={props?.setFilterSortValue}
        filterSortValues={props?.filterSortValues}

        filterSearch={props?.filterSearch}
        filterSearchValue={props?.filterSearchValue}
        setFilterSearchValue={props?.setFilterSearchValue}

        dateFilter={props?.dateFilter}
        filterFrom={props?.filterFrom}
        setFilterFrom={props?.setFilterFrom}
        filterTo={props?.filterTo}
        setFilterTo={props?.setFilterTo}
      />
      <div className="customTable">
        <table>
          <thead>
            <tr>
              {props?.headers.map((header) => (
                <th key={header.key}>
                 
                  {header.title}</th>
              ))}
            </tr>
          </thead>
          {props?.children}
        </table>
      </div>

    </>
  );
};

export default CustomTable;
