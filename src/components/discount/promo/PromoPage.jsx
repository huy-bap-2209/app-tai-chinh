// src/pages/PromoPage.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./PromoPage.css";

import discountData from "../DiscountData";

function PromoPage() {
  //mảng này dùng map để render ra các card tương ứng
  const promoCodes = [
    {
      bank: "Vietcombank",
      code: "#2209BTCVIETCOMBANK",
      desc: "Dành cho doanh nghiệp với mọi quy mô.",
    },
    {
      bank: "Mbbank",
      code: "#2209BTCMBBANK",
      desc: "Dành cho đa số loại lĩnh vực bạn đều có thể vay với lãi suất ưu đãi.",
    },
    {
      bank: "Agribank",
      code: "#2209BTCAGRIBANK",
      desc: "Hỗ trợ sinh viên mọi lĩnh vực tất toán nhanh chóng.",
    },
    {
      bank: "Vib",
      code: "#2209BTCVIB",
      desc: "Giải pháp hoàn thiện về tài chính dành cho người cao tuổi.",
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const fromLoan = location.state?.from === "loan-modal";
  const bankName = location.state?.bankName;

  const handleBack = () => {
    if (fromLoan) {
      // quay lại trang chủ + mở popup + giữ scroll
      navigate("/", {
        state: {
          reopenLoan: true,
          bankName,
          scrollY: location.state.scrollY,
        },
      });
    } else {
      // nếu vào promo từ chỗ khác
      navigate("/");
    }
  };

  // const handleBackToRegister = () => {
  //   navigate("/", {
  //     state: {
  //       reopenLoan: true,
  //       bankName: location.state?.bankName,
  //       scrollY: location.state?.scrollY,
  //     },
  //   });
  // };

  // const query = new URLSearchParams(location.search);
  // const bankName = query.get("bank");

  return (
    <div className="promo-container">
      <h5 className="promo-header">MÃ KHUYẾN MÃI</h5>
      <h1>Khuyến mãi đặc biệt từ các đối tác của chúng tôi</h1>
      <h4>Chọn mã và áp dụng khi đăng ký khoản vay để nhận ưu đãi.</h4>
      <hr />
      <div className="promo-nav">
        {bankName && (
          <p>
            Đang xem ưu đãi cho: <strong>{bankName}</strong>
          </p>
        )}
        <button onClick={handleBack}>
          {" "}
          {fromLoan ? "Quay lại đăng ký" : "Quay về trang chủ"}
        </button>
      </div>
      <div className="promo-grid">
        {/* map lặp qua từng object để render card */}
        {promoCodes.map((item, index) => (
          <div key={index} className="promo-card">
            <h3>{item.bank}</h3>
            <p className="promo-desc">{item.desc}</p>
            <div className="promo-code">
              <span>{item.code}</span>
              {/* copy text vào clipboard & hiển thị thông báo khi đã cop */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(item.code);
                  alert("Đã copy mã khuyến mãi!");
                }}
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromoPage;
