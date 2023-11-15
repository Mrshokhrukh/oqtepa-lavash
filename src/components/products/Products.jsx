import React, { useEffect } from "react";
import menu from "../../pages/Home/home.module.scss";
import { BsHeart } from "react-icons/bs";
import { useAddToCartMutation } from "../../redux/authAPI";

const Products = ({ product }) => {
  const [addToCart, { isLoading }] = useAddToCartMutation();

  const handleClick = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      try {
        let addProduct = await addToCart({ id, token });
        console.log(addProduct);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("login first");
    }
  };

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
        <button className={menu.button} onClick={() => handleClick(product.id)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Products;
