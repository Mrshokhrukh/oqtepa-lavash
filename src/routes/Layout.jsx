import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import AuthModal from "../components/authModal/AuthModal.jsx";
import Verify from "../components/authModal/Verify.jsx";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Sidebar />
        <AuthModal />
        <Verify />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
