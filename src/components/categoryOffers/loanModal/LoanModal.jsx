import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./LoanModal.css";

function LoanModal({ isOpen, onClose, bankName }) {
  const [amount, setAmount] = useState(10000000);
  const [months, setMonths] = useState(12);
  const [cycle, setCycle] = useState("chọn chu kỳ");

  const navigate = useNavigate();

  const handleGoPromo = () => {
    navigate("/promo_page", {
      state: {
        from: "loan-modal",
        bankName,
        scrollY: window.scrollY,
      },
    });
  };

  // const handleBack = () => {
  //   if (bankName) {
  //     navigate(`/bank_info?bank=${bankName}`);
  //   } else {
  //     navigate("/");
  //   }
  // };

  // const handlePromoClick = () => {
  //   navigate(`/promo_page?bank=${bankName}`);
  // };

  //chặn scroll
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  // reset khi mở modal
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setAmount(10000000);
        setMonths(12);
        setCycle("chọn chu kỳ");
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const paymentCycleText = cycle === "chọn chu kỳ" ? "Hàng tháng" : "Hàng quý";

  return (
    <div className="loan-modal-overlay" onClick={onClose}>
      <div className="loan-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="loan-modal-header">
          <h2>Đăng ký khoản vay</h2>
          <span className="close-btn" onClick={onClose}>
            ×
          </span>
        </div>

        {/* Body */}
        <div className="loan-modal-body">
          <div className="form-group">
            <label>Ngân hàng</label>
            <input value={bankName} disabled className="default-bank" />
          </div>

          <div className="form-group">
            <label>Họ và tên</label>
            <input placeholder="Nguyễn Văn A" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input placeholder="email@example.com" />
          </div>

          <div className="form-group">
            <label>Số điện thoại</label>
            <input placeholder="0123 456 789" />
          </div>
          <div className="form-group">
            <label>Mã ưu đãi (nếu có)</label>
            <input type="text" placeholder="Điền mã ưu đãi" />
          </div>
          <div className="form-group">
            <label>
              Số tiền vay: <strong>{amount.toLocaleString()} đ</strong>
            </label>
            <input
              type="range"
              min="1000000"
              max="100000000"
              step="500000"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Thời gian vay (tháng)</label>
            <select value={months} onChange={(e) => setMonths(+e.target.value)}>
              <option value={3}>3 tháng</option>
              <option value={6}>6 tháng</option>
              <option value={9}>9 tháng</option>
              <option value={12}>12 tháng</option>
              <option value={24}>24 tháng</option>
              <option value={36}>36 tháng</option>
            </select>
          </div>

          <div className="form-group">
            <label>Chu kỳ trả nợ</label>
            <select value={cycle} onChange={(e) => setCycle(e.target.value)}>
              <option value="monthly">Hàng tháng</option>
              <option value="quarterly">Hàng quý</option>
            </select>
          </div>

          <div className="loan-summary">
            <p>
              📌 Chu kỳ trả: <strong>{paymentCycleText}</strong>
            </p>
            <p>
              ⏱ Thời gian vay: <strong>{months} tháng</strong>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="loan-modal-footer">
          <div className="btn-offers-nav">
            <button className="btn-offers" onClick={handleGoPromo}>
              {bankName ? "Ưu đãi" : "Quay lại ..."}
            </button>
          </div>
          <div className="btn-submit-cancel">
            <button className="btn-cancel" onClick={onClose}>
              Hủy
            </button>
            <button className="btn-submit" type="submit">
              Gửi đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanModal;
