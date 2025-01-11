import style from "./HomePageLayouts.module.css";
import { PropsWithChildren } from "react";

const HomePageLayouts = ({ children }: PropsWithChildren) => {
  return <div className={style.container}>{children}</div>;
};

export default HomePageLayouts;
