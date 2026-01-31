import { useState, forwardRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./CategoryOffers.module.scss";

import LoanModal from "./loanModal/LoanModal.jsx";
import TabData from "./TabData";
import TabContentData from "./TabContentData";
import Button from "../../../components/element/Button/Button.jsx";

const cx = classNames.bind(styles);

const CategoryOffers = forwardRef((props, ref) => {
  const [popUp, setPopUp] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const [hasProcessedState, setHasProcessedState] = useState(false);
  const [activeTab, setActiveTab] = useState("business");

  const location = useLocation();

  useEffect(() => {
    setPopUp(false);
    setSelectedBank("");
    setHasProcessedState(false);
  }, []);

  useEffect(() => {
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

      setHasProcessedState(true);
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
    <div className={cx("category-container")} ref={ref}>
      <div className={cx("category-header")}>
        <div className={cx("category-header-left")}>
          <h5>THỂ LOẠI</h5>
          <h2>Chọn ưu đãi theo danh mục</h2>
        </div>
        <div className={cx("category-header-right")}>
          <h5>
            Khám phá tất cả các ưu đãi có sẵn từ các đối tác của chúng tôi theo
            danh mục.
          </h5>
        </div>
      </div>

      <div className={cx("category-tab-list")}>
        {TabData.map((Tab) => (
          <div
            key={Tab.filter}
            className={cx("category-tab-items", {
              active: activeTab === Tab.filter,
            })}
            onClick={() => setActiveTab(Tab.filter)}
          >
            {Tab.target}
          </div>
        ))}
      </div>

      <div className={cx("category-tab-wrapper")}>
        <div className={cx("category-tab-wrapper-content", "active")}>
          <div className={cx("category-offers-grid")}>
            {TabContentData.filter((item) => item.category === activeTab).map(
              (list) => (
                <div className={cx("category-offers-card")} key={list.id}>
                  <h3>
                    {list.bankName} / <span>{list.amount}</span>
                  </h3>

                  <div className={cx("category-offers-info")}>
                    {list.info.map((text, idx) => (
                      <span className={cx("dot-text")} key={idx}>
                        {text}
                      </span>
                    ))}
                  </div>

                  <p className={cx("offers-desc")}>{list.desc}</p>

                  <div className={cx("offers-actions")}>
                    <Button
                    btnOutline
                      onClick={() => handleOpenModal(list.bankName)}
                    >
                      NHẬN KHOẢN VAY
                    </Button>

                    <Button to="/bank_info" >
                      THÔNG TIN
                    </Button>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <LoanModal isOpen={popUp} onClose={handleClose} bankName={selectedBank} />
    </div>
  );
});

CategoryOffers.displayName = "CategoryOffers";
export default CategoryOffers;
