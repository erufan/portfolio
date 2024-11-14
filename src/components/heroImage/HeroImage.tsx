import style from "./HeroImage.module.css";
import { content } from "./content";
import Contact from "./Contact";
import ShowcaseImage from "./ShowcaseImage";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className={style.container}>
      <div className={style.description}>
        <Link to={"/works"}>
          <h1>{content.headr}</h1>
        </Link>
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
