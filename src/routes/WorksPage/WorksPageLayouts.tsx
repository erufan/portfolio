import style from "./WorksPageLayouts.module.css";
import { PropsWithChildren } from "react";

const WorksPageLayouts = ({ children }: PropsWithChildren) => {
  return <div className={style.container}>{children}</div>;
};

export default WorksPageLayouts;
