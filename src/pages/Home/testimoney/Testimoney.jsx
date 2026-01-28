import React, { useState } from "react";
import "./Testimoney.css";

import logoWeb from "../../../images/logo_web.png";
import { Link } from "react-router-dom";

import Feedback from "./feedback/Feedback";
import TestimoneyData from "./TestimoneyData";

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
            <button onClick={handleOpenModal}>
              CSKHbaptaichinh@gmail.com.vn
            </button>
          </div>
        </div>
      </div>
      <div className="testimoney-list">
        {TestimoneyData.map((item, index) => (
          <TestimoneyItem
            key={index}
            name={item.name}
            date={item.date}
            image={item.img}
            content={item.content}
          />
        ))}
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
