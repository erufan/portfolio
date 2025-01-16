import style from "./WorksPage.module.css";
import Card from "../components/Card";
import WorksPageLayouts from "./layouts/WorksPageLayouts";
import { data } from "../data/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WorksPage = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Link to={"/"} className={style.navigateToPrePage}>
        بازگشت
      </Link>
      <WorksPageLayouts>
        {data.projects.map((p) => (
          <Card
            key={p.title.en}
            title={p.title[i18n.language as keyof typeof p.title]}
            images={p.picturs}
            description={
              p.description[i18n.language as keyof typeof p.description]
            }
            code={p.code}
            link={p.link}
          />
        ))}
      </WorksPageLayouts>
    </>
  );
};

export default WorksPage;
