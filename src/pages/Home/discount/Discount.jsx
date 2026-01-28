import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Discount.css";

import loanVideo from "../../../videos/loans-video.mp4";

import discountData from "./DiscountData";

function Discount() {
  // hàm để autoplay video
  const videoRef = useRef(null);
  //   useRef tạo biến tham chiếu đến phần tử video trong DOM
  // k lm component re-render
  // dùng để chạm trực tiếp vào DOM

  useEffect(() => {
    // Intersection Observer API của browser
    // theo dõi phần tử có xuất hiện trong viewport hay k
    const observer = new IntersectionObserver(
      // [entry] là mảng các phần tử được theo dõi
      // Observer trả về mảng entries
      // Ở đây chỉ observe 1 video lấy luôn phần tử đầu tiên
      ([entry]) => {
        // isIntersecting: phần tử có xuất hiện trong viewport k
        // true: xuất hiện, false: k xuất hiện
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      // 50% video xuất hiện thì chạy isIntersecting = true
      // k đủ 50% k chạy isIntersecting = false
      { threshold: 0.5 },
    );

    if (videoRef.current) {
      // nói với browser rằng theo dõi thằng video cho t
      observer.observe(videoRef.current);
    }
    // Khi component unmount thì ngừng theo dõi, ngắt observer
    // tránh bug & tốn RAM
    return () => observer.disconnect();
  }, []);
  // phần [] chỉ chạy 1 lần khi component mount
  // Lúc này video đã có trong DOM mới observe được

  return (
    <div className="discount-container">
      <h5 className="discount-container-header">GIẢM GIÁ</h5>
      <h1>Nhận chiết khấu đặc biệt từ dịch vụ của chúng tôi</h1>
      <h4>
        Đây có phải là khoản vay đầu tiên của bạn tại{" "}
        <strong>BẮP TÀI CHÍNH</strong>? nhận chiết khấu bổ sung!
      </h4>
      <hr />
      <p className="discount-container-title">
        Nếu bạn chưa bao giờ sử dụng dịch vụ của chúng tôi, bạn có thể nhận được
        một <Link to="/promo_page">mã khuyến mãi</Link> đặc biệt để được{" "}
        <strong>giảm giá từ 5 đến 15%</strong> khi đăng ký khoản vay từ một
        trong các đối tác của chúng tôi. Bạn sẽ tìm thấy một số mã khuyến mãi
        bên dưới hoặc bạn có thể lấy chúng bằng cách liên hệ với bộ phận hỗ trợ
        của chúng tôi.
      </p>
      {/* muted: web chỉ autoplay khu muted */}
      {/* loop: chạy xong replay */}
      {/* playsInline: k bật fullScreen trên mobile */}
      <video
        ref={videoRef}
        className="loans-video"
        controls
        muted
        loop
        playsInline
      >
        <source src={loanVideo} type="video/mp4" />
      </video>
      <div className="discount-bank">
        {discountData.map((discount, index) => (
          <div className="discount-bank-item" key={index}>
            <h3>{discount.bankName}</h3>
            <i>{discount.desc}</i>
            <p>{discount.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discount;
