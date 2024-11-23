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
import React, { useEffect, useState } from "react";
import { UserModule } from "../Layout";
import { SubHeader } from "../../../components/SubHeader";
import { HomeCategory } from "../../../components/Categories";
import "./index.css";
import { Link } from "react-router-dom";

export const UserScreen = () => {
  const [membersData, setMembersData] = useState({});
  const [userData, setUserData] = useState({});
  const [tabs, setTabs] = useState(false);

  useEffect(() => {
    document.title = "MATH KNOTs | Dashboard";
  }, []);

  useEffect(() => {
    const LogoutData = localStorage.getItem("login");
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`https://member.MATH KNOTs.com/backend/get_user_and_member_data/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${LogoutData}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserData(data.user);
        setMembersData(data.members);
        document.querySelector(".loaderBox").classList.add("d-none");
      })
      .catch((error) => {
        console.log(error);
        document.querySelector(".loaderBox").classList.add("d-none");
      });
  }, []);
  return (
    <UserModule>
      <SubHeader title="Dashboard" />
      <div className="container">
        <div className="profileSection shadow my-5 border bg-grey">
          <div className="row my-4">
            <div className="col-md-3">
              <div className="welcomeBox text-center">
                <h3>Welcome</h3>
                <p className="my-4">
                  Click on the button to see the participating Providers with
                  contact information.
                </p>
                <Link
                  to="/proivder-list"
                  className="btn-c bg-blue color-white mb-2"
                >
                  Check Provider Pricing
                </Link>
              </div>
            </div>
            <div className="col-md-9">
              <HomeCategory />
            </div>
          </div>
        </div>
      </div>
    </UserModule>
  );
};
