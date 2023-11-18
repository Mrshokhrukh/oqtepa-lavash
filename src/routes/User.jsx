import { Outlet } from "react-router-dom";
import UserMenuBar from "../components/userMenuBar/UserMenuBar";
import userStyle from "../style/user.module.scss";
const User = () => {
  return (
    <div className={userStyle.page_container}>
      <div className={userStyle.user_page}>
        <div className={userStyle.left_bar}>
          <UserMenuBar />
        </div>
        <div className={userStyle.user_page_right}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default User;
