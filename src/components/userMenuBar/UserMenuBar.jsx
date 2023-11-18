import React from "react";
import "./usermenu.scss";
import { NavLink } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
const UserMenuBar = () => {
  let dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logout());
  };
  
  return (
    <div className="bar_menu-user_page">
      <div className="bar_title">
        <span>
          <BiCategoryAlt />
        </span>
        <p>My Account</p>
      </div>
      <div className="bar_navLinks">
        <NavLink to="/user/cart" className="bar_nav_link">
          <span>
            <IoMdCart />
          </span>
          <p className="nav_title">cart</p>
        </NavLink>
        <NavLink to="/user/history" className="bar_nav_link">
          <span>
            <MdAccessTimeFilled />
          </span>
          <p className="nav_title">history</p>
        </NavLink>
        <NavLink to="/user/profile" className="bar_nav_link">
          <span>
            <FaUser />
          </span>
          <p className="nav_title">Profile</p>
        </NavLink>
        <NavLink to="/user/locations" className="bar_nav_link">
          <span>
            <FaLocationDot />
          </span>
          <p className="nav_title">locations</p>
        </NavLink>
        <NavLink to="/user/favorites" className="bar_nav_link">
          <span>
            <FaHeart />
          </span>
          <p className="nav_title">favorites</p>
        </NavLink>
        <NavLink to="/" className="bar_nav_link" onClick={logOutUser}>
          <span>
            <IoLogOut />
          </span>
          <p className="nav_title">logout</p>
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenuBar;
