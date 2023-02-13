import "../src/styles/ProductsPage.css";
import { Link } from "react-router-dom";
import CarImage from "../src/img/CarPicture.png";
import { CarInfo } from "./CarInfo";
import { Products } from "./Products";

export function ProductsPage() {
  // Packages
  let packagesArray = [
    {
      title: "Premium",
      protections: [
        {
          name: "ASC VSC",
          description: `ASC Warranty is one of the most cost efficient service
  agreements in the industry. It offers mechanical breakdown
  coverage and protects you against the high cost of major
  repairs. It offers various levels of protection to choose from
  and provides Emergency Roadside Service throughout the life of
  the contract.`
        },
        {
          name: "TruWarranty TruTire",
          description: `Tire & Wheel Protection covers the repair or replacement of tires and wheels damaged by everday road hazards such as pothols, nails, glass, and debris.`
        },
        {
          name: "Protective CostGuard",
          description: `With the CostGuard Vehicle Protection Plan you can offer your customers true peace of mind knowing their vehicle purchase is covered against some of the most costly repair expenses, and you can rest easy knowing it’s administered by an F&I industry leader that you can count on.`
        }
      ],
      term: "24 months",
      downPayment: "$75.00",
      monthlyPayment: "$125.00",
      totalPayment: "$3000.00"
    },
    {
      title: "Deluxe",
      protections: [
        {
          name: "ASC VSC",
          description: `ASC Warranty is one of the most cost efficient service
  agreements in the industry. It offers mechanical breakdown
  coverage and protects you against the high cost of major
  repairs. It offers various levels of protection to choose from
  and provides Emergency Roadside Service throughout the life of
  the contract.`
        },
        {
          name: "TruWarranty TruTire",
          description: `Tire & Wheel Protection covers the repair or replacement of tires and wheels damaged by everday road hazards such as pothols, nails, glass, and debris.`
        },
        {
          name: "Protective CostGuard",
          description: `With the CostGuard Vehicle Protection Plan you can offer your customers true peace of mind knowing their vehicle purchase is covered against some of the most costly repair expenses, and you can rest easy knowing it’s administered by an F&I industry leader that you can count on.`
        }
      ],
      term: "36 months",
      downPayment: "$75.00",
      monthlyPayment: "$83.33",
      totalPayment: "$3000.00"
    },
    {
      title: "Gold",
      protections: [
        {
          name: "ASC VSC",
          description: `ASC Warranty is one of the most cost efficient service
  agreements in the industry. It offers mechanical breakdown
  coverage and protects you against the high cost of major
  repairs. It offers various levels of protection to choose from
  and provides Emergency Roadside Service throughout the life of
  the contract.`
        },
        {
          name: "TruWarranty TruTire",
          description: `Tire & Wheel Protection covers the repair or replacement of tires and wheels damaged by everday road hazards such as pothols, nails, glass, and debris.`
        },
        {
          name: "Protective CostGuard",
          description: `With the CostGuard Vehicle Protection Plan you can offer your customers true peace of mind knowing their vehicle purchase is covered against some of the most costly repair expenses, and you can rest easy knowing it’s administered by an F&I industry leader that you can count on.`
        }
      ],
      term: "48 months",
      downPayment: "$75.00",
      monthlyPayment: "$62.50",
      totalPayment: "$3000.00"
    }
  ];

  return (
    <>
      {/* Car Info */}
      <CarInfo CarImage={CarImage} />

      {/* Products */}
      <Products packages={packagesArray} />

      {/* Continue Button */}
      <div className="d-flex justify-content-center">
        <Link to="/PaymentPage">
          <button
            type="button"
            className="btn buttonStyle mt-2 mb-5 fs-3 text-capitalize"
          >
            Continue
          </button>
        </Link>
      </div>
    </>
  );
}
