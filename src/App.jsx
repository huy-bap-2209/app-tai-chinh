import "./App.css";
import { Routes, Router, Route } from "react-router-dom";

import Login_Register from "./pages/Login_Register/Login_Register";
import Home from "./pages/Home/Home";
import PromoPage from "./components/discount/promo/PromoPage";
import BankInfo from "./components/categoryOffers/BankInfo/BankInfo";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login_register" element={<Login_Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/promo_page" element={<PromoPage />}/>
        <Route path="/bank_info" element={<BankInfo/>}/>
      </Routes>
    </>
  );
}
