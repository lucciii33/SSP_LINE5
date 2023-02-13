import "../src/styles/Products.css";
import React, { useState } from "react";
import { MDBModal, MDBModalDialog, MDBModalContent } from "mdb-react-ui-kit";
import { CurrencyInput } from "./CurrencyInput";

export const Products = ({ packages }) => {
  const [description, setDescription] = useState(false);
  const [info, setInfo] = useState(false);
  const [edit, setEdit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [descName, setDescName] = useState("");
  const [descText, setDescText] = useState("");
  const [downPaymentValue, setDownPaymentValue] = useState("");

  const descriptionShow = () => setDescription(!description);
  const infoShow = () => setInfo(!info);
  const editShow = () => setEdit(!edit);
  const successShow = () => setSuccess(!success);
  const errorShow = () => setError(!error);

  const handleNavigation = (index) => {
    setCurrentIndex(index);
  };

  const [checkedStates, setCheckedStates] = useState(
    Array(packages.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
    console.log(newCheckedStates);
  };

  function filterAndAddTrailingZeros(str) {
    str = str.replace(/[^,.\d]/g, "");
    if (!str.includes(".")) {
      str = str + ".00";
    }
    return str;
  }

  const handleDownPaymentSubmit = (event) => {
    event.preventDefault();

    let fixedNumber = filterAndAddTrailingZeros(downPaymentValue);

    if (parseInt(fixedNumber, 10) < 70) {
      errorShow();
    } else {
      successShow();
      packages.forEach((single) => (single.downPayment = fixedNumber));
    }
  };

  return (
    <>
      {/* Product Tiles Mobile - Starts */}
      <div className="onlyPhone2 mx-auto col-12 col-sm-9 col-md-7 col-lg-5">
        {/* Product Tile - Starts */}
        <div className="glassBg1 p-3 mx-2 my-3">
          <div className="cardBg1 col-12 p-0">
            <div
              className={
                checkedStates[currentIndex] ? `checkedTile col-12` : ``
              }
            />
            <div className="p-4 tileContent">
              {/* Package Title */}
              <h5 className="p-0 fw-bold">{packages[currentIndex].title}</h5>

              {/* Protections */}
              {packages[currentIndex].protections.map(
                (eachProtection, index) => (
                  <div key={index} className="ms-4 mt-2">
                    <span>
                      <i
                        className="fa-solid fa-circle-plus"
                        onClick={() => {
                          setDescription(!description);
                          setDescName(eachProtection.name);
                          setDescText(eachProtection.description);
                        }}
                      />{" "}
                      {eachProtection.name}
                    </span>
                  </div>
                )
              )}

              {/* Terms */}
              <div className="p-0 mt-4">
                <span className="">
                  <strong>Term:</strong> {packages[currentIndex].term}
                </span>
              </div>

              {/* Down Payment */}
              <div className="d-flex justify-content-between align-items-center p-0 mt-3">
                <div>
                  <span>
                    <strong>Down Payment:</strong>{" "}
                    {packages[currentIndex].downPayment}
                  </span>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn buttonStyle2 py-2 buttonStyle3 ms-3"
                    onClick={() => {
                      setEdit(!edit);
                    }}
                  >
                    <i className="fa-solid fa-pencil iconColor" />
                  </button>
                </div>
              </div>

              {/* Monthly Payment */}
              <div className="d-flex justify-content-between align-items-center p-0 mt-3">
                <div>
                  <span>
                    <strong>Monthly Payment:</strong>{" "}
                    {packages[currentIndex].monthlyPayment}
                  </span>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn buttonStyle2 py-2 buttonStyle3 ms-3"
                    onClick={() => {
                      setInfo(!info);
                    }}
                  >
                    <i className="fa-solid fa-circle-info iconColor" />
                  </button>
                </div>
              </div>

              {/* Selector Check */}
              <div className="p-0 mt-3">
                <input
                  type="checkbox"
                  checked={checkedStates[currentIndex]}
                  onChange={() => handleCheckboxChange(currentIndex)}
                />
                <label className="ms-2">Select product</label>
              </div>
            </div>
          </div>
        </div>
        {/* Product Tile - Ends */}

        {/* Modal Navigation - Starts */}
        <div className="glassBg1 p-3 mx-2 my-3">
          <div className="d-flex justify-content-around py-2 px-4 fw-bold carouselNavInner">
            {packages.map((eachPackage, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(index)}
                className={
                  index === currentIndex
                    ? "carouselNav carouselItemSelected"
                    : "carouselNav carouselItemUnselected"
                }
              >
                {eachPackage.title}
              </div>
            ))}
          </div>
        </div>
        {/* Modal Navigation - Ends */}
      </div>
      {/* Product Tiles Mobile - Ends */}

      {/* Product Tiles Desktop - Starts */}
      <div className="onlyDesktop2">
        <div className="d-flex justify-content-center px-5">
          <div className="d-flex justify-content-evenly row mt-2 glassBg2">
            {packages.map((singlePackage, index) => (
              <div className="col-4 cardBg2 my-auto p-0" key={index}>
                <div
                  className={checkedStates[index] ? `checkedTile col-12` : ``}
                />
                <div className="p-4 tileContent">
                  {/* Package Title */}
                  <h5 className="p-0 fw-bold">{singlePackage.title}</h5>

                  {/* Protections */}
                  {singlePackage.protections.map((singleProtection, index) => (
                    <div key={index} className="ms-4 mt-2">
                      <span>
                        <i
                          className="fa-solid fa-circle-plus"
                          onClick={() => {
                            setDescription(!description);
                            setDescName(singleProtection.name);
                            setDescText(singleProtection.description);
                          }}
                        />{" "}
                        {singleProtection.name}
                      </span>
                    </div>
                  ))}

                  {/* Terms */}
                  <div className="p-0 mt-4">
                    <span className="">
                      <strong>Term:</strong> {singlePackage.term}
                    </span>
                  </div>

                  {/* Down Payment */}
                  <div className="d-flex justify-content-between align-items-center p-0 mt-3">
                    <div>
                      <span>
                        <strong>Down Payment:</strong>{" "}
                        {singlePackage.downPayment}
                      </span>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn buttonStyle2 py-2 buttonStyle3 ms-3"
                        onClick={() => {
                          setEdit(!edit);
                        }}
                      >
                        <i className="fa-solid fa-pencil iconColor" />
                      </button>
                    </div>
                  </div>

                  {/* Monthly Payment */}
                  <div className="d-flex justify-content-between align-items-center p-0 mt-3">
                    <div>
                      <span>
                        <strong>Monthly Payment:</strong>{" "}
                        {singlePackage.monthlyPayment}
                      </span>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn buttonStyle2 py-2 buttonStyle3 ms-3"
                        onClick={() => {
                          setInfo(!info);
                        }}
                      >
                        <i className="fa-solid fa-circle-info iconColor" />
                      </button>
                    </div>
                  </div>

                  {/* Selector Check */}
                  <div className="p-0 mt-3">
                    <input
                      type="checkbox"
                      checked={checkedStates[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <label className="ms-2">Select product</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Product Tiles Desktop - Ends */}

      {/* Total Monthly Payment - Starts */}
      <div className="mx-auto col-11 col-sm-8 col-md-6 col-lg-4 col-xl-5">
        <div className="glassBg1 mx-2 my-4 p-3">
          <div className="text-center cardBg1 p-3">
            <h4 className="pb-2 m-0">Total Monthly Payment</h4>
            <h2 className="m-0">{packages[currentIndex].monthlyPayment}</h2>
          </div>
        </div>
      </div>
      {/* Total Monthly Payment - Ends */}

      {/* Modals Section - Starts */}
      {/* Description Modal */}
      <MDBModal show={description} setShow={setDescription} tabIndex="1">
        <MDBModalDialog>
          <MDBModalContent>
            <div className="d-flex justify-content-between pt-3 px-4 p-0 m-0">
              <div className="m-0 p-0">
                <h5 className="m-0 pt-1">{descName}</h5>
                <h5 className="m-0 pt-2">Full Description</h5>
              </div>

              <div className="m-0 p-0" onClick={descriptionShow}>
                <i className="fa-solid fa-xmark" />
              </div>
            </div>

            <div className="d-flex justify-content-center flex-column my-3 px-4">
              <div className="col-11 m-0 p-0 pb-2 p-0">{descText}</div>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Info Modal */}
      <MDBModal show={info} setShow={setInfo} tabIndex="1">
        <MDBModalDialog>
          <MDBModalContent>
            <div className="d-flex justify-content-between pt-3 px-4 p-0 m-0">
              <div className="m-0 p-0" />

              <div className="m-0 p-0" onClick={infoShow}>
                <i className="fa-solid fa-xmark" />
              </div>
            </div>

            <div className="d-flex justify-content-center flex-column mb-4">
              <div className="text-center p-0 pb-2 px-4">
                <h4 className="p-0 m-0">
                  Total price for this coverage is{" "}
                  {packages[currentIndex].totalPayment}
                </h4>
              </div>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Edit Down sPayment Modal */}
      <MDBModal show={edit} setShow={setEdit} tabIndex="1" size="sm">
        <MDBModalDialog>
          <MDBModalContent>
            <div className="d-flex justify-content-between pt-3 px-4 p-0 m-0">
              <div className="m-0 p-0" />

              <div className="m-0 p-0" onClick={editShow}>
                <i className="fa-solid fa-xmark" />
              </div>
            </div>

            <div className="d-flex justify-content-center flex-column mb-4 col-11 mx-auto">
              <div className="py-2 p-0 mx-auto">
                <h5 className="p-0 m-0 mb-3">
                  Type your new down payment amount below
                </h5>
              </div>

              <form
                onSubmit={handleDownPaymentSubmit}
                className="d-flex p-0 m-0 col-8 mx-auto"
              >
                <div className="p-0 m-0 col-8 my-auto ">
                  <CurrencyInput
                    placeholder="$0.00"
                    type="text"
                    value={downPaymentValue}
                    className="form-control specialH"
                    onChange={(event) =>
                      setDownPaymentValue(event.target.value)
                    }
                  />
                </div>

                <div className="p-0 m-0 ms-auto my-auto">
                  <button type="submit" className="btn buttonStyle4">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Congratulations Modal */}
      <MDBModal show={success} setShow={setSuccess} tabIndex="1">
        <MDBModalDialog>
          <MDBModalContent>
            <div className="d-flex justify-content-between pt-3 px-4 p-0 m-0">
              <div className="m-0 p-0" />

              <div className="m-0 p-0" onClick={successShow}>
                <i className="fa-solid fa-xmark" />
              </div>
            </div>

            <div className="d-flex justify-content-center flex-column mb-4">
              <div className="mx-auto p-0 pb-2 px-4 text-center">
                <h4 className="p-0 m-0 pb-3">Congratulations!</h4>
                <h4 className="p-0 m-0 pb-2">
                  Your new down payment is {packages[currentIndex].downPayment}
                </h4>
              </div>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Error Modal */}
      <MDBModal show={error} setShow={setError} tabIndex="1">
        <MDBModalDialog>
          <MDBModalContent>
            <div className="d-flex justify-content-between pt-3 px-4 p-0 m-0">
              <div className="m-0 p-0" />

              <div className="m-0 p-0" onClick={errorShow}>
                <i className="fa-solid fa-xmark" />
              </div>
            </div>

            <div className="d-flex justify-content-center flex-column mb-4">
              <div className="mx-auto p-0 pb-2 pt-2 text-center">
                <h4 className="p-4 pt-2 m-0">
                  Sorry, but you can’t change your down payment below $70.00
                </h4>
                <button
                  className="btn buttonStyle"
                  type="button"
                  onClick={errorShow}
                >
                  Try again
                </button>
              </div>
            </div>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {/* Modals Section - Ends */}
    </>
  );
};
