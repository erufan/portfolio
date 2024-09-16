import style from "./ShowcaseImage.module.css";

const ShowcaseImage = ({ image }: { image: string }) => {
  return (
    <div className={style.container}>
      <img src={image} alt="picture of me" />
    </div>
  );
};

export default ShowcaseImage;
