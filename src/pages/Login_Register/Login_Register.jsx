import { useState } from "react";
import "./Login_Register.css";
// import LogoLogin from "../../images/logo_login.svg";
import BackgroundLogin from "../../images/loan-img-3.jpg";

function Login_Register() {
  const [isLoginRegister, setIsLoginRegister] = useState("Login");
  return (
    <div className="login-register-wrapper">
      <div className="login-background">
        {/* <img src={BackgroundLogin} alt="" /> */}
      </div>
      <div className="login-background-overlay"></div>
      {/* left layout */}
      <div className="login-register-left">
        <img
          src={BackgroundLogin}
          alt="Background Login"
          className="background__login-img"
        />
        <div className="overlay">
          <div className="text-overlay">
            <h2>BẮP TÀI CHÍNH</h2>
            <p>
              Nơi mang đến cho bạn những giải pháp tài chính có thể nhảy cầu
            </p>
            <p>Đăng nhập bằng</p>
            <div className="social-login">
              <button className="btn-facebook">Facebook</button>
              <button className="btn-google"> Google</button>
            </div>
          </div>
        </div>
      </div>

      {/* right layout */}
      <div className="login-register-right">
        <form className="login-form">
          {/* <img src={LogoLogin} alt="" className="login-form-icon" /> */}
          <h2>{isLoginRegister}</h2>
          {isLoginRegister === "Register" ? (
            <p>
              Bạn đã có tài khoản?{" "}
              <span
                onClick={() => setIsLoginRegister("Login")}
                className="create-account-link"
              >
                Đăng nhập ngay&nbsp;
              </span>
              để nhận ưu đãi mới nhất từ chúng tôi!
            </p>
          ) : (
            <p>
              Bạn chưa có tài khoản?{" "}
              <span
                onClick={() => setIsLoginRegister("Register")}
                className="create-account-link"
              >
                Tạo tài khoản&nbsp;
              </span>
              chỉ mất 1 phút để có tài khoản!
            </p>
          )}

          <input type="text" placeholder="Username" />

          {isLoginRegister === "Register" && (
            <input type="email" placeholder="Email" />
          )}

          <input type="password" placeholder="Password" />
          {isLoginRegister === "Register" && (
            <input type="password" placeholder="Confirm Password" />
          )}
          <div className="login-options">
            <label>
              <input type="checkbox" className="login-options-checkbox" />
              Remember Me
            </label>

            {isLoginRegister === "Login" ? (
              <a href="">Quên mật khẩu?</a>
            ) : (
              <a href="">Cần trợ giúp?</a>
            )}
          </div>
          <div className="back-home-page-btn-login">
            <a href="/home_page">Quay lại Trang Chủ</a>
            <button type="submit" className="btn-login">
              {isLoginRegister}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login_Register;
