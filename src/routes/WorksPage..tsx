import style from "./WorksPage.module.css";
import Card from "../components/Card";
import Page2Layouts from "./layouts/WorksPage.Layouts";
import { data } from "../data/data";
import { Link } from "react-router-dom";

const WorksPage = () => {
  return (
    <>
      <Link to={"/"} className={style.navigateToPrePage}>
        بازگشت
      </Link>
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

export default WorksPage;
