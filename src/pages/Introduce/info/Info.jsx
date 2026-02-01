import React, { Fragment } from "react";

import InfoData from "./Info";

import classNames from "classnames/bind";
import styles from "./Info.module.scss";
const cx = classNames.bind(styles);

function Info() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("info-container")}>
        <div className={cx("info-header")}>
          <div className={cx("info-category")}>
            <h3>THỂ LOẠI</h3>
          
          </div>
          <div className={cx("info-header-title")}>
            <h1>Hãy chắc chắn rằng bạn đã đọc điều này trước khi nộp đơn</h1>
            <h4>
              Chúng tôi cung cấp thông tin về nhiều giải pháp tài chính được cá
              nhân hóa từ các đối tác của chúng tôi để phù hợp với nhu cầu cụ
              thể của bạn. Hãy chắc chắn rằng bạn đã đọc phần bên dưới và Điều
              khoản & Điều kiện.
            </h4>
          </div>
        </div>
      </div>
      <div className={cx("info-items")}>
  {/* Hàng 1: item 1,2 */}
  <div className={cx("row")}>
    {InfoData.slice(0, 2).map((info) => (
      <div key={info.id} className={cx("items-title")}>
        <h4>{info.title}</h4>
        {info.desc && (
          <ul>
            {info.desc.map((d, i) => (
              <li key={i}>{d.info}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>

  {/* hr */}
  <hr className={cx("hr")} />

  {/* Hàng 2: item 3,4 */}
  <div className={cx("row")}>
    {InfoData.slice(2, 4).map((info) => (
      <div key={info.id} className={cx("items-title")}>
        <h4>{info.title}</h4>
        {info.desc && (
          <ul>
            {info.desc.map((d, i) => (
              <li key={i}>{d.info}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
</div>

      
    </div>
  );
}

export default Info;
