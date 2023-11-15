import { Link, NavLink, Outlet } from "react-router-dom";

const User = () => {
  return (
    <div
      style={{
        marginTop: "300px",
      }}
    >
      <div className="left_nav">
        <NavLink to="/user/cart">cart</NavLink> <br />
        <button>logout</button>
      </div>
      <Outlet />
    </div>
  );
};

export default User;
