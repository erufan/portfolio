import { Outlet } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import languages from "../../data/languages";

const Layout = () => {
  return (
    <>
      <header>
        <Dropdown items={languages} />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
