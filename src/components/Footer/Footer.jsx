import React from "react";
import ft from "./footer.module.scss";
import "./mobile_menu.scss";
import { Link, NavLink } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
const Footer = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  return (
    <div className={ft.bottom_container}>
      <div className={ft.footer}>
        <div className={ft.logo}>
          <img
            src="https://oqtepalavash.uz/assets/images/logo_2.0.svg"
            alt=""
          />
        </div>
        <div className={ft.foot_links}>
          <Link to="/">Menu</Link>
          <Link to="/about">About us</Link>
          <Link to="/branches">Branches</Link>
          <Link to="/contact">Contacts</Link>
        </div>
        <div className={ft.social_links}>
          <a href="https://t.me/oqtepalavash_bot" target="_blank">
            <span>
              <FaTelegramPlane />
            </span>
            <p>Telegram</p>
          </a>
          <a href="tel:+998781500030">
            <span>
              <IoCall />
            </span>
            <p>+998 78 150 00 30</p>
          </a>
          <a href="https://www.instagram.com/oqtepalavashuz/" target="_blank">
            <span>
              <FaInstagram />
            </span>
            <p>Instagram</p>
          </a>
        </div>
      </div>
      <div className={ft.menu_mobile}>
        <NavLink to="/" className="mobile_menu_link">
          <span>
            {" "}
            <MdOutlineMenuBook />{" "}
          </span>
          <p> Menu </p>
        </NavLink>
        <NavLink to="/user/favorites" className="mobile_menu_link">
          <span>
            {" "}
            <MdOutlineFavorite />{" "}
          </span>
          <p> favorites </p>
        </NavLink>
        <NavLink to="/user/cart" className="mobile_menu_link">
          <span>
            {" "}
            <FaShoppingCart />{" "}
          </span>
          <p> cart </p>
        </NavLink>
        <NavLink
          to={token ? "/user/profile" : "/user/login"}
          className="mobile_menu_link"
        >
          <span>
            {" "}
            <FaUserAlt />{" "}
          </span>
          <p> Profile </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
