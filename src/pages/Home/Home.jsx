import React from "react";
import Nav_catalogs from "../../components/nav_catalogs/Nav_catalogs";
import menu from "./home.module.scss";
import { BiCategoryAlt } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
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
          <h1 className={menu.product_title}>Lavash</h1>
          <div className={menu.menu_products_right}>
            <div className={menu.card}>
              <div className={menu.like}>
                <span>
                  <BsHeart />
                </span>
              </div>
              <img
                src="http://cc.oqtepalavash.uz/api/image/33f5cfcb-0071-4f1a-b1f1-22dc1de28f3b.jpg"
                alt=""
              />
              <div className={menu.card_info}>
                <p className={menu.name}>lavash</p>
                <p className={menu.price}>
                  28 000 <span>sum</span>
                </p>
                <button className={menu.button}>Add</button>
              </div>
            </div>
            <div className={menu.card}>
              <div className={menu.like}>
                <span>
                  <BsHeart />
                </span>
              </div>
              <img
                src="http://cc.oqtepalavash.uz/api/image/33f5cfcb-0071-4f1a-b1f1-22dc1de28f3b.jpg"
                alt=""
              />
              <div className={menu.card_info}>
                <p className={menu.name}>lavash</p>
                <p className={menu.price}>
                  28 000 <span>sum</span>
                </p>
                <button className={menu.button}>Add</button>
              </div>
            </div>
            <div className={menu.card}>
              <div className={menu.like}>
                <span>
                  <BsHeart />
                </span>
              </div>
              <img
                src="http://cc.oqtepalavash.uz/api/image/33f5cfcb-0071-4f1a-b1f1-22dc1de28f3b.jpg"
                alt=""
              />
              <div className={menu.card_info}>
                <p className={menu.name}>lavash</p>
                <p className={menu.price}>
                  28 000 <span>sum</span>
                </p>
                <button className={menu.button}>Add</button>
              </div>
            </div>
            <div className={menu.card}>
              <div className={menu.like}>
                <span>
                  <BsHeart />
                </span>
              </div>
              <img
                src="http://cc.oqtepalavash.uz/api/image/33f5cfcb-0071-4f1a-b1f1-22dc1de28f3b.jpg"
                alt=""
              />
              <div className={menu.card_info}>
                <p className={menu.name}>lavash</p>
                <p className={menu.price}>
                  28 000 <span>sum</span>
                </p>
                <button className={menu.button}>Add</button>
              </div>
            </div>
            <div className={menu.card}>
              <div className={menu.like}>
                <span>
                  <BsHeart />
                </span>
              </div>
              <img
                src="http://cc.oqtepalavash.uz/api/image/33f5cfcb-0071-4f1a-b1f1-22dc1de28f3b.jpg"
                alt=""
              />
              <div className={menu.card_info}>
                <p className={menu.name}>lavash</p>
                <p className={menu.price}>
                  28 000 <span>sum</span>
                </p>
                <button className={menu.button}>Add</button>
              </div>
            </div>
            <div className={menu.card}>
              <div className={menu.like}>
                <span>
                  <BsHeart />
                </span>
              </div>
              <img
                src="http://cc.oqtepalavash.uz/api/image/33f5cfcb-0071-4f1a-b1f1-22dc1de28f3b.jpg"
                alt=""
              />
              <div className={menu.card_info}>
                <p className={menu.name}>lavash</p>
                <p className={menu.price}>
                  28 000 <span>sum</span>
                </p>
                <button className={menu.button}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
