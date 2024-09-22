import { Container } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
} from "swiper/modules";

import Slide_1 from "../image/slider/slide_1.jpg";
import Slide_2 from "../image/slider/slide_3.jpg";
import Slide_3 from "../image/slider/slide_2.jpg";
import Slider_Content from "./Slider_Content";

const MainSilder = () => {
  return (
    <>
      <div className="main-slider">
        <Swiper
          className="animeslide"
          effect={"slide"}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "custom",
            renderCustom: (swiper, current, total) => {
              let indT = total >= 5 ? total : `${total}`;
              let indC = current >= 5 ? current : `${current}`;
              return `<b>${indC}</b><span>/</span>${indT}`;
            },
          }}
          scrollbar={{ draggable: true }}
          keyboard={{ enabled: true, onlyInViewport: false }}
          modules={[
            Autoplay,
            EffectFade,
            Navigation,
            Pagination,
            Scrollbar,
            Keyboard,
          ]}
          slidesPerView={1}
        >
          <SwiperSlide className="animeslide-slide slider-slide" style={{background: `url(${Slide_1})`}} >
              <Slider_Content
                title="Road Transport That Delivers Reliability"
                desc="Explore bespoke truck freight solutions with VRISE FREIGHT FZCO. From Dubai to the broader Middle East, we ensure your cargo reaches its destination safely and on time."
                btnNname="Explore More"
              />
          </SwiperSlide>
          <SwiperSlide className="animeslide-slide slider-slide" style={{background: `url(${Slide_2})`}}>
              <Slider_Content
                title="Navigating Global Waters with Ease"
                desc="Connect your goods to the world with our comprehensive ship freight services. Experience seamless sea transport, backed by expert handling and strategic global alliances."
                btnNname="Explore More"
              />
          </SwiperSlide>
          <SwiperSlide className="animeslide-slide slider-slide" style={{background: `url(${Slide_3})`}}>
              <Slider_Content
                title="Fly Higher with Speedy Air Freight"
                desc="Urgent delivery needs? Our air freight services combine speed, efficiency, and security, transporting your shipments globally with care and precision."
                btnNname="Explore More"
              />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainSilder;
