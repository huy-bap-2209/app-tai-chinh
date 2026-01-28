import React from "react";
import "./Introduce.css";

import backgroundIntroduce from "../../images/background-introduce.jpg";
import Navbar from "../../components/layout/defaultLayout/navbar/Navbar";
import AboutMe from "./aboutMe/AboutMe";
import Info from "./info/Info";

function Introduce() {
  return (
    <>
      <Navbar />
      <div className="introduce-container">
        <div className="introduce-header">
          <img
            src={backgroundIntroduce}
            alt=""
            className="introduce-header-img"
          />
          <div className="introduce-overlay">
            <div className="introduce-overlay-desc">
              <h1>Giới thiệu về Bắp Tài Chính</h1>
              <p>
                Chúng tôi cung cấp <span> giải pháp tài chính</span> tốt nhất
                với ưu đãi đẹp dành cho khách hàng đầu tiên đến với công ty.
              </p>
              <button>TÌM HIỂU THÊM</button>
            </div>
          </div>
        </div>
        <AboutMe />
        <Info />
      </div>
    </>
  );
}

export default Introduce;
