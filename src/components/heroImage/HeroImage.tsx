import style from "./HeroImage.module.css";
import { content } from "./content";
import Contact from "./Contact";
import { useSwiper } from "swiper/react";
import ShowcaseImage from "./ShowcaseImage";

const HeroImage = () => {
  const swiper = useSwiper();

  return (
    <div className={style.container}>
      <div className={style.description}>
        <h1 onClick={() => swiper.slideNext()}>{content.headr}</h1>
        <p>{content.story}</p>
        <Contact />
      </div>
      <div className={style.graphicContainer}>
        <ShowcaseImage
          image={content.showcaseImageLink}
          graphicElement={content.graphicElementLink}
        />
      </div>
    </div>
  );
};

export default HeroImage;
