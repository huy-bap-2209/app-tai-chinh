import React, { useState } from "react";
import "./Testimoney.css";

import logoWeb from "../../images/logo_web.png";
import hieuNgo from "../../images/hieu-bap-img.jpg";
import thanhNgo from "../../images/thanh-bap-img.jpg";
import vuongPham from "../../images/vuong-pham-img.jpg";
import { Link } from "react-router-dom";

import Feedback from "./feedback/Feedback";

function Testimoney(props) {
  const [popUp, setPopUp] = useState(false);

  const handleOpenModal = () => {
    setPopUp(true);
  };

  const handleClose = () => {
    setPopUp(false);
  };
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
            <button onClick={handleOpenModal}>CSKHbaptaichinh@gmail.com.vn</button>
          </div>
        </div>
      </div>
      <div className="testimoney-list">
        <TestimoneyItem
          name="Ngô Quang Hiếu"
          date="29 Tháng 12, 2025"
          image={hieuNgo}
          content="Cảm ơn quý công ty đã hỗ trợ cho khoản vay của tôi với mục đích mua nhà. Khoản vay của tôi rất hợp lý trong bối cảnh thời đại kinh tế khủng hoảng với lãi suất cao từ các ngân hàng địa phương, tuy nhiên BẮP TÀI CHÍNH có những ưu đãi rất tốt đối với các khoản vay tiêu dùng cá nhân."
        />
        <TestimoneyItem
          name="Ngô Phương Thanh"
          date="14 Tháng 11, 2025"
          image={thanhNgo}
          content="Trong bối cảnh thu nhập bình quân của người lao động tại thời điểm hiện tại thì việc sở hữu 1 chiếc siêu xe trong mơ thực sự là điều rất khó, tuy nhiên đến với BẮP TÀI CHISHN thì không j là không thể với các khoản vay cùng với lãi suất ưu đãi đa dạng đã giúp tôi sở hữu 1 siêu xe để đi cháy phố báo đời."
        />
        <TestimoneyItem
          name="Phạm Nhật Vượng"
          date="25 Tháng 6, 2025"
          image={vuongPham}
          content="Thật sự rất cảm ơn quý công ty đã đem lại cho tôi nhiều lợi ích lớn lao và trong đó lớn nhất đó chính là dự án startup của tôi, không những giải ngân nhanh mà các đối tác còn rất nhiệt tình tư vấn. Nếu có cơ hội tôi chắc chắn sẽ còn sử dụng dịch vụ của BẮP TÀI CHÍNH"
        />
      </div>
      <Feedback isOpen={popUp} onClose={handleClose} />
    </div>
  );
}

export default Testimoney;

const TestimoneyItem = ({ name, date, image, content }) => {
  return (
    <div className="testimoney-item">
      <div className="testimoney-quote-icon">"</div>
      <div className="testimoney-item-content">
        <p className="testimoney-text">{content}</p>
        <div className="testimoney-item-footer">
          <div className="testimoney-item-img">
            <img src={image} alt={name} />
          </div>
          <div className="testimoney-item-info">
            <h3>{name}</h3>
            <p className="testimoney-date">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
