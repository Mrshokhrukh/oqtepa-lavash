import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openAuthModal } from "../../redux/authSlice";
import login from "./login.module.scss";
const Login = () => {
  let dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(openAuthModal());
  // }, []);

  const openModal = () => {
    dispatch(openAuthModal());
  };

  return (
    <div className={login.loginPage}>
      <div onClick={openModal} className={login.btn}>
        LOGIN
      </div>
    </div>
  );
};

export default Login;
