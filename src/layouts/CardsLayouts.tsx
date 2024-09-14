import { PropsWithChildren } from "react";
import style from "./CardsLayouts.module.css";

const CardsLayouts = ({ children }: PropsWithChildren) => {
  return <div className={style.container}>{children}</div>;
};

export default CardsLayouts;
