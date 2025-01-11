import { Outlet } from "react-router-dom";
import Dropdown from "../../components/Dropdown";

const Layout = () => {
  return (
    <>
      <header>
        <Dropdown />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
