import React from "react";
import "./Offers.css";

import agribankLogo from "../../images/agribank-icon.png";
import vietcombankLogo from "../../images/vietcombank-icon.png";
import saigonbankLogo from "../../images/saigonbank-icon.png";
import vibLogo from "../../images/vib-icon.png";
import vietinbankLogo from "../../images/vietinbank-icon.png";
import vpbankLogo from "../../images/vpbank-icon.png";
import percentIcon from "../../images/percent.svg";
import hotOffersIcon from "../../images/hot-offers.svg";
import timeWorkingIcon from "../../images/time.svg";
import offersImg from "../../images/offers-img.jpg";
import rightArrowIcon from "../../images/right-arrow-icon.svg";

const Offers = React.forwardRef(({ scrollToCategory }, ref) => {
  return (
    <>
      <div className="offers-container" ref={ref}>
        {/* header */}
        <div className="offers-container-header">
          <div className="offers-container-header-text">
            <h5>ƯU ĐÃI CÓ SẴN</h5>
            <h1>
              Ưu đãi hiện tại dành <br />
              cho bạn
            </h1>
            <p>
              Xem các ưu đãi tốt nhất hiện có từ các đối tác của <br /> chúng
              tôi ở bên dưới.
            </p>
          </div>

          <button
            className="offers-container-header-btn"
            onClick={scrollToCategory}
          >
            Chọn theo danh mục
          </button>
        </div>
        {/* list card */}
        <div className="offers-container-list">
          <div className="offers-card">
            <div className="offers-card-header">
              <img src={vietcombankLogo} alt="Vietcombank" />
            </div>
            <div className="offers-card-title">
              <h5>Vietcombank</h5>
              <p>
                <span>$100,000,000đ </span>/ cho doanh nghiệp
              </p>
            </div>
          </div>
          <hr />
          <div className="offers-card-info">
            <div className="offers-card-info">
              <img src={percentIcon} alt="" />
              12
            </div>
            <div className="offers-card-info">
              <img src={hotOffersIcon} alt="" />
              Lãi suất hấp dẫn
            </div>
            <div className="offers-card-info">
              <img src={timeWorkingIcon} alt="" />7 ngày làm việc
            </div>
          </div>
          <p>
            Một lựa chọn tuyệt vời cho những ai không muốn tiết lộ dữ liệu tài
            chính của họ.
          </p>
          <div className="offers-card-btn">
            <button onClick={scrollToCategory}>Nhận khoản vay</button>
            <button onClick={scrollToCategory}>Thông tin</button>
          </div>
        </div>
        <div className="offers-container-list">
          <div className="offers-card">
            <div className="offers-card-header">
              <img
                src={agribankLogo}
                alt="Vietcombank"
                className="agribank-icon"
              />
            </div>
            <div className="offers-card-title">
              <h5>Agribank</h5>
              <p>
                <span>5,000,000đ </span>/ cho sinh viên
              </p>
            </div>
          </div>
          <hr />
          <div className="offers-card-info">
            <div className="offers-card-info">
              <img src={percentIcon} alt="" />9
            </div>
            <div className="offers-card-info">
              <img src={hotOffersIcon} alt="" />
              Lãi suất hấp dẫn
            </div>
            <div className="offers-card-info">
              <img src={timeWorkingIcon} alt="" />3 ngày làm việc
            </div>
          </div>
          <p>
            Phương sách cuối cùng trong trường hợp khẩn cấp thực sự - nếu bạn
            cần trả tiền cho học kỳ tiếp theo.
          </p>
          <div className="offers-card-btn">
            <button onClick={scrollToCategory}>Nhận khoản vay</button>
            <button onClick={scrollToCategory}>Thông tin</button>
          </div>
        </div>
        <div className="offers-container-list">
          <div className="offers-card">
            <div className="offers-card-header">
              <img
                src={saigonbankLogo}
                alt="Vietcombank"
                className="saigonbank-icon"
              />
            </div>
            <div className="offers-card-title">
              <h5>Saigonbank</h5>
              <p>
                <span>$50,000,000đ </span>/ cho doanh nghiệp vừa & nhỏ
              </p>
            </div>
          </div>
          <hr />
          <div className="offers-card-info">
            <div className="offers-card-info">
              <img src={percentIcon} alt="" />
              11
            </div>
            <div className="offers-card-info">
              <img src={hotOffersIcon} alt="" />
              Lãi suất hấp dẫn
            </div>
            <div className="offers-card-info">
              <img src={timeWorkingIcon} alt="" />6 ngày làm việc
            </div>
          </div>
          <p>
            Quỹ để củng cố tài sản lưu thông hoặc hoàn thành một thỏa thuận tốt
            mà không lo về lãi suất.
          </p>
          <div className="offers-card-btn">
            <button onClick={scrollToCategory}>Nhận khoản vay</button>
            <button onClick={scrollToCategory}>Thông tin</button>
          </div>
        </div>
        <div className="offers-container-list">
          <div className="offers-card">
            <div className="offers-card-header">
              <img src={vibLogo} alt="Vietcombank" />
            </div>
            <div className="offers-card-title">
              <h5>Vib</h5>
              <p>
                <span>$10,000,000đ </span>/ cho người về hưu
              </p>
            </div>
          </div>
          <hr />
          <div className="offers-card-info">
            <div className="offers-card-info">
              <img src={percentIcon} alt="" />
              100
            </div>
            <div className="offers-card-info">
              <img src={hotOffersIcon} alt="" />
              Lãi suất hấp dẫn
            </div>
            <div className="offers-card-info">
              <img src={timeWorkingIcon} alt="" />3 ngày làm việc
            </div>
          </div>
          <p>
            Loại cho vay cho người cao tuổi. Loại khoản vay ngắn hạn này được
            coi là rủi ro cao.
          </p>
          <div className="offers-card-btn">
            <button onClick={scrollToCategory}>Nhận khoản vay</button>
            <button onClick={scrollToCategory}>Thông tin</button>
          </div>
        </div>
        <div className="offers-container-list">
          <div className="offers-card">
            <div className="offers-card-header">
              <img src={vietinbankLogo} alt="Vietcombank" />
            </div>
            <div className="offers-card-title">
              <h5>Vietinbank</h5>
              <p>
                <span>$80,000,000đ </span>/ cho doanh nghiệp
              </p>
            </div>
          </div>
          <hr />
          <div className="offers-card-info">
            <div className="offers-card-info">
              <img src={percentIcon} alt="" />
              14
            </div>
            <div className="offers-card-info">
              <img src={hotOffersIcon} alt="" />
              Lãi suất hấp dẫn
            </div>
            <div className="offers-card-info">
              <img src={timeWorkingIcon} alt="" />7 ngày làm việc
            </div>
          </div>
          <p>
            Phát triển công ty của bạn mà không phải lo lắng về vốn thả nổi lại
            có lãi suất tối.
          </p>
          <div className="offers-card-btn">
            <button onClick={scrollToCategory}>Nhận khoản vay</button>
            <button onClick={scrollToCategory}>Thông tin</button>
          </div>
        </div>
        <div className="offers-container-list">
          <div className="offers-card">
            <div className="offers-card-header">
              <img src={vpbankLogo} alt="Vietcombank" className="vpbank-icon" />
            </div>
            <div className="offers-card-title">
              <h5>Vpbank</h5>
              <p>
                <span>$8,000,000đ </span>/ cho sinh viên
              </p>
            </div>
          </div>
          <hr />
          <div className="offers-card-info">
            <div className="offers-card-info">
              <img src={percentIcon} alt="" />8
            </div>
            <div className="offers-card-info">
              <img src={hotOffersIcon} alt="" />
              Lãi suất hấp dẫn
            </div>
            <div className="offers-card-info">
              <img src={timeWorkingIcon} alt="" />2 ngày làm việc
            </div>
          </div>
          <p>
            Cánh tay phải đắc lực cho sinh viên vào những ngày cuối tháng không
            phải ăn mỳ tôm.
          </p>
          <div className="offers-card-btn">
            <button onClick={scrollToCategory}>Nhận khoản vay</button>
            <button onClick={scrollToCategory}>Thông tin</button>
          </div>
        </div>
        <div className="offers-img">
          <img src={offersImg} alt="" />
          <div className="offers-img-desc">
            <h5>CÁC LỰA CHỌN VAY</h5>
            <h1>
              Chúng tôi chỉ hợp tác với những{" "}
              <span> Ngân Hàng Tốt Nhất</span>{" "}
            </h1>
            <h3>
              Nhận ngay các ưu đãi tốt nhất từ các đối tác của chúng tôi !{" "}
            </h3>
            <button>
              xem thêm
              <img src={rightArrowIcon} alt="" className="offers-right-arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

Offers.displayName = "Offers";

export default Offers;
