import { useTranslation } from "react-i18next";
import Dropdown, { MenuItems } from "./Dropdown";
import languages from "../data/languages";

const ChangeLanuge = () => {
  const { i18n } = useTranslation();
  const changeLanguageHandler = (item: MenuItems) => {
    i18n.changeLanguage(item.value as string);
  };

  return (
    <div>
      <Dropdown items={languages} callBack={changeLanguageHandler} />
    </div>
  );
};

export default ChangeLanuge;
