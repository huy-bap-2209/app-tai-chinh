import React from "react";
import { useState } from "react";
import "./Navbar.css";

import logoWeb from "../../images/logo_web.png";

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div>
      <header className="header-container">
        <nav className="header-container-navbar">
          {/* <div className="header-container-navbar-circle">
            <h2 className="header-container-navbar-title">BTC</h2>
          </div> */}
          <div className="header-container-navbar-logo">
            <img src={logoWeb} alt="Logo Web" />
          </div>
          <nav className="header-container-navbar-list">
            <a href="/">Trang chủ</a>
            <a href="#">Dịch vụ</a>
            <a href="#">Giới thiệu</a>
            <a href="#">Liên hệ</a>
            <div className="header-container-navbar-list">
              <div
                className={`header-container-header-more-product ${
                  openSidebar ? "open" : ""
                }`}
                onClick={() => setOpenSidebar(!openSidebar)}
              >
                Khám phá thêm
                {/* <img
                  src={downArrow}
                  alt="Down Arrow"
                  className="header-container-navbar-icon"
                /> */}
              </div>
              {/* <img
                src={searchIcon}
                alt="Search"
                className="header-container-navbar-icon"
              /> */}
              {/* <img
              src={shoppingCartIcon}
              alt="Shopping Cart"
              className="header-container-navbar-icon"
            /> */}
            </div>
          </nav>

          <div className="header-container-navbar-login-register">
            <a href="/login_register">Đăng Ký</a>
            <hr />
            <a href="/login_register">Đăng Nhập</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
