import "./App.css";
import { Routes, Router, Route } from "react-router-dom";

import Login_Register from "./pages/Login_Register/Login_Register";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login_Register />} />
      </Routes>
    </>
  );
}
