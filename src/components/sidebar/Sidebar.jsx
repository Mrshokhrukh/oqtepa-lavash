import React, { useState } from "react";
import sid from "./sidebar.module.scss";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { BiSolidTimeFive } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillCompass } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../redux/sidebarSlice";
import Selections from "./Selections";

const Sidebar = () => {
  let isOpen = useSelector((state) => state.sidebar.isOpen);
  let dispatch = useDispatch();

  return (
    <div className={isOpen ? `${sid.sidebar} ${sid.open}` : `${sid.sidebar}`}>
      <div className={sid.sidebar_elements}>
        <Selections />
        <div className={sid.element}>
          <span className={sid.icon}>
            <FaUserAlt />
          </span>
          <Link
            to="/"
            onClick={() => dispatch(closeSidebar())}
            className={sid.text}
          >
            Profile
          </Link>
        </div>
        <div className={sid.element}>
          <span className={sid.icon}>
            <MdOutlineMenuBook />
          </span>
          <Link
            to="/"
            onClick={() => dispatch(closeSidebar())}
            className={sid.text}
          >
            menu
          </Link>
        </div>
        <div className={sid.element}>
          <span className={sid.icon}>
            <FaShoppingCart />
          </span>
          <Link
            to="/"
            onClick={() => dispatch(closeSidebar())}
            className={sid.text}
          >
            cart
          </Link>
        </div>
        <div className={sid.element}>
          <span className={sid.icon}>
            <MdOutlineFavorite />
          </span>
          <Link
            to="/"
            onClick={() => dispatch(closeSidebar())}
            className={sid.text}
          >
            favorites
          </Link>
        </div>
        <div className={sid.element}>
          <span className={sid.icon}>
            <BiSolidTimeFive />
          </span>
          <Link
            to="/"
            onClick={() => dispatch(closeSidebar())}
            className={sid.text}
          >
            history of orders
          </Link>
        </div>
        <div className={sid.element}>
          <span className={sid.icon}>
            <HiLocationMarker />
          </span>
          <Link
            to="/"
            onClick={() => dispatch(closeSidebar())}
            className={sid.text}
          >
            my addresses
          </Link>
        </div>
        <div className={sid.element}>
          <span className={sid.icon}>
            <AiFillCompass />
          </span>
          <Link
            to="/branches"
            onClick={() => dispatch(closeSidebar())}
            className={sid.text}
          >
            branches
          </Link>
        </div>
        <div className={sid.element}>
          <span className={sid.icon}>
            <RiTeamFill />
          </span>
          <Link
            to="/about"
            onClick={() => dispatch(closeSidebar())}
            className={sid.text}
          >
            about us
          </Link>
        </div>
        <div className={sid.element}>
          <span className={sid.icon}>
            <IoCall />
          </span>
          <Link
            to="/contact"
            onClick={() => dispatch(closeSidebar())}
            className={sid.text}
          >
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
