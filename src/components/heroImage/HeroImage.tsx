import ShowcaseImage from "./ShowcaseImage";
import style from "./HeroImage.module.css";
import content from "./content";
import Contact from "./Contact";

const HeroImage = () => {
  return (
    <div className={style.container}>
      <div className={style.description}>
        <h1>{content.headr}</h1>
        <p>{content.story}</p>
        <Contact />
      </div>
      <div className={style.graphicContainer}>
        <ShowcaseImage image={content.showcaseImageLink} />
        <img
          src={content.graphicElementLink}
          alt="graphic Element"
          className={style.graphicElement}
        />
      </div>
    </div>
  );
};

export default HeroImage;
