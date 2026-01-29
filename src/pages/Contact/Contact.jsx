import React from "react";

import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
const cx = classNames.bind(styles);

import Navbar from "../../components/layout/defaultLayout/navbar/Navbar";

function Contact() {
  return (
    <div className={cx("contact-container")}>
      <Navbar />
    </div>
  );
}

export default Contact;
