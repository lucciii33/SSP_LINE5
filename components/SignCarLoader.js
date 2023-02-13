import "../src/styles/SignCarLoader.css";
import React, { useState, useEffect } from "react";
import sing from "../src/img/IconSing.png";
import car from "../src/img/car.png";
import { useNavigate } from "react-router-dom";
export function SignCarLoader() {
  const [timeLeft, setTimeLeft] = useState(null);
  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    if (timeLeft === 0) {
      console.log("TIME LEFT IS 0");
      setTimeLeft(null);
    }
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(5);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.location.replace("https://bobbyhadz.com");
    }, 5000);
  }, []);

  return (
    <>
      <div className="container-sign-loader d-flex justify-content-center align-items-center">
        <div className=" d-flex justify-content-center align-items-center ">
          <div className="glassBox-2 d-flex justify-content-center align-items-center">
            <div className="whiteBox-2 d-flex justify-content-center align-items-start my-auto">
              <div className="">
                <div className="text-center mt-4">
                  <img src={sing} className="icon-sign " alt="wheel" />
                  <p className="px-5 mt-3 fs-20-16">
                    Thank you for adding your payment method. Only one more step
                    and you are done
                  </p>
                  <h2 className="counter-color mt-3 fs-40">{timeLeft}</h2>

                  {/* <div className="test-street"></div> */}
                  <div className="margin-top-race-track">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="red-line"></div>
                      <div className="red-line "></div>
                      <div className="red-line"></div>
                      <div className="red-line"></div>
                    </div>

                    <div className="street  d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="yellow-line "></div>
                        <img
                          src={car}
                          alt="car"
                          className="car-image-animation"
                        />
                        <div></div>
                        <div className="yellow-line-1"></div>
                        <div className="yellow-line"></div>
                        <div className="yellow-line"></div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="red-line"></div>
                      <div className="red-line "></div>
                      <div className="red-line"></div>
                      <div className="red-line"></div>
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
