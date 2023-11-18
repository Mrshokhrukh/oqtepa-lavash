import React from "react";
import pr from "./profile.module.scss";
const Profile = () => {
  return (
    <div>
      <h2 className="user_page_title">Profil</h2>
      <div className={pr.profile_page}>
        <div className={pr.profile_wrapper}>
          <h2 className={pr.profile_wrapper_title}>shaxsiy ma'lumotlar</h2>
          <div className={pr.name}>
            <span>Ismingiz</span>
            <p>name</p>
          </div>
          <div className={pr.date}>
            <span>Tug'ilgan kuningiz</span>
            <p>noma'lum</p>
          </div>
          <div className={pr.phone}>
            <span>Telefon raqamingiz</span>
            <p>+992562656</p>
          </div>
          <div></div>
          <button id={pr.change_data}>Malumotlarni o'zgartirish</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
