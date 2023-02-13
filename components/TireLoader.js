import "../src/styles/TireLoader.css";
import Tire from "../src/img/wheel1.png";

export function TireLoader() {
  return (
    <>
      <div className="container-tire-loader d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center ">
          <div className="glassBox d-flex justify-content-center align-items-center">
            <div className="whiteBox d-flex justify-content-center align-items-center my-auto">
              <div>
                <img src={Tire} className="tire-image-loader" alt="wheel" />
                <h3 className="top-margin-controller">We are building...</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
