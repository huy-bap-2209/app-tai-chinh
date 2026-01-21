import { useState, forwardRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./CategoryOffers.css";

import LoanModal from "./LoanModal/LoanModal.jsx";

import TabData from "./TabData";
import TabContentData from "./TabContentData";

const CategoryOffers = forwardRef((props, ref) => {
  const [popUp, setPopUp] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const [hasProcessedState, setHasProcessedState] = useState(false);

  const [activeTab, setActiveTab] = useState("business");
  const categories = ["business", "student", "elderly"];

  const location = useLocation();

  // Reset modal khi component mount lần đầu
  useEffect(() => {
    setPopUp(false);
    setSelectedBank("");
    setHasProcessedState(false);
  }, []);

  useEffect(() => {
    // Chỉ xử lý location.state một lần duy nhất
    if (!hasProcessedState && location.state) {
      if (location.state?.scrollY !== undefined) {
        window.scrollTo({
          top: location.state.scrollY,
          behavior: "instant",
        });
      }

      if (location.state?.reopenLoan && location.state?.bankName) {
        setSelectedBank(location.state.bankName);
        setPopUp(true);
      }

      // Đánh dấu đã xử lý state này để không xử lý lại lần nữa
      setHasProcessedState(true);

      // Clear location.state bằng cách navigate mà không state
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location.state, hasProcessedState]);

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
          {/* chỉ map cho item k bọc làm wrapper */}
          {TabData.map((Tab) => (
            <div
              key={Tab.filter}
              className={`category-tab-items ${activeTab === Tab.filter ? "active" : ""}`}
              onClick={() => setActiveTab(Tab.filter)}
            >
              {Tab.target}
            </div>
          ))}
        </div>
        {/* Tab list */}
        <div className="category-tab-wrapper">
          {categories.map((categor) => (
            <div
              key={categor}
              className={`category-tab-wrapper-content ${
                activeTab === categor ? "active" : ""
              }`}
            >
              <div className="category-offers-grid">
                {TabContentData.filter((item) => item.category === categor).map(
                  (content) => (
                    <div className="category-offers-card" key={content.id}>
                      <h3>
                        {content.bankName} / <span>{content.amount}</span>
                      </h3>
                      <div className="category-offers-info">
                        {content.info.map((text, idx) => (
                          <span className="dot-text" key={idx}>
                            {text}
                          </span>
                        ))}
                      </div>
                      <p className="offers-desc">{content.desc} </p>
                      <div className="offers-actions">
                        <button
                          className="btn-underline"
                          onClick={() => handleOpenModal(content.bankName)}
                        >
                          NHẬN KHOẢN VAY
                        </button>
                        <Link to="/Bank_info" className="btn-underline">
                          THÔNG TIN
                        </Link>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          ))}
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
