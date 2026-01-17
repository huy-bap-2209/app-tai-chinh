import { useState, forwardRef } from "react";
import { Link } from "react-router-dom";

import "./CategoryOffers.css";

import LoanModal from "./loanModal/LoanModal";

const CategoryOffers = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState(1);
  const [popUp, setPopUp] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");

  const handleOpenModal = (bankName) => {
    setSelectedBank(bankName);
    setPopUp(true);
  };

  const handleClose = () => {
    setSelectedBank("");
    setPopUp(false);
  };

  return (
    <div className="category-container" ref={ref}>
      <div className="category-header">
        <div className="category-header-left">
          <h5>THỂ LOẠI</h5>
          <h2>Chọn ưu đãi theo danh mục</h2>
        </div>
        <div className="category-header-right">
          <h5>
            Khám phá tất cả các ưu đãi có sẵn từ các đối tác của chúng tôi theo
            danh mục.
          </h5>
        </div>
      </div>
      <div className="category-tab">
        <div className="category-tab-list">
          <div
            className={`category-tab-items ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            Dành cho doanh nghiệp
          </div>
          <div
            className={`category-tab-items ${activeTab === 2 ? "active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            Dành cho sinh viên
          </div>
          <div
            className={`category-tab-items ${activeTab === 3 ? "active" : ""}`}
            onClick={() => setActiveTab(3)}
          >
            Dành cho người về hưu
          </div>
        </div>
        <div className="category-tab-wrapper">
          <div
            className="category-tab-wrapper-content"
            style={{ display: activeTab === 1 ? "block" : "none" }}
          >
            <div className="category-offers-grid">
              <div className="category-offers-card">
                <h3>
                  Vietinbank / <span>$80,000,000đ</span>
                </h3>
                <div className="category-offers-info">
                  <span className="dot-text">9%</span>
                  <span className="dot-text">Ưu đãi hấp dẫn</span>
                  <span className="dot-text">8 ngày làm việc</span>
                </div>
                <p className="offers-desc">Quỹ để củng cố tài sản lưu thông</p>
                <div className="offers-actions">
                  <button
                    className="btn-underline"
                    onClick={() => handleOpenModal("VietinBank")}
                  >
                    NHẬN KHOẢN VAY
                  </button>
                  <Link to="/Bank_info" className="btn-underline">
                    THÔNG TIN
                  </Link>
                </div>
              </div>
              <div className="category-offers-card">
                <h3>
                  Saigonbank / <span>$50,000,000đ</span>
                </h3>
                <div className="category-offers-info">
                  <span className="dot-text">10%</span>
                  <span className="dot-text">Ưu đãi thông thường</span>
                  <span className="dot-text">7 ngày làm việc</span>
                </div>
                <p className="offers-desc">
                  Một bàn tay giúp đỡ cho một công ty nhỏ trả lương cho nhân
                  viên.
                </p>
                <div className="offers-actions">
                  <button
                    className="btn-underline"
                    onClick={() => handleOpenModal("SaigonBank")}
                  >
                    NHẬN KHOẢN VAY
                  </button>
                  <Link className="btn-underline" to="/bank_info">
                    THÔNG TIN
                  </Link>
                </div>
              </div>
              <div className="category-offers-card">
                <h3>
                  Vietcombank / <span>$100,000,000đ</span>
                </h3>
                <div className="category-offers-info">
                  <span className="dot-text">10%</span>
                  <span className="dot-text">Ưu đãi hấp dẫn</span>
                  <span className="dot-text">10 ngày làm việc</span>
                </div>
                <p className="offers-desc">
                  Ưu đãi thuận lợi từ một trong những ngân hàng lớn nhất
                </p>
                <div className="offers-actions">
                  <button
                    className="btn-underline"
                    onClick={() => handleOpenModal("Vietcombank")}
                  >
                    NHẬN KHOẢN VAY
                  </button>
                  <Link to="/bank_info" className="btn-underline">
                    THÔNG TIN
                  </Link>
                </div>
              </div>
              <div className="category-offers-card">
                <h3>
                  Mbbank / <span>$40,000,000đ</span>
                </h3>
                <div className="category-offers-info">
                  <span className="dot-text">12%</span>
                  <span className="dot-text">Ưu đãi trực tuyến</span>
                  <span className="dot-text">5 ngày làm việc</span>
                </div>
                <p className="offers-desc">
                  Ưu đãi chỉ trực tuyến cho các doanh nghiệp nhỏ, chỉ trong 2
                  tuần.
                </p>
                <div className="offers-actions">
                  <button
                    className="btn-underline"
                    onClick={() => handleOpenModal("Mbbank")}
                  >
                    NHẬN KHOẢN VAY
                  </button>
                  <Link to="/bank_info" className="btn-underline">
                    THÔNG TIN
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="category-tab-wrapper-content"
            style={{ display: activeTab === 2 ? "block" : "none" }}
          >
            <div className="category-offers-grid">
              <div className="category-offers-card">
                <h3>
                  Mbbank / <span>$10,000,000đ</span>
                </h3>
                <div className="category-offers-info">
                  <span className="dot-text">10%</span>
                  <span className="dot-text">Ưu đãi trực tuyến</span>
                  <span className="dot-text">5 ngày làm việc</span>
                </div>
                <p className="offers-desc">
                  Gói vay hợp lý dành cho sinh viên đóng học phí
                </p>
                <div className="offers-actions">
                  <button
                    className="btn-underline"
                    onClick={() => handleOpenModal("Mbbank")}
                  >
                    NHẬN KHOẢN VAY
                  </button>
                  <Link to="/bank_info" className="btn-underline">
                    THÔNG TIN
                  </Link>
                </div>
              </div>
              <div className="category-offers-card">
                <h3>
                  VpBank / <span>$4,000,000đ</span>
                </h3>
                <div className="category-offers-info">
                  <span className="dot-text">7%</span>
                  <span className="dot-text">Ưu đãi hấp dẫn</span>
                  <span className="dot-text">2 ngày làm việc</span>
                </div>
                <p className="offers-desc">
                  Giải pháp cứu cánh cho sinh viên cuối tháng
                </p>
                <div className="offers-actions">
                  <button
                    className="btn-underline"
                    onClick={() => handleOpenModal("Vpbank")}
                  >
                    NHẬN KHOẢN VAY
                  </button>
                  <Link to="/bank_info" className="btn-underline">
                    THÔNG TIN
                  </Link>
                </div>
              </div>
              <div className="category-offers-card">
                <h3>
                  Agribank / <span>$20,000,000đ</span>
                </h3>
                <div className="category-offers-info">
                  <span className="dot-text">9%</span>
                  <span className="dot-text">Ưu đãi thông thường</span>
                  <span className="dot-text">5 ngày làm việc</span>
                </div>
                <p className="offers-desc">
                  Khoản quỹ dành cho sinh viên khởi nghiệp
                </p>
                <div className="offers-actions">
                  <button
                    className="btn-underline"
                    onClick={() => handleOpenModal("Agribank")}
                  >
                    NHẬN KHOẢN VAY
                  </button>
                  <Link to="/bank_info" className="btn-underline">
                    THÔNG TIN
                  </Link>
                </div>
              </div>
              <div className="category-offers-card">
                <h3>
                  Vib / <span>$50,000,000đ</span>
                </h3>
                <div className="category-offers-info">
                  <span className="dot-text">12%</span>
                  <span className="dot-text">Ưu đãi thông thường</span>
                  <span className="dot-text">7 ngày làm việc</span>
                </div>
                <p className="offers-desc">
                  Số tiền hồi môn dành cho sinh viên kết hôn
                </p>
                <div className="offers-actions">
                  <button
                    className="btn-underline"
                    onClick={() => handleOpenModal("Vib")}
                  >
                    NHẬN KHOẢN VAY
                  </button>
                  <Link to="/bank_info" className="btn-underline">
                    THÔNG TIN
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="category-tab-wrapper-content"
            style={{ display: activeTab === 3 ? "block" : "none" }}
          >
            <div className="category-offers-grid">
              <div className="category-offers-card">
                <h3>
                  Vib / <span>$3,000,000đ</span>
                </h3>
                <div className="category-offers-info">
                  <span className="dot-text">12%</span>
                  <span className="dot-text">Ưu đãi thông thường</span>
                  <span className="dot-text">2 ngày làm việc</span>
                </div>
                <p className="offers-desc">
                  Khoản tiền hữu ích cho người già có nhu cầu
                </p>
                <div className="offers-actions">
                  <button
                    className="btn-underline"
                    onClick={() => handleOpenModal("Vib")}
                  >
                    NHẬN KHOẢN VAY
                  </button>
                  <Link to="/bank_info" className="btn-underline">
                    THÔNG TIN
                  </Link>
                </div>
              </div>
              <div className="category-offers-card">
                <h3>
                  Sacombank / <span>$40,000,000đ</span>
                </h3>
                <div className="category-offers-info">
                  <span className="dot-text">11%</span>
                  <span className="dot-text">Ưu đãi thông thường</span>
                  <span className="dot-text">5 ngày làm việc</span>
                </div>
                <p className="offers-desc">
                  Giải pháp toàn diện cho việc sửa nhà dưỡng già
                </p>
                <div className="offers-actions">
                  <button
                    className="btn-underline"
                    onClick={() => handleOpenModal("Sacombank")}
                  >
                    NHẬN KHOẢN VAY
                  </button>
                  <Link to="/bank_info" className="btn-underline">
                    THÔNG TIN
                  </Link>
                </div>
              </div>
              <div className="category-offers-card">
                <h3>
                  ACB / <span>$15,000,000đ</span>
                </h3>
                <div className="category-offers-info">
                  <span className="dot-text">0%</span>
                  <span className="dot-text">Ưu đãi hấp dẫn</span>
                  <span className="dot-text">2 ngày làm việc</span>
                </div>
                <p className="offers-desc">
                  Dành cho người già hoàn cảnh nhưng phải lo cho gia đình{" "}
                </p>
                <div className="offers-actions">
                  <button
                    className="btn-underline"
                    onClick={() => handleOpenModal("ACB")}
                  >
                    NHẬN KHOẢN VAY
                  </button>
                  <Link to="/bank_info" className="btn-underline">
                    THÔNG TIN
                  </Link>
                </div>
              </div>
              <div className="category-offers-card">
                <h3>
                  Techcombank / <span>$100,000,000đ</span>
                </h3>
                <div className="category-offers-info">
                  <span className="dot-text">12%</span>
                  <span className="dot-text">Ưu đãi hấp dẫn</span>
                  <span className="dot-text">8 ngày làm việc</span>
                </div>
                <p className="offers-desc">
                  Quỹ dành cho chủ doanh nghiệp vận hành vốn
                </p>
                <div className="offers-actions">
                  <button
                    className="btn-underline"
                    onClick={() => handleOpenModal("Techcombank")}
                  >
                    NHẬN KHOẢN VAY
                  </button>
                  <Link to="/bank_info" className="btn-underline">
                    THÔNG TIN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* prettier-ignore */}
      <LoanModal 
      isOpen={popUp} 
      onClose={handleClose} 
      bankName={selectedBank} />
    </div>
  );
});

CategoryOffers.displayName = "CategoryOffers";

export default CategoryOffers;
