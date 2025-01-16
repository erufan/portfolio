import { useTranslation } from "react-i18next";
import Dropdown from "../Dropdown";
import languages from "../../data/languages";
import MenuItems from "../../interface/MenuItems";

const ChangeLanuge = () => {
  const { i18n } = useTranslation();
  const changeLanguageHandler = (item: MenuItems) => {
    i18n.changeLanguage(item.value as string);
  };

  return <Dropdown items={languages} callBack={changeLanguageHandler} />;
};

export default ChangeLanuge;
