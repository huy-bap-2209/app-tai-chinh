import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

import phoneNumber from "../../../../images/phone-number.svg";
import Email from "../../../../images/email.svg";
import Address from "../../../../images/address.svg";
import WorkingHours from "../../../../images/working-time.svg";
import logoWeb from "../../../../images/logo_web.png";
import facebookIcon from "../../../../images/facebook-icon.svg";
import twitterIcon from "../../../../images/twitter-icon.svg";
import instagramIcon from "../../../../images/instagram-icon.svg";
import letegramIcon from "../../../../images/telegram-icon.svg";

function Footer() {
  return (
    <div className={cx("main-footer")}>
      <div className={cx("footer-top")}>
        <div className={cx("footer-top-left")}>
          <p className={cx("footer-top-left-title")}>LIÊN HỆ</p>
          <h1>Thông tin liên lạc</h1>
          <h5>
            Vui lòng liên hệ với chúng tôi theo bất kỳ cách nào thuận tiện.
          </h5>
          <p className={cx("footer-top-left-desc")}>
            Bạn có thể tìm thấy các loại khoản vay khác nhau từ các đối tác của
            chúng tôi trên trang web. Bạn có thể đăng ký chúng trực tuyến và
            nhận được quyết định sau vài phút. Nếu bạn có bất kỳ câu hỏi nào,
            bạn có thể liên hệ với nhóm hỗ trợ của chúng tôi.
          </p>
          <div className={cx("footer-top-left-child")}>
            <div className={cx("footer-top-left-desc")}>
              Bạn có thể tìm thấy các loại khoản vay khác nhau từ các đối tác
              của chúng tôi trên trang web. Nếu điều kiện phù hợp với bạn, bạn
              có thể đăng ký trực tuyến.
            </div>
            <div className={cx("footer-top-left-desc")}>
              Tuy nhiên, xin lưu ý rằng chúng tôi là trung gian và chỉ cung cấp
              thông tin. Việc xử lý các yêu cầu từ phía đối tác của chúng tôi.
            </div>
          </div>
        </div>

        <div className={cx("footer-top-right")}>
          <div className={cx("contact-item")}>
            <div className={cx("footer-top-right-info")}>
              <img src={phoneNumber} alt="" />
            </div>
            <div className={cx("contact-text")}>
              <h4>Số điện thoại</h4>
              <p>(+996) 989 962 954</p>
            </div>
          </div>

          <div className={cx("contact-item")}>
            <div className={cx("footer-top-right-info")}>
              <img src={Email} alt="" />
            </div>
            <div className={cx("contact-text")}>
              <h4>Email</h4>
              <p>CSKHbaptaichinh@gmail.com.vn</p>
            </div>
          </div>

          <div className={cx("contact-item")}>
            <div className={cx("footer-top-right-info")}>
              <img src={Address} alt="" />
            </div>
            <div className={cx("contact-text")}>
              <h4>Địa chỉ</h4>
              <p>Undefined</p>
            </div>
          </div>

          <div className={cx("contact-item")}>
            <div className={cx("footer-top-right-info")}>
              <img src={WorkingHours} alt="" />
            </div>
            <div className={cx("contact-text")}>
              <h4>Giờ làm việc</h4>
              <p>Thứ Hai - Thứ Bảy: 11 giờ sáng - 9 giờ tối</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className={cx("footer-mid")}>
        <div className={cx("footer-mid-more-info")}>
          <div className={cx("logo-slogan")}>
            <div className={cx("logo-slogan-img")}>
              <img src={logoWeb} alt="" />
            </div>
            <div className={cx("logo-slogan-text")}>
              <h5>BẮP TÀI CHÍNH</h5>
              <p className={cx("logo-slogan-title")}>Vay nhanh - Khóc lâu</p>
            </div>
          </div>
          <p>
            Chúng tôi cung cấp thông tin về các khoản vay nhanh tốt nhất từ các
            đối tác của chúng tôi mà bạn có thể nhận được trực tuyến.
          </p>
          <div className={cx("link-social")}>
            <img src={facebookIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={letegramIcon} alt="" />
            <img src={instagramIcon} alt="" />
          </div>
        </div>

        <div className={cx("footer-mid-more-info")}>
          <h5>Thông tin</h5>
          <a href="">Cách thức hoạt động</a>
          <a href="">Về chúng tôi</a>
          <a href="">Lời chứng thực</a>
          <a href="">Các câu hỏi thường gặp</a>
        </div>

        <div className={cx("footer-mid-more-info")}>
          <h5>Trợ giúp và hỗ trợ</h5>
          <a href="">Chính sách bảo mật</a>
          <a href="">Điều khoản điều kiện</a>
          <a href="">Tài liệu</a>
          <a href="">Đối tác</a>
        </div>

        <div className={cx("footer-mid-more-info")}>
          <h5>Ưu đãi tốt nhất</h5>
          <a href="">Tín dụng không từ chối</a>
          <a href="">Khoản vay không lãi suất</a>
          <a href="">Tạm ứng lương</a>
          <a href="">Tín dụng trong 5 phút</a>
        </div>

        <div className={cx("footer-mid-more-info")}>
          <h5>Đăng ký</h5>
          <input
            type="email"
            placeholder="Email"
            className={cx("footer-mid-more-info-input")}
          />
          <button className={cx("footer-mid-more-info-btn")}>Đăng ký</button>
        </div>
      </div>

      <hr />

      <div className={cx("footer-bot")}>
        <h6>© 2026 BẮP Tài Chính. Tất cả quyền được bảo lưu.</h6>
        <h6>Đã đăng ký bản quyền</h6>
      </div>
    </div>
  );
}

export default Footer;
