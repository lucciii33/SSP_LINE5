import "../src/styles/Footer.css";
import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Logo from "../src/img/acme-logo.png";

export function Footer() {
  return (
    <MDBFooter className="text-white text-center footerBgColor">
      <MDBContainer>
        <MDBRow className="py-3">
          <MDBCol md="4" className="my-auto footerLogoSection">
            <img src={Logo} alt="acme dealership logo" height="40" />
          </MDBCol>

          <MDBCol md="4" className="my-auto footerAddressSection">
            <h6 className="m-0">
              123 Main Street
              <br />
              Anytown, USA
            </h6>
          </MDBCol>

          <MDBCol md="4" className="my-auto footerPhoneSection m-0">
            <i className="fa-solid fa-phone fs-6"></i>
            <h6 className="ms-2 m-0">800-555-5555</h6>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}
