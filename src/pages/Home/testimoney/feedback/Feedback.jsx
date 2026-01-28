import "./Feedback.css";
import React, { useState } from "react";

function Feedback({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [selectedOption, setSelectedOption] = useState("");
  const [opinion, setOpinion] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullname,
      email,
      contact,
      gender,
      selectedOption,
      opinion,
    });
  };

  // Reset all inputs
  const handleReset = () => {
    setFullName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSelectedOption("");
    setOpinion("");
  };

  return (
    <div className="feedback-overlay">
      <div className="feedback-container">
        <div className="feedback-header">
          <h1>Ý kiến phản hồi</h1>
          <button className="feedback-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="feedback-body">
          <form
            className="feedback-form"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <div className="form-group">
              <label htmlFor="fullname">Họ & Tên*</label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nhập họ & tên"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Số điện thoại*</label>
              <input
                type="tel"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Nhập số điện thoại"
                required
              />
            </div>

            <div className="form-group">
              <label>Giới tính*</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Nam
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Nữ
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Khác
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="select">Chọn vấn đề bạn gặp phải*</label>
              <select
                id="select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                required
              >
                <option value="" disabled>
                  vui lòng chọn
                </option>
                <option value="Page lỗi">Page lỗi</option>
                <option value="Khoản vay chưa tất toán">
                  Khoản vay chưa tất toán
                </option>
                <option value="Không thêm được mã ưu đãi">
                  Không thêm được mã ưu đãi
                </option>
                <option value="Không tìm được ngân hàng phù hợp">
                  Không tìm được ngân hàng phù hợp
                </option>
                <option value="Ngân hàng không khả dụng">
                  Ngân hàng không khả dụng
                </option>
                <option value="Góp ý kiến">Góp ý kiến</option>
                <optionn value="Khác">Khác</optionn>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="about">Ý kiến cá nhân*</label>
              <textarea
                id="about"
                value={opinion}
                onChange={(e) => setOpinion(e.target.value)}
                placeholder="Nhập ý kiến"
                required
              />
            </div>
          </form>
        </div>

        <div className="feedback-footer">
          <button className="btn-submit" onClick={handleSubmit}>
            Gửi
          </button>
          <div className="button-group">
            <button className="btn-reset" onClick={handleReset}>
              Làm mới
            </button>
            <button className="btn-close" onClick={onClose}>
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
