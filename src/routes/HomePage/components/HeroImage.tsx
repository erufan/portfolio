import style from "./HeroImage.module.css";
import Contact from "./Contact";
import ShowcaseImage from "./ShowcaseImage";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { content } from "../data/content";

const HeroImage = () => {
  const { i18n } = useTranslation();
  return (
    <div className={style.container}>
      <div className={style.description}>
        <Link to={"/works"} dir="auto">
          <h1>{content.headr[i18n.language as keyof typeof content.headr]}</h1>
        </Link>
        <p dir="auto">
          {content.story[i18n.language as keyof typeof content.story]}
        </p>
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
