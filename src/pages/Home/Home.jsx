import React from "react";
import "./Home.css";

// import searchIcon from "../../images/search-icon.svg";
// import shoppingCartIcon from "../../images/shopping-cart-icon.svg";
// import downArrow from "../../images/down-arrow-icon.svg";
// import backgroundImg from '../../images/background-home-page.jpg'
import rightArrowIcon from "../../images/right-arrow-icon.svg";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <div className="home-container">
      {/* navbar */}
      <Navbar />
      {/* main content */}
      <div className="home-container-content">
        <p className="home-container-content-desc">
          Ưu đãi HẤP DẪN cho khách hàng đầu tiên
        </p>
        <h1 className="home-container-content-title">
          NHẬN <span>ƯU ĐÃI LÊN TỚI 70%</span> GIÁ TRỊ VAY KHI THANH TOÁN TẠI
          QUẦY
        </h1>
        <p className="home-container-content-desc">
          Giải ngân thần tốc chỉ trong 10 phút
        </p>
        <button className="home-container-content-btn">
          VAY NGAY
          <img
            src={rightArrowIcon}
            alt=""
            className="home-container-content-btn-img"
          />
        </button>
        <div className="home-navigation">
          <a href="">QUAY LẠI</a>
          <hr />
          <a href="">TIẾP THEO</a>
        </div>
      </div>

      <footer className="home-container-footer"></footer>
    </div>
  );
}

export default Home;
