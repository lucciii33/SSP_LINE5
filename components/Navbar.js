import "../src/styles/Navbar.css";
import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse
} from "mdb-react-ui-kit";
import Logo from "../src/img/acme-logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MDBNavbar expand="lg" light className="navbarBgColor py-2">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img src={Logo} alt="acme dealership logo" height="40" />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <i className="fa-solid fa-bars iconStyle1 pe-2" />
          </div>
        </MDBNavbarToggler>

        <MDBCollapse navbar show={isOpen} className="navbarCollapseHeight">
          <MDBNavbarNav>
            <MDBNavbarItem>
              <div className="navbarItem">
                <i class="fa-brands fa-instagram iconStyle2"></i>
                <h6>Instagram</h6>
              </div>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <div className="navbarItem">
                <i className="fa-brands fa-facebook iconStyle2"></i>
                <h6>Facebook</h6>
              </div>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <div className="navbarItem">
                <i class="fa-brands fa-twitter iconStyle2"></i>
                <h6>Twitter</h6>
              </div>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <div className="navbarItem">
                <i class="fa-brands fa-linkedin iconStyle2"></i>
                <h6>Linkedin</h6>
              </div>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
