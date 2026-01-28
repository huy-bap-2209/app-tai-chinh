import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="info-container">
      <div className="info-header">
        <div className="info-category">
          <h3>THỂ LOẠI</h3>
        </div>
        <div className="info-header-title">
          <h1>Hãy chắc chắn rằng bạn đã đọc điều này trước khi nộp đơn</h1>
          <h4>
            Chúng tôi cung cấp thông tin về nhiều giải pháp tài chính được cá
            nhân hóa từ các đối tác của chúng tôi để phù hợp với nhu cầu cụ thể
            của bạn. Hãy chắc chắn rằng bạn đã đọc phần bên dưới và Điều khoản &
            Điều kiện.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Info;
