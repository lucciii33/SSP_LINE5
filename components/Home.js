import "../src/styles/Home.css";
import redButtonStart from "../src/img/redButton.png";
import React, { useState, useEffect } from "react";
import Sound from "../src/sound/sound.wav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [color, setColor] = useState(false);
  let customerName = "Mr. Customer";
  function play() {
    new Audio(Sound).play();
  }
  let navigate = useNavigate();

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

  const redirect = () => {
    if (windowDimensions.width > 600) {
      setTimeout(() => {
        navigate("/UserInfo");
      }, 2000);
    } else {
      setTimeout(() => {
        navigate("/ProductsPage");
      }, 2000);
    }
  };

  return (
    <div className="container-home">
      <div className="mt-4">
        <div className="text-center mt-5 text-white">
          <h1 className="mt-5 fs-75-45 ">Acme Acura</h1>
          <h4 className="responsive-padding fs-40-25">
            Protect your car today with a <br className="no-phone" />
            monthly low payment
          </h4>
        </div>
        <div className="text-center mt-5 text-white">
          <p className="text-break px-controller fs-20-19">
            Hi {customerName}, happy to see you here. Is your Acura vehicle
            protected? <br className="" />
            After all it probably should be. Here at Acme Acura we would like{" "}
            <br className="no-phone" />
            to give you some options other than being stranded on the side of
            the road.
            <br className="no-phone" /> So click to get get started and see your
            options.
          </p>
        </div>

        <div className="my-5 mt-5">
          <div className="text-center">
            {/* <Link to="/UserInfo"> */}{" "}
            <img
              alt="start"
              src={redButtonStart}
              className={color ? "redButtonStart-redhalo " : "redButtonStart"}
              onClick={() => {
                setColor(!color);
                play();
                redirect();
              }}
            />{" "}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
