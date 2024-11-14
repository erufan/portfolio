import style from "./WorksPageLayouts.module.css";
import { PropsWithChildren } from "react";

const Page2Layouts = ({ children }: PropsWithChildren) => {
  return <div className={style.container}>{children}</div>;
};

export default Page2Layouts;
