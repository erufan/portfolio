import "swiper/css";
import "swiper/css/effect-creative";
import { Swiper, SwiperSlide } from "swiper/react";
import Page2 from "./slidePage/Page2";
import { lazy, Suspense } from "react";
import Loading from "./components/loading/Loading";
const Page1 = lazy(() => import("./slidePage/Page1"));

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
          <Suspense fallback={<Loading />}>
            <Page1 />
          </Suspense>
        </SwiperSlide>
        <SwiperSlide>
          <Page2 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
