import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { TireLoader } from "../components/TireLoader";
import { SignCarLoader } from "../components/SignCarLoader";
import { PhoneVerification } from "../components/PhoneVerification";
import { UserInfoDetails } from "../components/UserInfoDetails";
import { UserInfo } from "../components/UserInfo";
import { PaymentPage } from "../components/PaymentPage";
import { ProductsPage } from "../components/ProductsPage";
import { Congratulations } from "../components/Congratulations";
import { SignDocument } from "../components/SignDocument";
import { PaymentCardInfo } from "../components/PaymentCardInfo";
import { PaymentMethods } from "../components/PaymentMethods";
import { PaymentBankInfo } from "../components/PaymentBankInfo";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/TireLoader" element={<TireLoader />}></Route>
        <Route
          exact
          path="/PaymentBankInfo"
          element={<PaymentBankInfo />}
        ></Route>
        <Route
          exact
          path="/PaymentMethods"
          element={<PaymentMethods />}
        ></Route>
        <Route
          exact
          path="/PaymentCardInfo"
          element={<PaymentCardInfo />}
        ></Route>
        <Route exact path="/PaymentPage" element={<PaymentPage />}></Route>
        <Route exact path="/UserInfo" element={<UserInfo />}></Route>
        <Route exact path="/SignCarLoader" element={<SignCarLoader />}></Route>
        <Route exact path="/ProductsPage" element={<ProductsPage />}></Route>
        <Route exact path="/SignDocument" element={<SignDocument />}></Route>
        <Route
          exact
          path="/Congratulations"
          element={<Congratulations />}
        ></Route>
        <Route
          exact
          path="/UserInfoDetails"
          element={<UserInfoDetails />}
        ></Route>
        <Route
          exact
          path="/PhoneVerification"
          element={<PhoneVerification />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
