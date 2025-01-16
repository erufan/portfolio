import { useTranslation } from "react-i18next";
import Dropdown from "../Dropdown";
import languages from "../../data/languages";
import { useContext } from "react";
import { LangugeDropdownContext } from "../../contexts/LangugeDropdownContext";
import MenuItems from "../../interface/MenuItems";

const ChangeLanuge = () => {
  const { i18n } = useTranslation();
  const { isActiveDropdown, setActiveDropdown } = useContext(
    LangugeDropdownContext
  );
  const changeLanguageHandler = (item: MenuItems) => {
    i18n.changeLanguage(item.value as string);
  };

  return (
    <div
      onClick={() => setActiveDropdown(!isActiveDropdown)}
      onBlur={() => setActiveDropdown(false)}
      style={{ display: "inline-block" }}
    >
      <Dropdown items={languages} callBack={changeLanguageHandler} />
    </div>
  );
};

export default ChangeLanuge;
