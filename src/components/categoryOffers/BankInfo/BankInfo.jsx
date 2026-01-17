// src/pages/BankInfoPage.jsx
import React, { useState } from "react";
import "./BankInfo.css";
import { Link } from "react-router-dom";

function BankInfo() {
  const [activeTab, setActiveTab] = useState(1);

  const banks = [
    // object chứa info banks
    {
      name: "Vietcombank",
      type: "doanh nghiệp",
      rate: "9%",
      limit: "$80,000,000",
      duration: "8 ngày làm việc",
      desc: "Ngân hàng lớn nhất Việt Nam, hỗ trợ doanh nghiệp mọi quy mô.",
    },
    {
      name: "Mbbank",
      type: "sinh viên",
      rate: "10%",
      limit: "$10,000,000",
      duration: "5 ngày làm việc",
      desc: "Giải pháp vay linh hoạt cho sinh viên và startup nhỏ.",
    },
    {
      name: "Vib",
      type: "người cao tuổi",
      rate: "12%",
      limit: "$3,000,000",
      duration: "2 ngày làm việc",
      desc: "Giải pháp tài chính hoàn thiện dành cho người cao tuổi.",
    },
  ];

  // mảng mới chứa các ngân hàng thuộc tab đang active.
  const filteredBanks = banks.filter((bank) => {
    if (activeTab === 1) return bank.type === "doanh nghiệp";
    if (activeTab === 2) return bank.type === "sinh viên";
    if (activeTab === 3) return bank.type === "người cao tuổi";
  });

  return (
    <div className="bankinfo-container">
      <div className="bankinfo-header">
        <h5>NGÂN HÀNG ĐỐI TÁC</h5>
        <h1>Thông tin chi tiết các ngân hàng</h1>
        <p>
          Chọn ngân hàng để xem lãi suất, hạn mức, ưu đãi và các điều kiện vay.
        </p>
      </div>
      <div className="bankinfo-tabs">
        <div className="bankinfo-items">
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => setActiveTab(1)}
          >
            Doanh nghiệp
          </button>
          <button
            className={activeTab === 2 ? "active" : ""}
            onClick={() => setActiveTab(2)}
          >
            Sinh viên
          </button>
          <button
            className={activeTab === 3 ? "active" : ""}
            onClick={() => setActiveTab(3)}
          >
            Người cao tuổi
          </button>
        </div>
        <div className="home-link">
          <Link to="/">Quay về trang chủ</Link>
        </div>
      </div>
      <div className="bankinfo-grid">
        {filteredBanks.map((bank, idx) => (
          <div key={idx} className="bankinfo-card">
            <h3>{bank.name}</h3>
            <p className="bank-desc">{bank.desc}</p>
            <div className="bank-info">
              <span>Lãi suất: {bank.rate}</span>
              <span>Hạn mức: {bank.limit}</span>
              <span>Thời gian xử lý: {bank.duration}</span>
            </div>
            <button className="btn-details">Chọn</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BankInfo;
