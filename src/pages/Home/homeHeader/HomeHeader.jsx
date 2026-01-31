import React from "react";

import classNames from "classnames/bind";
import styles from "./HomeHeader.module.scss";
const cx = classNames.bind(styles);

import rightArrowIcon from "../../../images/right-arrow-icon.svg";

import Button from "../../../components/element/Button/Button";

function HomeHeader({ offersRef }) {
  const scrollToOffers = () => {
    offersRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={cx("home-container")}>
      <div className={cx("home-container-content")}>
        <p className={cx("home-container-content-desc")}>
          Nhận ngay tiền mặt lên tới $100,000,000đ
        </p>
        <h1 className={cx("home-container-content-title")}>
          <span>ƯU ĐÃI LÊN TỚI 70%</span> GIÁ TRỊ VAY KHI THANH TOÁN TẠI QUẦY
        </h1>
        <p className={cx("home-container-content-desc")}>
          Các đối tác của chúng tôi sẽ phản hồi trong vòng 5 phút{" "}
        </p>
        <Button defaultBtn className='btn-text' onClick={scrollToOffers}>
          ƯU ĐÃI HIỆN TẠI
          <img
            src={rightArrowIcon}
            alt=""
            className={cx("home-container-content-btn-img")}
          />
        </Button>
        {/* <div className="home-navigation">
            <a href="">QUAY LẠI</a>
            <hr />
            <a href="">TIẾP THEO</a>
          </div> */}
      </div>
    </div>
  );
}

export default HomeHeader;
