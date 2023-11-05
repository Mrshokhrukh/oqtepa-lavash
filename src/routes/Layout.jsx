import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
