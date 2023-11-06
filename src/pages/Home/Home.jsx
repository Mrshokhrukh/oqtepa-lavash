import React from "react";
import Nav_catalogs from "../../components/nav_catalogs/Nav_catalogs";
import menu from "./home.module.scss";
import { BiCategoryAlt } from "react-icons/bi";
import { catalogs } from "../../assets/data";
const Home = () => {
  return (
    <div className={menu.page_container}>
      <div className={menu.nav_elements_show_in_responsive}>
        <Nav_catalogs />
      </div>
      <h1 className={menu.title}>Menu</h1>
      <div className={menu.menu}>
        <div className={menu.manu_catalog}>
          <div className={menu.catalog_wrapper}>
            <div className={menu.catalog_wrapper_TITLE}>
              <span>
                <BiCategoryAlt />
              </span>
              <p>catalog</p>
            </div>
            <div className={menu.catalog_categories}>
              {catalogs.map((pr, i) => {
                return (
                  <div className={menu.product} key={i}>
                    <img src={pr.url} alt="" />
                    <p className={menu.product_title}>{pr.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={menu.manu_products}>
          <h1>category title</h1>
          <div className={menu.menu_products_right}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
