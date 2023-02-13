import "../src/styles/UserInfoDetails.css";
import React, { useState, useEffect } from "react";
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
import VINimage from "../src/img/whereIsMyVIN.png";
import { Link, useNavigate, useParams } from "react-router-dom";

export function UserInfoDetails() {
  const [basicModal, setBasicModal] = useState(false);
  const [colaps, setColaps] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const [done, setDone] = useState(false);

  const [formData, setFormData] = useState({
    fisrtName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    workPhone: "",
    streetAddress: "",
    apt: "",
    zip: "",
    city: "",
    state: "",
    VIN: "",
    mileage: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const checkdata = (data) => {
      if (
        data.fisrtName === "" ||
        data.lastName === "" ||
        data.email === "" ||
        data.mobileNumber === "" ||
        data.workPhone === "" ||
        data.streetAddress === "" ||
        data.apt === "" ||
        data.zip === "" ||
        data.city === "" ||
        data.state === ""
        // data.VIN === "" ||
        // data.mileage === ""
      ) {
        setDone(false);
      } else if (
        (windowDimensions.width < 600 && data.fisrtName === "") ||
        data.lastName === "" ||
        data.email === "" ||
        data.mobileNumber === "" ||
        data.workPhone === "" ||
        data.streetAddress === "" ||
        data.apt === "" ||
        data.zip === "" ||
        data.city === "" ||
        data.state === ""
      ) {
        setDone(false);
      } else {
        setDone(true);
      }
    };
    checkdata(formData);
  }, [formData, done]);

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
    <div className="d-flex justify-content-center aling-items-center padding-controller-mobile">
      <div>
        <div className="white-box-input">
          <div className="margin-mobile">
            <h2 className="mt-5 ">
              Personal Information
              <small className="small-text">*Mandatory fields</small>
            </h2>
            <div
              className={windowDimensions.width > 600 ? "d-flex " : "d-grid"}
            >
              <div class="marging-controller-inputs">
                <div class="textOnInput mt-3">
                  <label for="inputText">
                    First Name<small className="small-text">*</small>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    name="fisrtName"
                    value={formData.fisrtName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="">
                <div class="textOnInput mt-3">
                  <label for="inputText">
                    Last Name<small className="small-text">*</small>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* here change */}
            <div class="">
              <div class="textOnInput mt-4">
                <label for="inputText">
                  Email<small className="small-text">*</small>
                </label>
                <input
                  class="form-control large-input"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div
              className={windowDimensions.width > 600 ? "d-flex " : "d-grid"}
            >
              <div class="marging-controller-inputs">
                <div class="textOnInput mt-4">
                  <label for="inputText">
                    Mobile Number<small className="small-text">*</small>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="">
                <div class="textOnInput mt-4">
                  <label for="inputText">
                    Work phone<small className="small-text">*</small>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    name="workPhone"
                    value={formData.workPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div class="">
                <div class="textOnInput mt-4">
                  <label for="inputText">
                    Street Address<small className="small-text">*</small>
                  </label>
                  <input
                    class="form-control large-input"
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div
              className={windowDimensions.width > 600 ? "d-flex " : "d-grid"}
            >
              <div class="marging-controller-inputs">
                <div class="textOnInput mt-4">
                  <label for="inputText">
                    Apt/Suite/Box<small className="small-text">*</small>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    name="apt"
                    value={formData.apt}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="">
                <div class="textOnInput mt-4">
                  <label for="inputText">
                    ZIP<small className="small-text">*</small>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div
              className={
                windowDimensions.width > 600 ? "d-flex mb-4" : "d-grid mb-4"
              }
            >
              <div class="marging-controller-inputs">
                <div class="textOnInput mt-4">
                  <label for="inputText">
                    City<small className="small-text">*</small>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="">
                <div class="textOnInput mt-4">
                  <label for="inputText">
                    State<small className="small-text">*</small>
                  </label>
                  <input
                    class="form-control"
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 pb-5 onlyDesktop">
              <h2>Car Information</h2>

              <div
                className={windowDimensions.width > 600 ? "d-flex " : "d-grid"}
              >
                <div class="marging-controller-inputs">
                  <div class="textOnInput mt-4">
                    <label for="inputText">
                      VIN<small className="small-text">*</small>
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      name="VIN"
                      value={formData.VIN}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="fs-13 mt-1 ms-1" onClick={toggleShow}>
                    where is my vin?
                  </p>
                </div>

                <div class="">
                  <div class="textOnInput mt-4">
                    <label for="inputText">
                      Mileage<small className="small-text">*</small>
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      name="mileage"
                      value={formData.milage}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center aling-items-center pb-5">
              <div>
                {windowDimensions.width > 600 ? (
                  <Link to="/UserInfo">
                    <button
                      className={
                        done ? "orange-button text-white" : "button-disable"
                      }
                      disabled={!done}
                    >
                      CONTINUE
                    </button>
                  </Link>
                ) : (
                  <Link to="/PaymentPage">
                    <button
                      className={
                        done ? "orange-button text-white" : "button-disable"
                      }
                      disabled={!done}
                    >
                      CONTINUE
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* modal here */}
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog>
            <MDBModalContent>
              {/* <MDBModalHeader>
                <MDBModalTitle>Modal title</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader> */}
              <MDBModalBody>
                <img src={VINimage} alt="vinimage" className="vinImage" />
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
      </div>
    </div>
  );
}
