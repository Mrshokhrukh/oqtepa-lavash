import React, { useEffect, useRef, useState } from "react";
import Nav_catalogs from "../../components/nav_catalogs/Nav_catalogs";
import menu from "./home.module.scss";
import { BiCategoryAlt } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAsync, getProductsAsync } from "../../redux/ProductSlice";
import Loading from "../../components/loading/Loading";
const Home = () => {
  let dispatch = useDispatch();
  let getData = useSelector((state) => state.products);
  const [products, setProducts] = useState(getData.products);
  let myRef = useRef(null);
  useEffect(() => {
    dispatch(getProductsAsync());
    dispatch(getCategoriesAsync());
  }, []);

  function changeCategory(data) {
    myRef.current.classList.add(`${menu.active}`);
    const newProducts = getData.products.filter(
      (item) => item.category_id == data.id
    );
    setProducts(newProducts);
  }

  if (getData.isLoading) {
    return <Loading />;
  }

  return (
    <div className={menu.page_container}>
      <div className={menu.nav_elements_show_in_responsive}>
        <Nav_catalogs getData={getData} />
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
              {getData.categories.map((cat, i) => {
                return (
                  <div
                    className={menu.product}
                    key={i}
                    onClick={() => changeCategory(cat)}
                    ref={myRef}
                  >
                    <img src={cat.icon} alt="" />
                    <p className={menu.product_title}>{cat.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={menu.manu_products}>
          <h1 className={menu.product_title}>Lavash</h1>
          <div className={menu.menu_products_right}>
            {products.map((product) => {
              return (
                <div key={product.id} className={menu.card}>
                  <div className={menu.like}>
                    <span>
                      <BsHeart />
                    </span>
                  </div>
                  <img src={product.image} alt="404" />
                  <div className={menu.card_info}>
                    <div className={menu.name}>{product.name}</div>
                    <div className={menu.price}>{product.price}</div>
                    <button className={menu.button}>Add</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
