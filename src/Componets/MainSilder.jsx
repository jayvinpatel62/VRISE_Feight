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
import Slide_2 from "../image/slider/slide_2.jpg";
import Slide_3 from "../image/slider/slide_3.jpg";
import Slider_Content from "./Slider_Content";

const MainSilder = () => {
  return (
    <>
      <div className="main-slider">
        <Swiper
          className="animeslide"
          effect={"fade"}
          navigation={true}
          autoplay={{
            delay: 1500,
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
          <SwiperSlide className="animeslide-slide bg-no-repeat bg-cover" style={{background: `url(${Slide_1})`}} >
              <Slider_Content
                title="Transportation Services around the World "
                desc="Rockling Devario deep sea bonefish cutthroat trout streamer fish kaluga sailback scorpionfish sand dab, turkeyfish golden loach sand diver. Leopard danio píntano bonnetmouth; blue whiting, suckermouth armored catfish luderick blackchin kingfish."
                btnNname="Explore More"
              />
          </SwiperSlide>
          <SwiperSlide className="animeslide-slide bg-no-repeat bg-cover" style={{background: `url(${Slide_2})`}}>
              <Slider_Content
                title="Deliver Packages in any Way"
                desc="Rockling Devario deep sea bonefish cutthroat trout streamer fish kaluga sailback scorpionfish sand dab, turkeyfish golden loach sand diver. Leopard danio píntano bonnetmouth; blue whiting, suckermouth armored catfish luderick blackchin kingfish."
                btnNname="Explore More"
              />
          </SwiperSlide>
          <SwiperSlide className="animeslide-slide bg-no-repeat bg-cover" style={{background: `url(${Slide_3})`}}>
              <Slider_Content
                title="Worldwide Shipping"
                desc="Roach yellowfin cutthroat trout zebra pleco ocean sunfish temperate bass pikehead elephant fish. Long-finned char northern pike bluegill temperate. Leopard danio píntano bonnetmouth; blue whiting, suckermouth armored catfish luderick blackchin kingfish."
                btnNname="Explore More"
              />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainSilder;
