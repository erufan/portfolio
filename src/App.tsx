import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import Page1 from "./slidePage/Page1";
import Page2 from "./slidePage/Page2";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={100}
        autoHeight={true}
        speed={2500}
      >
        <SwiperSlide>
          <Page1 />
        </SwiperSlide>
        <SwiperSlide>
          <Page2 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
