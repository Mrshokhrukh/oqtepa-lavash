import React, { useEffect } from "react";
import pr from "./profile.module.scss";
import BackTo from "../../components/backTo/BackTo";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/userSLice";
const Profile = () => {
  let dispatch = useDispatch();
  let { userData, isLoaing } = useSelector((state) => state.user);
  let token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    dispatch(fetchUserData({ token }));
  }, []);

  if (isLoaing) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <BackTo pageTitle={"profil"} />
      <h2 className="user_page_title">Profil</h2>
      <div className={pr.profile_page}>
        <div className={pr.profile_wrapper}>
          <h2 className={pr.profile_wrapper_title}>shaxsiy ma'lumotlar</h2>
          <div className={pr.name}>
            <span>Ismingiz</span>
            <p>{userData.name ? userData.name : `noma'lum`}</p>
          </div>
          <div className={pr.date}>
            <span>Tug'ilgan kuningiz</span>
            <p>{userData.birth_data ? userData.birth_data : `noma'lum`}</p>
          </div>
          <div className={pr.phone}>
            <span>Telefon raqamingiz</span>
            <p>{userData.phone ? `+998${userData.phone}` : `noma'lum`}</p>
          </div>
          <div></div>
          <button id={pr.change_data}>Malumotlarni o'zgartirish</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
