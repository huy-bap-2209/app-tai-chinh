import React, { useRef } from "react";
import "./Home.css";

// import searchIcon from "../../images/search-icon.svg";
// import shoppingCartIcon from "../../images/shopping-cart-icon.svg";
// import downArrow from "../../images/down-arrow-icon.svg";
// import backgroundImg from '../../images/background-home-page.jpg'
import rightArrowIcon from "../../images/right-arrow-icon.svg";
import homeFeature1 from "../../images/home-feature-1.svg";
import homeFeature2 from "../../images/home-feature-2.svg";
import homeFeature3 from "../../images/home-feature-3.svg";
import homeFeature4 from "../../images/home-feature-4.svg";

import Navbar from "../../components/navbar/Navbar";
import Offers from "../../components/offers/Offers";
import Footer from "../../components/footer/Footer";
import CategoryOffers from "../../components/categoryOffers/CategoryOffers";
import Discount from "../../components/discount/Discount";
import Testimoney from "../../components/testimoney/testimoney";
import Carousel from "../../components/carousel/Carousel";

function Home() {
  const categoryRef = useRef(null);

  const scrollToCategory = () => {
    categoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="home-container">
        {/* navbar */}
        <Navbar />
        {/* main content */}
        <div className="home-container-content">
          <p className="home-container-content-desc">
            Nhận ngay tiền mặt lên tới $100,000,000đ
          </p>
          <h1 className="home-container-content-title">
            NHẬN <span>ƯU ĐÃI LÊN TỚI 70%</span> GIÁ TRỊ VAY KHI THANH TOÁN TẠI
            QUẦY
          </h1>
          <p className="home-container-content-desc">
            Các đối tác của chúng tôi sẽ phản hồi trong vòng 5 phút{" "}
          </p>
          <button className="home-container-content-btn">
            VAY NGAY
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
      <div className="home-feature">
        <div className="home-feature-items">
          <div className="home-feature-items-icons">
            <img src={homeFeature1} alt="" />
          </div>
          <h3> Nhận khoản vay từ thiết bị của bạn</h3>
          <span className="home-feature-items-line"></span>
          <p>
            Bạn có thể gửi yêu cầu từ điện thoại thông minh, máy tính xách tay
            hoặc máy tính bảng của mình. Chỉ mất vài cú nhấp chuột và 2-3 phút.
          </p>
        </div>
        <div className="home-feature-items">
          <div className="home-feature-items-icons">
            <img src={homeFeature2} alt="" />
          </div>
          <h3> Được thanh toán trong vài phút</h3>
          <span className="home-feature-items-line"></span>
          <p>
            Đối tác của chúng tôi xử lý yêu cầu trong vòng không quá 1 giờ. Tiền
            được ghi có vào thẻ của bạn ngay lập tức!
          </p>
        </div>
        <div className="home-feature-items">
          <div className="home-feature-items-icons">
            <img src={homeFeature3} alt="" />
          </div>
          <h3>Điều khoản đơn giản rõ ràng</h3>
          <span className="home-feature-items-line"></span>
          <p>
            Chúng tôi có nhiều lựa chọn và điều khoản thuận lợi từ các đối tác
            của mình, tùy thuộc vào loại khoản vay và số tiền.
          </p>
        </div>
        <div className="home-feature-items">
          <div className="home-feature-items-icons">
            <img src={homeFeature4} alt="" />
          </div>
          <h3>
            {" "}
            Trả nợ <br /> tự động
          </h3>
          <span className="home-feature-items-line"></span>
          <p>
            Đối tác của chúng tôi rút tiền hoàn trả từ thẻ của bạn vào ngày đến
            hạn. Bạn có thể quản lý các khoản vay của mình.
          </p>
        </div>
      </div>

      <Offers scrollToCategory={scrollToCategory} categoryRef={categoryRef} />
      <CategoryOffers ref={categoryRef} />
      <Discount />
      <Testimoney />
      <Carousel />
      <Footer />
    </>
  );
}

export default Home;
