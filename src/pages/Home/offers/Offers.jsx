import React from "react";
import classNames from "classnames/bind";
import styles from "./Offers.module.scss";
const cx = classNames.bind(styles);

import offersImg from "../../../images/offers-img.jpg";
import rightArrowIcon from "../../../images/right-arrow-icon.svg";
import offersData from "./Data";
import Button from "../../../components/element/Button/Button";


const Offers = React.forwardRef(({ scrollToCategory }, ref) => {
  return (
    <div className={cx("offers-container")} ref={ref}>
      {/* header */}
      <div className={cx("offers-container-header")}>
        <div className={cx("offers-container-header-text")}>
          <h5>ƯU ĐÃI CÓ SẴN</h5>
          <h1>
            Ưu đãi hiện tại dành <br />
            cho bạn
          </h1>
          <p>
            Xem các ưu đãi tốt nhất hiện có từ các đối tác của <br /> chúng tôi
            ở bên dưới.
          </p>
        </div>

        <Button
          className={cx("offers-container-header-btn")}
          onClick={scrollToCategory}
        >
          Chọn theo danh mục
        </Button>
      </div>

      {/* list card */}
      {offersData.map((offers) => (
        <div className={cx("offers-container-list")} key={offers.id}>
          <div className={cx("offers-card")}>
            <div className={cx("offers-card-header")}>
              <img
                src={offers.logo}
                alt={offers.bankName}
                className={cx("offers-card-info", offers.logoType)}
              />
            </div>
            <div className={cx("offers-card-title")}>
              <h5>{offers.bankName}</h5>
              <p>
                <span>{offers.amount} </span>/ {offers.target}
              </p>
            </div>
          </div>
          <hr />
          <div className={cx("offers-card-info")}>
            {offers.info.map((item, index) => (
              <div className={cx("offers-card-info-item")} key={index}>
                <img src={item.icon} alt={item.bankName} />
                {item.text}
              </div>
            ))}
          </div>
          <p>{offers.desc}</p>
          <div className={cx("offers-card-btn")}>
            <button onClick={scrollToCategory}>Nhận khoản vay</button>
            <button onClick={scrollToCategory}>Thông tin</button>
          </div>
        </div>
      ))}

      {/* image */}
      <div className={cx("offers-img")}>
        <img src={offersImg} alt="" />
        <div className={cx("offers-img-desc")}>
          <h5>CÁC LỰA CHỌN VAY</h5>
          <h1>
            Chúng tôi chỉ hợp tác với những <span>Ngân Hàng Tốt Nhất</span>
          </h1>
          <h3>Nhận ngay các ưu đãi tốt nhất từ các đối tác của chúng tôi !</h3>
          <button>
            xem thêm
            <img
              src={rightArrowIcon}
              alt=""
              className={cx("offers-right-arrow")}
            />
          </button>
        </div>
      </div>
    </div>
  );
});

Offers.displayName = "Offers";
export default Offers;
