import style from "./WorksPage.module.css";
import Card from "./components/Card";
import WorksPageLayouts from "./WorksPageLayouts";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { LangugeDropdownContext } from "../../contexts/LangugeDropdownContext";
import { works } from "./data/works";

const WorksPage = () => {
  const { t, i18n } = useTranslation();
  const { isActiveDropdown } = useContext(LangugeDropdownContext);

  console.log(isActiveDropdown);

  return (
    <>
      <Link
        to={"/"}
        className={`${style.navigateToPrePage} 
          ${isActiveDropdown && style.hide}`}
      >
        {t("Home")}
      </Link>
      <WorksPageLayouts>
        {works.projects.map((p) => (
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
