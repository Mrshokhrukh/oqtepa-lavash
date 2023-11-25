import React, { useEffect, useRef, useState } from "react";
import Nav_catalogs from "../../components/nav_catalogs/Nav_catalogs";
import menu from "./home.module.scss";
import { BiCategoryAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCateg,
  getCategoriesAsync,
  getProductsAsync,
  getSinglePrAsync,
} from "../../redux/ProductSlice";
import Loading from "../../components/loading/Loading";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";

const Home = () => {
  let dispatch = useDispatch();
  let getData = useSelector((state) => state.products);
  let getProduct = useSelector((state) => state.products.products);
  let token = JSON.parse(localStorage.getItem("token"));
  const [category, setCateg] = useState("Lavashlar");

  useEffect(() => {
    dispatch(getProductsAsync());
    dispatch(getCategoriesAsync());
    dispatch(getSinglePrAsync(1));
  }, []);

  function changeCategory(data) {
    setCateg(data.name);

    dispatch(getSinglePrAsync(data.id));
  }

  if (getData.isLoading) {
    return <Loading />;
  }

  return (
    <div className={menu.page_container}>
      <div className={menu.nav_elements_show_in_responsive}>
        <Nav_catalogs getData={getData.categories} />
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
              {getData.categories.map((cat) => {
                return (
                  <Categories
                    key={cat.id}
                    categories={cat}
                    changeCategory={changeCategory}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={menu.manu_products}>
          <h1 className={menu.product_title}>{category}</h1>
          <div className={menu.menu_products_right}>
            {getData.isPrLoading ? (
              <h1 className={menu.prLoading}>Loading...</h1>
            ) : (
              getProduct.map((product) => {
                return <Products key={product.id} product={product} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
