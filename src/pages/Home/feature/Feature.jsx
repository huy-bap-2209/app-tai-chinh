import React from "react";

import classNames from "classnames/bind";
import styles from "./Feature.module.scss";
const cx = classNames.bind(styles);

import FeatureData from "./Data";

function Feature() {
  return (
    <div>
      <div className={cx("feature")}>
        {FeatureData.map((feature) => (
          <div key={feature.id} className={cx("feature-items")}>
            <div className={cx("feature-items-icons")}>
              <img src={feature.image} alt="" />
            </div>
            <h3 className={cx("title")}>{feature.title}</h3>
            <span className={cx("feature-items-line")}></span>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
