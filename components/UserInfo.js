import "../src/styles/UserInfo.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import pen from "../src/img/orangePen.png";
import person from "../src/img/iconPerson.png";
import email from "../src/img/iconEmail.png";

export function UserInfo() {
  return (
    <div className="d-flex justify-content-center aling-items-center">
      <div className="glassBox-4 d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="whiteBox-4 ">
          <div className="">
            <div className="d-flex justify-content-between align-items-start my-auto px-5 pt-5">
              <div>Personal Information</div>
              <div>
                <Link to="/UserInfoDetails">
                  <img alt="pen" src={pen} className="orange-pen" />
                </Link>
              </div>
            </div>
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
          </div>

          <div>
            <div className="d-flex justify-content-between align-items-start my-auto px-5 pt-3">
              <div>Car Information</div>
              <div>
                <Link to="/UserInfoDetails">
                  <img alt="pen" src={pen} className="orange-pen" />
                </Link>
              </div>
            </div>
            <p className="ms-5">
              VIN
              <p>84JWU47593U47398</p>
            </p>
            <p className="ms-5 m-2">
              Millage
              <p>120000</p>
            </p>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-5">
            <div>
              <Link to="/ProductsPage">
                <button className="orange-button">CONTINUE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
