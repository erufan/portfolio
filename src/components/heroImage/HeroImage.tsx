import ShowcaseImage from "./ShowcaseImage";
import style from "./HeroImage.module.css";

const HeroImage = () => {
  return (
    <div className={style.container}>
      <div>سلام من عرفان طاهری هستم front-end web developer</div>
      <ShowcaseImage />
      <div>Graphic Elements</div>
    </div>
  );
};

export default HeroImage;
