import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

import AboutMeData from "./Data";
import aboutImg from "../../../images/about-img.webp";
import aboutImg1 from "../../../images/about-img1.webp";

function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="aboutme-title">
        <h5>VỀ CHÚNG TÔI</h5>
        <h1>
          Chúng tôi cung cấp thông tin về các khoản vay và các ưu đãi có lợi
          nhất
        </h1>
      </div>
      <div className="aboutme-content">
        {AboutMeData.map((about, index) => (
          <div className="aboutme-content-left" key={index}>
            <h3>{about.title}</h3>
            <p>{about.desc}</p>
            <Link to={about.linkTo} className="aboutme-content-left-link">
              {about.link}
              {/* <img src={about.img} alt="" className="imgg" /> */}
            </Link>
          </div>
        ))}
        <div className="aboutme-content-right">
          <h4>Vay nhanh là một dịch vụ tiện lợi với các ưu đãi ưu đãi.</h4>
          <p>
            Chúng tôi kết nối khách hàng với người cho vay trong vài phút và đảm
            bảo các điều kiện tốt nhất.
          </p>
          <p>
            Chúng tôi bảo vệ dữ liệu của bạn và chỉ chuyển thông tin cá nhân cho
            các đối tác - ngân hàng của chúng tôi. Quá trình ra quyết định mất
            đến 1 giờ. Chúng tôi thu thập các ưu đãi có lợi nhất được cung cấp
            bởi các ngân hàng đáng tin cậy. Chúng tôi tin rằng khách hàng của
            chúng tôi không chỉ là một giao dịch tài chính - vì vậy chúng tôi
            mong muốn cung cấp sự minh bạch và hiểu biết với mỗi tương tác.
          </p>
        </div>
      </div>
      <div className="aboutme-content-image">
        <img
          src={aboutImg}
          alt="aboutme-content-img"
          className="aboutme-content-img"
        />
        <img
          src={aboutImg1}
          alt="aboutme-content-img"
          className="aboutme-content-img"
        />
      </div>
    </div>
  );
}

export default AboutMe;
