import style from "./ShowcaseImage.module.css";

interface Prop {
  image: string;
  graphicElement: string;
}

const ShowcaseImage = ({ image, graphicElement }: Prop) => {
  return (
    <>
      <div className={style.container}>
        <img src={image} alt="picture of me" />
      </div>
      <img
        src={graphicElement}
        alt="graphic Element"
        className={style.graphicElement}
      />
    </>
  );
};

export default ShowcaseImage;
