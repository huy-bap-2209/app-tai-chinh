import "./App.css";
import { Routes, Router, Route } from "react-router-dom";

import Login_Register from "./pages/Login_Register/Login_Register";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login_register" element={<Login_Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
