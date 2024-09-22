import style from "./Page2.module.css";
import Card from "../components/Card";
import Page2Layouts from "../layouts/Page2Layouts";
import { data } from "../data/data";
import { useSwiper } from "swiper/react";

const Page2 = () => {
  const swiper = useSwiper();

  return (
    <>
      <span
        className={style.navigateToPrePage}
        onClick={() => swiper.slidePrev()}
      >
        بازگشت
      </span>
      <Page2Layouts>
        {data.projects.map((p) => (
          <Card
            key={p.title}
            title={p.title}
            images={p.picturs}
            description={p.description}
            code={p.code}
            link={p.link}
          />
        ))}
      </Page2Layouts>
    </>
  );
};

export default Page2;
