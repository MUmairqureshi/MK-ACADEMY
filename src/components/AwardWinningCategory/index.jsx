import { awardWinningImg } from "../../assets/images";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

// import React from 'react'

const AwardWinnning = () => {
  return (
    <>
      <section className="award_winning_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <div className="chartImage">
                <img className="mw-100" src={awardWinningImg}></img>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="award_content">
                <h1>AWARD WINNING</h1>
                <p>
                  {" "}
                  Our award winning programs have made student’s reach their
                  optimum potential leading to best career paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AwardWinnning;
