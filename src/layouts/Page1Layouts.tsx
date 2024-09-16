import { PropsWithChildren } from "react";
import style from "./Page1Layouts.module.css";

const Page1Layouts = ({ children }: PropsWithChildren) => {
  return <div className={style.container}>{children}</div>;
};

export default Page1Layouts;
