import style from "./Card.module.css";

interface Props {
  title: string;
  image: string;
  description: string;
  code: string;
  link: string;
}

const Card = ({ title, image, description, code, link }: Props) => {
  return (
    <div className={style.gridItem}>
      <div className={style.imageContainer}>
        <img src={image} alt={title} />
      </div>
      {/*fix alt later */}
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={code} target="_blank" rel="noopener noreferrer">
        نمایش کد
      </a>
      <a href={link} target="_blank" rel="noopener noreferrer">
        مشاهده پروژه
      </a>
    </div>
  );
};

export default Card;
