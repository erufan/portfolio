import style from "./HomePageLayouts.module.css";
import { PropsWithChildren } from "react";

const Page1Layouts = ({ children }: PropsWithChildren) => {
  return <div className={style.container}>{children}</div>;
};

export default Page1Layouts;
