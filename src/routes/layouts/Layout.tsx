import { Outlet } from "react-router-dom";
import ChangeLanuge from "../../components/ChangeLanuge";

const Layout = () => {
  return (
    <>
      <header>
        <ChangeLanuge />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
