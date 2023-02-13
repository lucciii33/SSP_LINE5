import "../src/styles/Footer.css";
import "../src/styles/SignDocument.css";
import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import iconSign from "../src/img/IconSing.png";
import signature from "../src/img/signature.png";

export function SignDocument() {
  return (
    <>
      <div className="container-tire-loader d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center ">
          <div className="glassBox d-flex justify-content-center align-items-center">
            <div className="whiteBox d-flex justify-content-center align-items-start pt-controller">
              <div className="text-center">
                <img
                  alt="sign document"
                  src={iconSign}
                  className="iconSign mt-2"
                />
                <p className=" px-controller fs-25-19">
                  Thank you for adding your payment method. Only one more step
                  and you are done
                </p>

                <div className="d-flex justify-content-center align-items-center">
                  <div className="button-div-sign mt-3 d-flex justify-content-center align-items-center">
                    <div>
                      <img
                        alt="signature"
                        src={signature}
                        className="signature-icon"
                      />
                      Click to Sign
                    </div>
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
