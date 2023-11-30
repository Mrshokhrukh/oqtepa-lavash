import React, { useEffect } from "react";
import fav from "./favorites.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getLikedProduct,
  removeLikeFromProduct,
} from "../../redux/ProductSlice";
import { BsHeartFill } from "react-icons/bs";
import { addToCart } from "../../redux/cartApi";
import BackTo from "../../components/backTo/BackTo";
const Favorites = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let dispatch = useDispatch();
  const likedProducts = useSelector((state) => state.products.likedProducts);

  useEffect(() => {
    dispatch(getLikedProduct({ token }));
  }, []);

  const unLikeFunc = (id) => {
    dispatch(removeLikeFromProduct({ id, token }));
  };

  const handleClick = async (id) => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      dispatch(addToCart({ id, token }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <BackTo pageTitle={"sevimlilar"} />
      <h2 className="user_page_title">sevimlilar</h2>
      <div className={fav.favorites_page}>
        <div className={fav.liked_products_cont}>
          {likedProducts.length > 0 ? (
            likedProducts?.map((likedItem) => {
              return (
                <div className={fav.card} key={likedItem.id}>
                  <div
                    className={fav.like}
                    onClick={() => unLikeFunc(likedItem.id)}
                  >
                    <span>
                      <BsHeartFill />
                    </span>
                  </div>
                  <img src={likedItem.image} alt="404" />
                  <div className={fav.card_info}>
                    <div className={fav.name}>{likedItem.name}</div>
                    <div className={fav.price}>{likedItem.price}</div>
                    <button
                      className={fav.button}
                      onClick={() => handleClick(likedItem.id)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>emppty</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
