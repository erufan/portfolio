import { useTranslation } from "react-i18next";
import Dropdown, { MenuItems } from "./Dropdown";
import languages from "../data/languages";
import { useContext } from "react";
import { LangugeDropdownContext } from "../context/LangugeDropDownContext";

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
