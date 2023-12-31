
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import AuthModal from "../components/authModal/AuthModal.jsx";
import Verify from "../components/authModal/Verify.jsx";
import LogOutModal from "../components/authModal/LogOutModal.jsx";
import MapLocationsModal from "../pages/locations/MapLocationsModal.jsx";

const Header = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <AuthModal />
        <Verify />
        <LogOutModal />
        <MapLocationsModal />
    </div>
  );
};

export default Header;
