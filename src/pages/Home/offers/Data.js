import percentIcon from "../../../images/percent.svg";
import hotOffersIcon from "../../../images/hot-offers.svg";
import timeWorkingIcon from "../../../images/time.svg";

import agribankLogo from "../../../images/agribank-icon.png";
import vietcombankLogo from "../../../images/vietcombank-icon.png";
import saigonbankLogo from "../../../images/saigonbank-icon.png";
import vibLogo from "../../../images/vib-icon.png";
import vietinbankLogo from "../../../images/vietinbank-icon.png";
import vpbankLogo from "../../../images/vpbank-icon.png";

const offersData = [
  /* prettier-ignore */
  {
    id: 1,
    logo: vietcombankLogo,
    bankName: "VietcomBank",
    amount: "200,000,000đ",
    target: "Doanh nghiệp lớn",
    info: 
    [
      {icon: percentIcon, text: "10", },
      {icon: hotOffersIcon, text: "lãi suất hấp dẫn"},
      {icon: timeWorkingIcon, text:"10 ngày làm việc" },
    ],
    desc:"Một lựa chọn tuyệt vời cho những ai không muốn tiết lộ dữ liệu tài chính của họ."
  },
  {
    id: 2,
    logo: agribankLogo,
    logoType: "logo-type-big",
    bankName: "AgriBank",
    amount: "10,000,000đ",
    target: "Sinh viên",
    info: [
      { icon: percentIcon, text: "9" },
      { icon: hotOffersIcon, text: "có ưu đãi" },
      { icon: timeWorkingIcon, text: "3 ngày làm việc" },
    ],
    desc: "Phương sách cuối cùng trong trường hợp khẩn cấp thực sự - nếu bạn cần trả tiền cho học kỳ tiếp theo.",
  },
  {
    id: 3,
    logo: saigonbankLogo,
    logoType: "logo-type",
    bankName: "SaigonBank",
    amount: "80,000,000đ",
    target: "Doanh nghiệp nhỏ lẻ",
    info: [
      { icon: percentIcon, text: "10" },
      { icon: hotOffersIcon, text: "lãi suất hấp dẫn" },
      { icon: timeWorkingIcon, text: "6 ngày làm việc" },
    ],
    desc: "Quỹ để củng cố tài sản lưu thông hoặc hoàn thành một thỏa thuận tốt mà không lo về lãi suất.",
  },
  {
    id: 4,
    logo: vibLogo,
    bankName: "Vib",
    amount: "15,000,000đ",
    target: "Người cao tuổi",
    info: [
      { icon: percentIcon, text: "5" },
      { icon: hotOffersIcon, text: "có ưu đãi" },
      { icon: timeWorkingIcon, text: "3 ngày làm việc" },
    ],
    desc: "Loại cho vay cho người cao tuổi. Loại khoản vay nhân từ dành cho người già nuôi con hoặc trang trải cuộc sống.",
  },
  {
    id: 5,
    logo: vietinbankLogo,
    bankName: "VietinBank",
    amount: "100,000,000đ",
    target: "khởi nghiệp",
    info: [
      { icon: percentIcon, text: "12" },
      { icon: hotOffersIcon, text: "lãi suất hấp dẫn" },
      { icon: timeWorkingIcon, text: "7 ngày làm việc" },
    ],
    desc: "Phát triển công ty của bạn mà không phải lo lắng về vốn thả nổi lại có lãi suất tối.",
  },
  {
    id: 6,
    logo: vpbankLogo,
    logoType: "logo-type",

    bankName: "VpBank",
    amount: "2,000,000đ",
    target: "sinh viên",
    info: [
      { icon: percentIcon, text: "12" },
      { icon: hotOffersIcon, text: "lãi suất hấp dẫn" },
      { icon: timeWorkingIcon, text: "7 ngày làm việc" },
    ],
    desc: "Cánh tay phải đắc lực cho sinh viên vào những ngày cuối tháng không phải ăn mỳ tôm.",
  },
];

export default offersData;
