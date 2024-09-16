import image from "../../../public/1680361354194_prev_ui-min.webp";
import style from "./ShowcaseImage.module.css";

const ShowcaseImage = () => {
  return (
    <div className={style.container}>
      <img src={image} alt="picture of me" />
    </div>
  );
};

export default ShowcaseImage;
