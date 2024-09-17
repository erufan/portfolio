import style from "./Card.module.css";
import ExpandedText from "./ExpandedText";
import Slider from "./Slider";

interface Props {
  title: string;
  images: string[];
  description: string;
  code: string;
  link: string;
}

const Card = ({ title, images, description, code, link }: Props) => {
  return (
    <div className={style.gridItem}>
      <Slider images={images} />
      <h2 className={style.title}>{title}</h2>
      <div className={style.cardBody}>
        <a href={code} target="_blank" rel="noopener noreferrer">
          نمایش کد
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          مشاهده پروژه
        </a>
        <p className={style.description}>
          <ExpandedText children={description} />
        </p>
      </div>
    </div>
  );
};

export default Card;
