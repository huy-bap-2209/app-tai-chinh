import { useEffect, useRef } from "react";
import "./Carousel.css";

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
  const speed = 0.5; // pixels/frame

  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const posRef = useRef(0);

  useEffect(() => {
    const track1 = track1Ref.current;
    const track2 = track2Ref.current;

    // Render items vào 2 track
    const renderItems = (track) => {
      track.innerHTML = "";
      items.forEach((text) => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = text;
        track.appendChild(div);
      });
    };

    renderItems(track1);
    renderItems(track2);

    // đặt track2 ngay sau track1
    const totalWidth = items.length * (ITEM_WIDTH + GAP);
    track2.style.transform = `translateX(${totalWidth}px)`;

    const animate = () => {
      posRef.current += speed;

      // dịch chuyển cả 2 track
      track1.style.transform = `translateX(-${posRef.current}px)`;
      track2.style.transform = `translateX(${totalWidth - posRef.current}px)`;

      // khi track1 trượt hết, reset pos về 0
      if (posRef.current >= totalWidth) posRef.current = 0;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-window">
        <div className="carousel-track" ref={track1Ref}></div>
        <div className="carousel-track" ref={track2Ref}></div>
      </div>
    </div>
  );
}

export default InfiniteSeamlessCarouselFull;
