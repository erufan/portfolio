import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import style from "./Slider.module.css";

interface Props {
  images: string[];
}

const Slider = ({ images }: Props) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={style.imageContainer}
        wrapperClass={style.wrapper}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img src={`public/${image}`} alt={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
