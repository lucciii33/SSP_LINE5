import "../src/styles/PaymentPage.css";
import React, { useState } from "react";
import buttonIcon from "../src/img/buttonIcon.png";
import iconPlus from "../src/img/iconPlus.png";
import iconInfo from "../src/img/icon.png";
import arrowDown from "../src/img/arrowDown.png";
import user from "../src/img/VectorUser.png";
import pencil from "../src/img/pencil.png";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
} from "mdb-react-ui-kit";
import pen from "../src/img/orangePen.png";
import person from "../src/img/iconPerson.png";
import email from "../src/img/iconEmail.png";

export function PaymentPage() {
  const [summary, setSummary] = useState(false);
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <div className=" ">
        <div className=" justify-content-center align-items-center p-5 row">
          <div className=" d-flex justify-content-center">
            <div className="justPhone mb-5">
              <div className="user-circle ">
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
          <div className="payment-bg text-center ">
            <div className="col-xs-12 col-sm-6 col-lg-12">
              <p className="mt-5">Step 1 </p>
              <h2 className="mt-5">Payment Method</h2>

              <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="card-button ">
                  <img
                    alt="bank"
                    src={buttonIcon}
                    className="icon-bank mt-payment-4"
                  />
                  <p className="button-text mt-payment-4">
                    Add Payment <br /> Method
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-xs-12 col-sm-6 col-lg-6">
            <div className=" summary-bg ">
              <div className=" p-4">
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

            {/* //////another div for mobile sumary colaps///// */}

            <div className="bg-whole ">
              <div className="d-flex justify-content-between mt-2 ">
                <div>
                  <h1>Summary</h1>
                </div>

                <div>
                  <img
                    alt="Drop"
                    src={arrowDown}
                    onClick={() => setSummary(!summary)}
                  />
                </div>
              </div>

              {summary && (
                <div className=" summary-bg-mobile">
                  <div className=" p-4">
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
            </div>
          </div>
        </div>
      </div>

      {/* ///////////modal user info here///////////////// */}

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
    </>
  );
}
