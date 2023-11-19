import React, { useEffect } from "react";
import menu from "../../pages/Home/home.module.scss";
import { BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartApi";
import { addLikeProduct } from "../../redux/ProductSlice";
const Products = ({ product }) => {
  let token = JSON.parse(localStorage.getItem("token"));
  let dispatch = useDispatch();
  const handleClick = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));

    try {
      dispatch(addToCart({ id, token }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = (id) => {
    dispatch(addLikeProduct({ id, token }));
  };

  return (
    <div className={menu.card}>
      <div className={menu.like} onClick={() => handleLike(product.id)}>
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
