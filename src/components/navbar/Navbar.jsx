import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logoWeb from "../../images/logo_web.png";

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  //nhận biết trạng thái
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true",
  );

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.reload();
  };

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
          {/* list trên desktop */}
          <nav className="header-container-navbar-list">
            <a href="/">Trang chủ</a>
            <a href="#">Dịch vụ</a>
            <a href="#">Giới thiệu</a>
            <a href="#">Liên hệ</a>
            <a
              className={`header-container-profile ${
                openSidebar ? "open" : ""
              }`}
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              Trang cá nhân
              {/* <img
                  src={downArrow}
                  alt="Down Arrow"
                  className="header-container-navbar-icon"
                /> */}
            </a>
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
          </nav>
          <div className="header-container-navbar-login-register">
            {loggedIn ? (
              <>
                <Link to="/profile">Xin chào👋 #userName </Link>
                {/* <hr /> */}
                <button className="btn-logout" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                {/* <Link to="/login_register">Đăng Ký</Link> */}
                {/* <hr /> */}
                <Link
                  to="/login_register"
                  className="header-container-navbar-login-btn"
                >
                  Đăng Nhập
                </Link>
              </>
            )}
          </div>

          {/* list trên mobile */}
          <div
            className="mobile-navbar-header-icon"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </div>
          <nav>
            {mobileMenu && (
              <div className="mobile-navbar-header-list hidden">
                <a href="/">Trang chủ</a>
                <a href="#">Dịch vụ</a>
                <a href="#">Giới thiệu</a>
                <a href="#">Liên hệ</a>
                <a
                  className={`header-container-profile ${
                    openSidebar ? "open" : ""
                  }`}
                  onClick={() => setOpenSidebar(!openSidebar)}
                >
                  Trang cá nhân
                </a>
                {loggedIn ? (
                  <>
                    <Link to="/profile">Xin chào👋 #userName</Link>
                    <button
                      className="mobile-btn-logout"
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </button>
                  </>
                ) : (
                  <>
                    {/* <Link to="/login_register">Đăng Ký</Link> */}
                    <Link to="/login_register">Đăng Nhập</Link>
                  </>
                )}
              </div>
            )}
          </nav>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
