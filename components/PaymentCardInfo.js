import "../src/styles/PaymentCardInfo.css";
import React, { useState, useEffect } from "react";
import iconPlus from "../src/img/iconPlus.png";
import iconInfo from "../src/img/icon.png";
import arrowDown from "../src/img/arrowDown.png";
import { Link } from "react-router-dom";

export function PaymentCardInfo() {
  const [summary, setSummary] = useState(false);

  const getWindowDimensions = () => {
    const { innerWidth: width } = window;
    return {
      width
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <div className="justify-content-center align-items-center p-4 row">
        <div className="d-flex flex-column flex-lg-row p-0">
          {/* Card Section - Starts */}
          <div className="buttonsSectionBg mx-auto col-12 col-sm-10 col-md-8 col-lg-6 p-0">
            <div className="p-4 mx-auto text-center col-12">
              {/* Main Title */}
              <h2 className="m-4">Enter your payment card details below</h2>

              <div className="p-0 contentSection my-3 mx-auto">
                {/* Subtitle and price per transaction */}
                <div className="d-flex justify-content-between mx-auto col-11 mt-4 p-0">
                  <div className="p-0">
                    <p className="m-0">Payment Card</p>
                  </div>
                  <div className="p-0">
                    <small className="fs-10">
                      $4.95 credit card transaction fee
                    </small>
                  </div>
                </div>

                {/* Credit card inputs */}
                <div className="d-flex justify-content-center mx-auto col-11 p-0 mt-2 creditCardBg">
                  <div className="p-0 m-0">
                    <div className="p-4">
                      <div className="d-grid">
                        <label className="text-start m-0 ms-2 text-white">
                          Name of Card holder
                        </label>
                        <input className="ms-2 input-size" />
                      </div>

                      <div className="d-grid">
                        <label className="text-start m-0 ms-2 text-white">
                          Name of Card holder
                        </label>
                        <input className="ms-2 input-size" />
                      </div>

                      <div className="ms-2 d-flex text-start ">
                        <div className="">
                          <label className="m-0 text-white">Date</label>
                          <input
                            className="input-size-2"
                            style={
                              windowDimensions.width <= 600
                                ? { width: "100px" }
                                : { width: "130px" }
                            }
                          />
                        </div>

                        <div>
                          <label className="m-0 text-white">Code</label>
                          <input
                            className="ms-4 input-size-2"
                            style={
                              windowDimensions.width <= 600
                                ? { width: "100px" }
                                : { width: "130px" }
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Continue button */}
                <div className="d-flex justify-content-end mx-auto col-11 p-0 mt-4">
                  <div className="">
                    <Link to="/PhoneVerification">
                      {" "}
                      <button className="button-credit-card">CONTINUE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card Section - Ends */}

          {/* Summary Section Desktop - Starts */}
          <div className="summarySectionBg mx-auto col-12 col-sm-10 col-md-8 col-lg-6 p-0">
            <div className="p-4">
              <h3>Summary</h3>
              <p>Package 1</p>
              <p className="ms-3 m-0">
                <span>
                  <img src={iconPlus} alt="plus" className="plus" />
                </span>{" "}
                Protective CostGuard
              </p>
              <p className="ms-3 m-0">
                <span>
                  <img src={iconPlus} alt="plus" className="plus" />
                </span>{" "}
                TruWarranty TruTire{" "}
              </p>
              <p className="ms-3 m-0">
                <span>
                  <img src={iconPlus} alt="plus" className="plus" />
                </span>{" "}
                ASC VSC
              </p>
              <p className="ms-2 mt-4">
                <span>
                  <strong>24 months</strong>{" "}
                  <img src={iconInfo} alt="plus" className="plus ms-3" />
                </span>{" "}
              </p>
              <div className="line-separation my-3"></div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="payment-medium-text">Down payment</p>
                </div>

                <div>
                  <p className="payment-medium-text">$75.00</p>
                </div>
              </div>
              <div className="line-separation my-3"></div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="payment-medium-text">Total Monthly Payment</p>
                </div>

                <div>
                  <p className="payment-medium-text">$125.00</p>
                </div>
              </div>
            </div>

            <div className="line-separation"></div>
            <div>
              <p className="text-end payment-medium-text p-3">
                Due today: <span>$75.00</span>
              </p>
            </div>
          </div>
          {/* Summary Section Desktop - Ends */}

          {/* Summary Section Mobile - Starts */}
          <div className="summarySectionBgMobile mx-auto col-12 col-sm-10 col-md-8 mt-4 mt-lg-0 p-3">
            <span className="d-flex flex-column col-12 p-0">
              <div className="d-flex justify-content-between align-items-center col-12 px-3 py-2">
                <div>
                  <h1 className="m-0">Summary</h1>
                </div>

                <div>
                  <img
                    alt="Drop"
                    src={arrowDown}
                    onClick={() => setSummary(!summary)}
                  />
                </div>
              </div>

              {/* Toggled Down Section */}
              {summary && (
                <div className="summarySectionMobileContent col-12 p-0">
                  <div className="p-3 col-12 p-0">
                    <p>Package 1</p>
                    <p className="ms-3 m-0">
                      <span>
                        <img src={iconPlus} alt="plus" className="plus" />
                      </span>{" "}
                      Protective CostGuard
                    </p>
                    <p className="ms-3 m-0">
                      <span>
                        <img src={iconPlus} alt="plus" className="plus" />
                      </span>{" "}
                      TruWarranty TruTire{" "}
                    </p>
                    <p className="ms-3 m-0">
                      <span>
                        <img src={iconPlus} alt="plus" className="plus" />
                      </span>{" "}
                      ASC VSC
                    </p>
                    <p className="ms-2 mt-4">
                      <span>
                        <strong>24 months</strong>{" "}
                        <img src={iconInfo} alt="plus" className="plus ms-3" />
                      </span>{" "}
                    </p>
                    <div className="line-separation my-3"></div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="payment-medium-text">Down payment</p>
                      </div>

                      <div>
                        <p className="payment-medium-text">$75.00</p>
                      </div>
                    </div>

                    <div className="line-separation my-3"></div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="payment-medium-text">
                          Total Monthly Payment
                        </p>
                      </div>

                      <div>
                        <p className="payment-medium-text">$125.00</p>
                      </div>
                    </div>
                    <div className="line-separation"></div>
                    <div>
                      <p className="text-end payment-medium-text p-3">
                        Due today: <span>$75.00</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </span>
          </div>
          {/* Summary Section Mobile - Ends */}
        </div>
      </div>
    </>
  );
}
