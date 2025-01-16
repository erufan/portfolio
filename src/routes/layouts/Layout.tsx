import { Outlet } from "react-router-dom";
import Dropdown, { MenuItems } from "../../components/Dropdown";
import languages from "../../data/languages";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { i18n } = useTranslation();
  const changeLanguageHandler = (item: MenuItems) => {
    i18n.changeLanguage(item.value as string);
  };

  return (
    <>
      <header>
        <Dropdown items={languages} callBack={changeLanguageHandler} />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
