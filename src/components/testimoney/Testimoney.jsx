import React from "react";
import "./Testimoney.css";

import logoWeb from "../../images/logo_web.png";
import hieuNgo from '../../images/hieu-bap-img.jpg'
import thanhNgo from '../../images/thanh-bap-img.jpg'
import vuongPham from '../../images/vuong-pham-img.jpg'

function Testimoney() {
  return (
    <div className="testimoney-container">
      <div className="testimoney-header">
        <div className="tesimoney-header-left">
          <h5>LỜI CHỨNG THỰC</h5>
          <h1>Phản hồi từ khách hàng về chúng tôi</h1>
          <p>
            Chúng tôi đã giúp hàng ngàn khách hàng tìm được khoản vay phù hợp
          </p>
        </div>
        <div className="testimoney-header-right">
          <div className="testimoney-header-right-img">
            <img src={logoWeb} alt="" />
          </div>
          <div className="testimoney-header-right-title">
            <h4>Bạn muốn để lại ý kiến?</h4>
            <p>Liên hệ với chúng tôi qua địa chỉ</p>
            <span>CSKHbaptaichinh@gmail.com.vn</span>
          </div>
        </div>
      </div>
      <div className="testimoney-list">
        <div className="testimoney-item">
          <div className="testimoney-item-img">
            <img src={hieuNgo} alt="" />
          </div>
          <div className="testimoney-item-name">
            <h3>Ngô Quang Hiếu</h3>
            <hr />
            <p>
              "Cảm ơn quý công ty đã hỗ trợ cho khoản vay cuẩ tôi với mục đích
              mua nhà. Khoản vay của tôi rất hợp lý trong bối cảnh thời đại kinh
              tế khủng hoảng với lãi suất cao từ các ngân hàng địa phương, tuy
              nhiên BẮP TÀI CHÍNH có những ưu đãi rất tốt đối với các khoản vay
              tiêu dùng cá nhân."
            </p>
            <p>NGÀY 29 THÁNG 12, 2025</p>
          </div>
        </div>
        <div className="testimoney-item">
          <div className="testimoney-item-img">
            <img src={thanhNgo} alt="" />
          </div>
          <div className="testimoney-item-name">
            <h3>Ngô Quang Hiếu</h3>
            <hr />
            <p>
              "Cảm ơn quý công ty đã hỗ trợ cho khoản vay cuẩ tôi với mục đích
              mua nhà. Khoản vay của tôi rất hợp lý trong bối cảnh thời đại kinh
              tế khủng hoảng với lãi suất cao từ các ngân hàng địa phương, tuy
              nhiên BẮP TÀI CHÍNH có những ưu đãi rất tốt đối với các khoản vay
              tiêu dùng cá nhân."
            </p>
            <p>NGÀY 29 THÁNG 12, 2025</p>
          </div>
        </div>
        <div className="testimoney-item">
          <div className="testimoney-item-img">
            <img src={vuongPham} alt="" />
          </div>
          <div className="testimoney-item-name">
            <h3>Ngô Quang Hiếu</h3>
            <hr />
            <p>
              "Cảm ơn quý công ty đã hỗ trợ cho khoản vay cuẩ tôi với mục đích
              mua nhà. Khoản vay của tôi rất hợp lý trong bối cảnh thời đại kinh
              tế khủng hoảng với lãi suất cao từ các ngân hàng địa phương, tuy
              nhiên BẮP TÀI CHÍNH có những ưu đãi rất tốt đối với các khoản vay
              tiêu dùng cá nhân."
            </p>
            <p>NGÀY 29 THÁNG 12, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimoney;
