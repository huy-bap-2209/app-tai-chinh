import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import logoWeb from "../../../../images/logo_web.png";
import Button from "../../../element/Button/Button";

const cx = classNames.bind(styles);

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loggedIn] = useState(localStorage.getItem("loggedIn") === "true");

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.reload();
  };

  return (
    <header className={cx("header-container")}>
      <nav className={cx("navbar-main")}>
        <div className={cx("logo-wrapper")}>
          <img src={logoWeb} alt="Logo Web" />
        </div>

        <div className={cx("nav-list")}>
          <Button to="/">Trang chủ</Button>
          <Button to="/service">Dịch vụ</Button>
          <Button to="/introduce">Giới thiệu</Button>
          <Button to="/contact">Liên hệ</Button>
          <Button to="/profile">Trang cá nhân</Button>
        </div>

        <div className={cx("login-register")}>
          {loggedIn ? (
            <>
              <Link to="/profile">Xin chào👋 #userName</Link>
              <button className={cx("btn-logout")} onClick={handleLogout}>
                Đăng xuất
              </button>
            </>
          ) : (
            <Link to="/login_register">Đăng Nhập</Link>
          )}
        </div>

        <button
          className={cx("mobile-menu-icon")}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>

        {mobileMenu && (
          <div className={cx("mobile-menu", "show")}>
            <Button to="/">Trang chủ</Button>
            <Button to="/service">Dịch vụ</Button>
            <Button to="/introduce">Giới thiệu</Button>
            <Button to="/contact">Liên hệ</Button>
            <Button
              to="/profile"
              className={cx("nav-profile", { open: openSidebar })}
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              Trang cá nhân
            </Button>
            {loggedIn ? (
              <>
                <Link to="/profile">Xin chào👋 #userName</Link>
                <button
                  className={cx("mobile-btn-logout")}
                  onClick={handleLogout}
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <Link to="/login_register">Đăng Nhập</Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
