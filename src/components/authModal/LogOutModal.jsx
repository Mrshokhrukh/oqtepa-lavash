import React from "react";
import lg from "./logOut.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeLogoutModal, logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
const LogOutModal = () => {
  let isOpen = useSelector((state) => state.authModal.isLogoutModalOpen);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const handleYesClick = () => {
    dispatch(logout());
    dispatch(closeLogoutModal());
    navigate("/");
  };
  const handleNoClick = () => {
    dispatch(closeLogoutModal());
  };
  return (
    <div
      className={
        isOpen
          ? `${lg.logout_modal_background} ${lg.open}`
          : `${lg.logout_modal_background}`
      }
    >
      <div className={lg.logout_modal}>
        <div className={lg.modal_header}>
          <h2>Ma'lumot</h2>
        </div>

        <div className={lg.modal_body}>
          <p>Profildan chiqishga ishonchingiz komilmi ?</p>

          <div className={lg.actions}>
            <button
              className={`${lg.logoutBtn} ${lg.yes}`}
              onClick={handleYesClick}
            >
              Ha
            </button>
            <button
              className={`${lg.logoutBtn} ${lg.no}`}
              onClick={handleNoClick}
            >
              Yo'q
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
