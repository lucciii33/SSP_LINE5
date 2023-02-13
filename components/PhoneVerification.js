import "../src/styles/PhoneVerification.css";
import React, { useState } from "react";
import letter from "../src/img/Vector.png";

export function PhoneVerification() {
  const [phoneVerification, setPhoneVerification] = useState({
    digitOne: "",
    digitTwo: "",
    digitThree: "",
    digitFour: "",
    digitFive: "",
    digitSix: ""
  });

  const handleChange = (e) => {
    setPhoneVerification({
      ...phoneVerification,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="container-tire-loader d-flex justify-content-center align-items-center">
        <div className=" d-flex justify-content-center align-items-center ">
          <div className="glassBox-3 d-flex justify-content-center align-items-center">
            <div className="whiteBox-3 d-flex justify-content-center align-items-start my-auto px-3">
              <div className="mt-5">
                <h2 className="text-center">Phone Verification</h2>
                <p className="text-center px-5 fs-20-16">
                  Please enter the 6 digit code we sent to your number ending in
                  4567 below
                </p>
                <div>
                  <div className="text-center">
                    <img src={letter} alt="letter" className="image-letter" />
                  </div>
                  <div className="grey-box mt-5 d-flex justify-content-between align-items-center">
                    <div className="box-phone-verification">
                      <div>
                        <input
                          className="input-verification-phone"
                          name="digitOne"
                          value={phoneVerification.digitOne}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="box-phone-verification">
                      <div>
                        <input
                          className="input-verification-phone"
                          name="digitTwo"
                          value={phoneVerification.digitTwo}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="box-phone-verification">
                      <div>
                        <input
                          className="input-verification-phone"
                          name="digitThree"
                          value={phoneVerification.digitThree}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="box-phone-verification">
                      <div>
                        <input
                          className="input-verification-phone"
                          name="digitFour"
                          value={phoneVerification.digitFour}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="box-phone-verification">
                      <div>
                        <input
                          className="input-verification-phone"
                          name="digitFive"
                          value={phoneVerification.digitFive}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="box-phone-verification">
                      <div>
                        <input
                          className="input-verification-phone"
                          name="digitSix"
                          value={phoneVerification.digitSix}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <button className="mt-phone-verfication-5 orange-button">
                      CONTINUE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
