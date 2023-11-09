import React from "react";
import menu from "../../pages/Home/home.module.scss";
import { BsHeart } from "react-icons/bs";
const Products = ({ product }) => {
  return (
    <div className={menu.card}>
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
};

export default Products;
