import React from "react";
import "./Offers.css";

import agribankLogo from "../../images/agribank-icon.jpg";
import vietcombankLogo from "../../images/vietcombank-icon.jpg";
import saigonbankLogo from "../../images/saigonbank-icon.png";
import vibLogo from "../../images/vib-icon.jpg";
import vietinbankLogo from "../../images/vietinbank-icon.jpg";
import vpbankLogo from "../../images/vpbank-icon.png";
import percentIcon from "../../images/percent.svg";
import hotOffersIcon from "../../images/hot-offers.svg";
import timeWorkingIcon from "../../images/time.svg";

function Offers() {
  return (
    <>
      <div className="offers-container">
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

          <button className="offers-container-header-btn">
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
                <span>$4000 </span>/ cho doanh nghiệp
              </p>
            </div>
          </div>
          <hr />
          <div className="offers-card-info">
            <div className="offers-card-info">
              <img src={percentIcon} alt="" />
              10
            </div>
            <div className="offers-card-info">
              <img src={hotOffersIcon} alt="" />
              Ưu đãi hấp dẫn
            </div>
            <div className="offers-card-info">
              <img src={timeWorkingIcon} alt="" />7 ngày
            </div>
          </div>
          <p>
            Một lựa chọn tuyệt vời cho những ai không muốn tiết lộ dữ liệu tài
            chính của họ.
          </p>
          <div className="offers-card-btn">
            <button>Nhận khoản vay</button>
            <button>Thông tin</button>
          </div>
          
        </div>
        <div className="offers-container-list">
          <div className="offers-card">
            <div className="offers-card-header">
              <img src={vietcombankLogo} alt="Vietcombank" />
            </div>
            <div className="offers-card-title">
              <h5>Vietcombank</h5>
              <p>
                <span>$4000 </span>/ cho doanh nghiệp
              </p>
            </div>
          </div>
          <hr />
          <div className="offers-card-info">
            <div className="offers-card-info">
              <img src={percentIcon} alt="" />
              10
            </div>
            <div className="offers-card-info">
              <img src={hotOffersIcon} alt="" />
              Ưu đãi hấp dẫn
            </div>
            <div className="offers-card-info">
              <img src={timeWorkingIcon} alt="" />7 ngày
            </div>
          </div>
          <p>
            Một lựa chọn tuyệt vời cho những ai không muốn tiết lộ dữ liệu tài
            chính của họ.
          </p>
          <div className="offers-card-btn">
            <button>Nhận khoản vay</button>
            <button>Thông tin</button>
          </div>
          
        </div>
        <div className="offers-container-list">
          <div className="offers-card">
            <div className="offers-card-header">
              <img src={vietcombankLogo} alt="Vietcombank" />
            </div>
            <div className="offers-card-title">
              <h5>Vietcombank</h5>
              <p>
                <span>$4000 </span>/ cho doanh nghiệp
              </p>
            </div>
          </div>
          <hr />
          <div className="offers-card-info">
            <div className="offers-card-info">
              <img src={percentIcon} alt="" />
              10
            </div>
            <div className="offers-card-info">
              <img src={hotOffersIcon} alt="" />
              Ưu đãi hấp dẫn
            </div>
            <div className="offers-card-info">
              <img src={timeWorkingIcon} alt="" />7 ngày
            </div>
          </div>
          <p>
            Một lựa chọn tuyệt vời cho những ai không muốn tiết lộ dữ liệu tài
            chính của họ.
          </p>
          <div className="offers-card-btn">
            <button>Nhận khoản vay</button>
            <button>Thông tin</button>
          </div>
          
        </div>
        <div className="offers-container-list">
          <div className="offers-card">
            <div className="offers-card-header">
              <img src={vietcombankLogo} alt="Vietcombank" />
            </div>
            <div className="offers-card-title">
              <h5>Vietcombank</h5>
              <p>
                <span>$4000 </span>/ cho doanh nghiệp
              </p>
            </div>
          </div>
          <hr />
          <div className="offers-card-info">
            <div className="offers-card-info">
              <img src={percentIcon} alt="" />
              10
            </div>
            <div className="offers-card-info">
              <img src={hotOffersIcon} alt="" />
              Ưu đãi hấp dẫn
            </div>
            <div className="offers-card-info">
              <img src={timeWorkingIcon} alt="" />7 ngày
            </div>
          </div>
          <p>
            Một lựa chọn tuyệt vời cho những ai không muốn tiết lộ dữ liệu tài
            chính của họ.
          </p>
          <div className="offers-card-btn">
            <button>Nhận khoản vay</button>
            <button>Thông tin</button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Offers;
