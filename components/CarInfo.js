import "../src/styles/CarInfo.css";
import { useState } from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBBtn
} from "mdb-react-ui-kit";
import VINimage from "../src/img/whereIsMyVIN.png";

export function CarInfo({ CarImage }) {
  const [carInputs, setCarInputs] = useState(false);
  const [carChange, setCarChange] = useState(false);
  const [vinImg, setVinImg] = useState(false);
  const [camera, setCamera] = useState(false);
  const [carInputs2, setCarInputs2] = useState(false);
  const [vinImg2, setVinImg2] = useState(false);
  const [camera2, setCamera2] = useState(false);

  const carInputs2Show = () => setCarInputs2(!carInputs2);
  const carChangeShow = () => setCarChange(!carChange);
  const carInputsShow = () => setCarInputs(!carInputs);
  const vinShow = () => setVinImg(!vinImg);
  const cameraShow = () => setCamera(!camera);
  const vin2Show = () => setVinImg2(!vinImg2);
  const camera2Show = () => setCamera2(!camera2);

  return (
    <>
      {/* Car Info Mobile - Starts */}
      <div className="onlyPhone3">
        <div className="d-flex justify-content-center my-4 carInfoMobile">
          <div className="mainContainer">
            <div className="pencilCircleContainer">
              <div
                className="pencilCircle text-center pt-1"
                onClick={carChangeShow}
              >
                <i className="fa-solid fa-pencil text-white"></i>
              </div>
            </div>
            <img src={CarImage} height="60" alt="Car" />
          </div>
        </div>
      </div>
      {/* Car Info Mobile - Ends */}

      {/* Car Info Desktop - Starts */}
      <div className="onlyDesktop3">
        <div className="carInfoStyle col-7 mx-auto my-4 p-3">
          <div className="row d-flex justify-content-between p-0">
            <div className="col-5 p-0">
              <img src={CarImage} height="80" className="m-auto" alt="Car" />
            </div>
            <div className="col-5 p-0">
              <h5>Toyota Corolla</h5>
              <h5>2015</h5>
              <h6>Red Car</h6>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn buttonStyle mt-3 mb-2"
              onClick={carInputsShow}
            >
              Change Car
            </button>
          </div>
        </div>
      </div>
      {/* Car Info Desktop - Ends */}

      {/* Modals Section - Starts */}
      {/* Car Inputs */}
      <MDBModal show={carInputs} setShow={setCarInputs}>
        <MDBModalDialog>
          <MDBModalContent>
            <div className="text-center m-0 p-0">
              <h5 className="m-0 mt-4 py-2 px-3">
                Please confirm your VIN and Mileage below
              </h5>
            </div>

            <div className="d-flex justify-content-center flex-column my-3">
              <div className="col-10 mx-auto p-3">
                <div className="textOnInput mt-0">
                  <label htmlFor="inputText">
                    <span onClick={cameraShow}>
                      VIN
                      <i className="fa-solid fa-camera px-1 cameraIcon" />
                    </span>
                  </label>
                  <input className="formControl2" type="text" />
                </div>
                <p className="fs-13 mt-1 m-0 p-0" onClick={vinShow}>
                  Where is my VIN?
                  <i className="fa-solid fa-circle-info px-1" />
                </p>
              </div>
              <div className="col-10 mx-auto px-3 py-2">
                <div className="textOnInput m-0">
                  <label htmlFor="inputText">Mileage</label>
                  <input className="formControl2" type="text" />
                </div>
              </div>
            </div>

            <div className="col-9 col-sm-6 col-md-6 mx-auto">
              <div className="m-4 mt-0 d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btnModal"
                  onClick={carInputsShow}
                >
                  <i className="fa-solid fa-x fs-4 pt-1" />
                </button>
                <button type="button" className="btnModal">
                  <i className="fa-solid fa-check fs-2 pt-1" />
                </button>
              </div>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Change Car Modal */}
      <MDBModal show={carChange} setShow={setCarChange}>
        <MDBModalDialog>
          <MDBModalContent>
            <div className="col-11 col-sm-10 mx-auto my-4 p-0">
              <div className="row d-flex justify-content-between align-items-center p-0">
                <div className="col-6 col-sm-5 p-0 mx-auto">
                  <img src={CarImage} height="60" className="" alt="Car" />
                </div>
                <div className="col-6 col-sm-5 p-0 mx-auto">
                  <h5>Toyota Corolla</h5>
                  <h5>2015</h5>
                  <h6>Red Car</h6>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn buttonStyle mt-3 mb-2"
                  onClick={carInputs2Show}
                >
                  Change Car
                </button>
              </div>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Where to find my VIN Modal */}
      <MDBModal show={vinImg} setShow={setVinImg}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <h4 className="p-0 m-0">Where to find your VIN</h4>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={vinShow}
              ></MDBBtn>
            </MDBModalHeader>

            <div className="d-flex mx-auto my-3 pb-2">
              <img
                src={VINimage}
                alt="Instructions on where to find your VIN"
                height="230"
              />
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Camera Modal */}
      <MDBModal show={camera} setShow={setCamera}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <h4 className="p-0 m-0">Take a picture of your VIN</h4>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={cameraShow}
              ></MDBBtn>
            </MDBModalHeader>

            <div className="d-flex mx-auto my-3 pb-2">
              API to take pictures of your VIN
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Car Inputs Modal 2 */}
      <MDBModal show={carInputs2} setShow={setCarInputs2}>
        <MDBModalDialog>
          <MDBModalContent>
            <div className="text-center m-0 p-0">
              <h5 className="m-0 mt-4 py-2 px-3">
                Please confirm your VIN and Mileage below
              </h5>
            </div>

            <div className="d-flex justify-content-center flex-column my-3">
              <div className="col-10 mx-auto p-3">
                <div className="textOnInput mt-0">
                  <label htmlFor="inputText">
                    <span onClick={camera2Show}>
                      VIN
                      <i className="fa-solid fa-camera px-1 cameraIcon" />
                    </span>
                  </label>
                  <input className="formControl2" type="text" />
                </div>
                <p className="fs-13 mt-1 m-0 p-0" onClick={vin2Show}>
                  Where is my VIN?
                  <i className="fa-solid fa-circle-info px-1" />
                </p>
              </div>
              <div className="col-10 mx-auto px-3 py-2">
                <div className="textOnInput m-0">
                  <label htmlFor="inputText">Mileage</label>
                  <input className="formControl2" type="text" />
                </div>
              </div>
            </div>

            <div className="col-9 col-sm-6 col-md-6 mx-auto">
              <div className="m-4 mt-0 d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btnModal"
                  onClick={carInputs2Show}
                >
                  <i className="fa-solid fa-x fs-4 pt-1" />
                </button>
                <button type="button" className="btnModal">
                  <i className="fa-solid fa-check fs-2 pt-1" />
                </button>
              </div>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Where to find my VIN Modal 2 */}
      <MDBModal show={vinImg2} setShow={setVinImg2}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <h4 className="p-0 m-0">Where to find your VIN</h4>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={vin2Show}
              ></MDBBtn>
            </MDBModalHeader>

            <div className="d-flex mx-auto my-3 pb-2">
              <img
                src={VINimage}
                alt="Instructions on where to find your VIN"
                height="230"
              />
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Camera Modal 2 */}
      <MDBModal show={camera2} setShow={setCamera2}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <h4 className="p-0 m-0">Take a picture of your VIN</h4>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={camera2Show}
              ></MDBBtn>
            </MDBModalHeader>

            <div className="d-flex mx-auto my-3 pb-2">
              API to take pictures of your VIN
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {/* Modals Section - Ends */}
    </>
  );
}
