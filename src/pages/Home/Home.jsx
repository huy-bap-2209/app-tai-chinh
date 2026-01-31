import React, { useRef } from "react";
import "./Home.css";

import Feature from "./feature/Feature";
import Offers from "./offers/Offers";
import CategoryOffers from "./categoryOffers/CategoryOffers";
import Discount from "./discount/Discount";
import Testimoney from "./testimoney/Testimoney";
import Carousel from "./carousel/Carousel";
import HomeHeader from "./homeHeader/HomeHeader";

function Home() {
  const categoryRef = useRef(null);
  const offersRef = useRef(null);

  const scrollToCategory = () => {
    categoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HomeHeader offersRef={offersRef} />
      <Feature />
      <Offers
        scrollToCategory={scrollToCategory}
        categoryRef={categoryRef}
        ref={offersRef}
      />
      <CategoryOffers ref={categoryRef} />
      <Discount />
      <Testimoney />
      <Carousel />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
