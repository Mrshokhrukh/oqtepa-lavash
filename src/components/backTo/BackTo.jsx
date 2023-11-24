import React from "react";
import bc from "./backTo.module.scss";
import { useNavigate } from "react-router-dom";
const BackTo = ({ pageTitle }) => {
  let navigate = useNavigate();
  const backClick = () => {
    navigate(-1);
  };
  return (
    <div className={bc.backto_main_div}>
      <div className={bc.back_icon} onClick={backClick}>
        {"<"}
      </div>
      <p>{pageTitle}</p>
    </div>
  );
};

export default BackTo;
