import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logoWeb from "../../images/logo_web.png";

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  //nhận biết trạng thái
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("LoggedIn");
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
                Trang cá nhân
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
            {!loggedIn ? (
              <>
                <Link to="/login_register">Đăng Ký</Link>
                <hr />
                <Link to="/login_register">Đăng Nhập</Link>
              </>
            ) : (
              <>
                <Link to="/profile">Xin chào👋 #userName </Link>
                <hr />
                <button onClick={handleLogout}>Đăng xuất</button>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
