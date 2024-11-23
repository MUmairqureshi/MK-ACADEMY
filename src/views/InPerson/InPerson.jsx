import React from "react";
import { UserLayout } from "../Layout";
import './InPerson.css'
const InPerson = () => {
  return (
    <UserLayout>
      <section className="inPerson_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <p>
                  We provide in-person one-on-one and small group math tutoring
                  classes at our Fairfax location for all grades and levels.
                  Send us a request with your child’s needs and we will reach
                  out to you.{" "}
                </p>
                <h2> Email: mkacademy2021@gmail.com</h2>
                <div className="actionBtn mt-5">
                  <a href="">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default InPerson;
