import React from "react";
import "./Home.css";

import searchIcon from "../../images/search-icon.svg";
import shoppingCartIcon from "../../images/shopping-cart-icon.svg";
import downArrow from "../../images/down-arrow-icon.svg";
// import backgroundImg from '../../images/background-home-page.jpg'
import { useState } from "react";

function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="home-container">
      {/* navbar */}
      <header className="home-container-header">
        <nav className="home-container-navbar">
          <div className="home-container-navbar-circle">
            <h2 className="home-container-navbar-title">BTC</h2>
          </div>
          <nav className="home-container-navbar-list">
            <a href="#">Trang chủ</a>
            <a href="#">Dịch vụ</a>
            <a href="#">Giới thiệu</a>
            <a href="#">Liên hệ</a>
          </nav>
          <div className="home-container-navbar-list">
            <div
              className={`home-container-header-more-product ${
                openSidebar ? "open" : ""
              }`}
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              Khám phá thêm
              <img
                src={downArrow}
                alt="Down Arrow"
                className="home-container-navbar-icon"
              />
            </div>
            <img
              src={searchIcon}
              alt="Search"
              className="home-container-navbar-icon"
            />
            <img
              src={shoppingCartIcon}
              alt="Shopping Cart"
              className="home-container-navbar-icon"
            />
          </div>
        </nav>
      </header>
      {/* main content */}
      <div className="home-container-content">
        <p className="home-container-content-desc">
          Ưu đãi 20% cho khách hàng đầu tiên
        </p>
        <h1 className="home-container-content-title">
          NHẬN ƯU ĐÃI LÊN TỚI 70% GIÁ TRỊ VAY KHI THANH TOÁN TẠI QUẦY
        </h1>
        <p className="home-container-content-desc">
          Giải ngân thần tốc chỉ trong 10 phút
        </p>
        <button className="home-container-content-all-product">
          Tất cả dịch vụ
        </button>
      </div>

      <div className="home-navigation">
        <a href="">Quay lại</a>
        <a href="">Tiếp theo</a>
      </div>

      <footer className="home-container-footer"></footer>
    </div>
  );
}

export default Home;
