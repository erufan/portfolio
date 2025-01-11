import style from "./WorksPage.module.css";
import Card from "../components/Card";
import WorksPageLayouts from "./layouts/WorksPageLayouts";
import { data } from "../data/data";
import { Link } from "react-router-dom";

const WorksPage = () => {
  return (
    <>
      <Link to={"/"} className={style.navigateToPrePage}>
        بازگشت
      </Link>
      <WorksPageLayouts>
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
      </WorksPageLayouts>
    </>
  );
};

export default WorksPage;
