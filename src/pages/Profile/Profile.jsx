import React from "react";

import Navbar from "../../components/layout/defaultLayout/navbar/Navbar";

import classNames from "classnames";
import styles from "./Profile.module.scss";

const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx("wrapper")}>
      <Navbar />
    </div>
  );
}

export default Profile;
