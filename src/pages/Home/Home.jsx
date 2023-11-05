import React from "react";
import Nav_catalogs from "../../components/nav_catalogs/Nav_catalogs";
import menu from "./home.module.scss";
const Home = () => {
  return (
    <div className={menu.page_container}>
      <div className={menu.nav_elements_show_in_responsive}>
        <Nav_catalogs />
      </div>
      <h2>Menu</h2>
    </div>
  );
};

export default Home;
