import "../src/styles/Congratulations.css";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import ReactConfetti from "react-confetti";
import CarImage from "../src/img/CarPicture.png";

export function Congratulations() {
  const { width, height } = useWindowSize();

  // const confettiExplotion = () => {
  //   return <ReactConfetti width={width} height={height} />;
  // };
  // useEffect(() => {
  //   confettiExplotion();
  // }, []);\

  let customerName = "Mr. Customer";
  let carYear = 2017;
  let carColor = "red";
  let carMake = "Toyota";
  let carModel = "Corolla";

  return (
    <div className="d-flex justify-content-center aling-items-center p-congratulation-5">
      <ReactConfetti width={width} height={height} numberOfPieces={400} />;
      <div className="glass-div-5 d-flex justify-content-center">
        <div className="">
          <div className="white-div-5 text-center">
            <img src={CarImage} height="85" className="mt-5" alt="Car" />
            <h1 className="pt-3">Congratulations</h1>
            <h3 className="pt-3 fs-25-19">
              {customerName}, your {carColor} {carYear}
              <br />
              {carMake} {carModel} is now protected
            </h3>
          </div>
          <div className="grey-div-5 text-center">
            <h2 className="pt-5">How was your experience?</h2>
            <div className="d-flex justify-content-between col-5 mx-auto pt-3">
              <i className="fa-regular fa-face-laugh-beam iconStyle"></i>
              <i className="fa-regular fa-face-smile iconStyle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
