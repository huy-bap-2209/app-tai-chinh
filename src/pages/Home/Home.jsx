import React, { useRef } from "react";
import "./Home.css";

// import searchIcon from "../../images/search-icon.svg";
// import shoppingCartIcon from "../../images/shopping-cart-icon.svg";
// import downArrow from "../../images/down-arrow-icon.svg";
// import backgroundImg from '../../images/background-home-page.jpg'
import rightArrowIcon from "../../images/right-arrow-icon.svg";

import Navbar from "../../components/layout/defaultLayout/navbar/Navbar";
import Feature from "./feature/Feature";
import Offers from "./offers/Offers";
import Footer from "../../components/layout/defaultLayout/footer/Footer";
import CategoryOffers from "./categoryOffers/CategoryOffers";
import Discount from "./discount/Discount";
import Testimoney from "./testimoney/Testimoney";
import Carousel from "./carousel/Carousel";

function Home() {
  const categoryRef = useRef(null);
  const offersRef = useRef(null);

  const scrollToCategory = () => {
    categoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOffers = () => {
    offersRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="home-container">
        {/* navbar */}
        {/* <Navbar /> */}
        {/* main content */}
        <div className="home-container-content">
          <p className="home-container-content-desc">
            Nhận ngay tiền mặt lên tới $100,000,000đ
          </p>
          <h1 className="home-container-content-title">
            <span>ƯU ĐÃI LÊN TỚI 70%</span> GIÁ TRỊ VAY KHI THANH TOÁN TẠI QUẦY
          </h1>
          <p className="home-container-content-desc">
            Các đối tác của chúng tôi sẽ phản hồi trong vòng 5 phút{" "}
          </p>
          <button
            className="home-container-content-btn"
            onClick={scrollToOffers}
          >
            ƯU ĐÃI HIỆN TẠI
            <img
              src={rightArrowIcon}
              alt=""
              className="home-container-content-btn-img"
            />
          </button>
          {/* <div className="home-navigation">
            <a href="">QUAY LẠI</a>
            <hr />
            <a href="">TIẾP THEO</a>
          </div> */}
        </div>
      </div>
      <Feature />
      <Offers
        scrollToCategory={scrollToCategory}
        categoryRef={categoryRef}
        ref={offersRef}
      />
      <CategoryOffers ref={categoryRef} />
      <Discount />
      <Testimoney />
      <Carousel />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
