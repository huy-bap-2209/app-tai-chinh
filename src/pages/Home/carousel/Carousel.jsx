import { useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Carousel.module.scss";
const cx = classNames.bind(styles);

function InfiniteSeamlessCarouselFull() {
  const items = [
    "VietcomBank",
    "AgriBank",
    "MbBank",
    "TechcomBank",
    "VIB",
    "BIDV",
    "MbBank",
    "VpBank",
    "AbBank",
    "VietinBank",
    "DongABank",
  ];
  const ITEM_WIDTH = 220;
  const GAP = 10;
  const speed = 0.5;

  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const posRef = useRef(0);

  useEffect(() => {
    const track1 = track1Ref.current;
    const track2 = track2Ref.current;
    if (!track1 || !track2) return;

    const totalWidth = items.length * (ITEM_WIDTH + GAP);
    track2.style.transform = `translateX(${totalWidth}px)`;

    const animate = () => {
      posRef.current += speed;

      track1.style.transform = `translateX(-${posRef.current}px)`;
      track2.style.transform = `translateX(${totalWidth - posRef.current}px)`;

      if (posRef.current >= totalWidth) posRef.current = 0;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className={cx("carousel")}>
      <div className={cx("carousel-window")}>
        <div className={cx("carousel-track")} ref={track1Ref}>
          {items.map((item, idx) => (
            <div key={idx} className={cx("item")}>
              {item}
            </div>
          ))}
        </div>
        <div className={cx("carousel-track")} ref={track2Ref}>
          {items.map((item, idx) => (
            <div key={idx} className={cx("item")}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfiniteSeamlessCarouselFull;
