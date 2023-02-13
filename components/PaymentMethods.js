import "../src/styles/PaymentMethods.css";
import React, { useState } from "react";
import iconPlus from "../src/img/iconPlus.png";
import iconInfo from "../src/img/icon.png";
import arrowDown from "../src/img/arrowDown.png";
import user from "../src/img/VectorUser.png";
import pencil from "../src/img/pencil.png";
import check from "../src/img/cheque.png";
import card from "../src/img/debit-cards.png";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody
} from "mdb-react-ui-kit";
import person from "../src/img/iconPerson.png";
import email from "../src/img/iconEmail.png";

export function PaymentMethods() {
  const [summary, setSummary] = useState(false);
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <div className="justify-content-center align-items-center p-5 row">
        {/* User Info Section - Starts */}
        <div className="d-flex justify-content-center">
          <div className="justPhone mb-5">
            <div className="user-circle">
              <div className="d-flex justify-content-center align-items-center">
                <div className="circle-icon-edit text-center ">
                  <img
                    alt="pencil-icon"
                    className="pencil-icon mt-3"
                    src={pencil}
                    onClick={toggleShow}
                  />
                </div>
              </div>
              <img src={user} className="user-icon" alt="user-icon" />
            </div>
          </div>
        </div>
        {/* User Info Section - Ends */}

        <div className="d-flex flex-column flex-lg-row p-0">
          {/* Buttons Section - Starts */}
          <div className="buttonsSectionBg mx-auto col-12 col-sm-10 col-md-8 col-lg-6 p-0">
            <div className="p-4 col-11 mx-auto  text-center">
              <h2 className="mt-4 mt-md-5">
                Please select how you would like pay
              </h2>

              <div className="d-flex justify-content-around align-items-center mt-5">
                <div className="d-flex justify-content-center align-items-center me-3">
                  <div>
                    <Link to="/PaymentBankInfo">
                      <div className="methodsBox p-3 d-flex justify-content-center align-items-center">
                        <img
                          alt="check"
                          src={check}
                          className="icon-payment-methods"
                        />
                      </div>
                    </Link>
                    <p>Add Bank Account</p>
                  </div>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <Link to="/PaymentCardInfo">
                      <div className="methodsBox p-3 d-flex justify-content-center align-items-center">
                        <img
                          alt="check"
                          src={card}
                          className="icon-payment-methods"
                        />
                      </div>
                    </Link>
                    <p>Add Payment Card</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Buttons Section - Ends */}

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
              {/* Summary Section Mobile - Ends */}
            </span>
          </div>
        </div>
      </div>

      {/* User Info Modal - Starts */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Personal Information</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="">
                {/* <div className=" my-auto px-5">
                  <div>Personal Information</div>
                </div> */}
                <div className="">
                  <p className="ms-5 m-2">
                    <img alt="icon" src={person} className="icon-user me-2" />
                    Andrea Villarroel
                  </p>
                </div>
                <div className="">
                  <p className="ms-5 m-2">
                    <img alt="icon" src={email} className="icon-email me-2" />
                    Andreav@gmail.com
                  </p>
                </div>
                <p className="ms-5 m-2">786-356-8998</p>
                <p className="ms-5 m-2">
                  123 Main Street Apt G120 Miami Florida, 33323
                </p>
                <div className="d-flex justify-content-center">
                  <div>
                    <Link to="/UserInfoDetails">
                      <button className="orange-button">Edit info</button>
                    </Link>
                  </div>
                </div>
              </div>
            </MDBModalBody>

            {/* <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter> */}
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {/* User Info Modal - Ends */}
    </>
  );
}
