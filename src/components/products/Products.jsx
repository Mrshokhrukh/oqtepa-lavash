import React, { useEffect } from "react";
import menu from "../../pages/Home/home.module.scss";
import { BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartApi";
import { addLikeProduct } from "../../redux/ProductSlice";
import { BsHeartFill } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
const Products = ({ product }) => {
  let token = JSON.parse(localStorage.getItem("token"));
  let dispatch = useDispatch();

  const handleClick = async (id) => {
    if (!token) {
      toast.error("hali login qilmagansiz");
    }
    try {
      dispatch(addToCart({ id, token }));
    } catch (err) {
      console.log(err);
    }
  };
  const handleLike = (id) => {
    if (token) {
      dispatch(addLikeProduct({ id, token }));
    } else {
      toast.error("hali login qilmagansiz");
    }
  };
  return (
    <div className={menu.card}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={menu.like} onClick={() => handleLike(product.id)}>
        <span>{product.is_like ? <BsHeartFill /> : <BsHeart />}</span>
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
