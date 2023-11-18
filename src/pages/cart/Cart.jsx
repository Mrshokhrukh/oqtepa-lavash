import React, { useEffect, useState } from "react";
import cart from "./cart.module.scss";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import {
  useAddToCartMutation,
  useDecreaseProductQuantityMutation,
  useGetCartProductsMutation,
  useRemoveFromCartMutation,
} from "../../redux/cartApi";
import { useSelector } from "react-redux";

const Cart = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  const [getCartProducts, { isLoading, isSuccess }] =
    useGetCartProductsMutation();
  const [cartItems, setCartItems] = useState([]);
  const [decreaseProductQuantity] = useDecreaseProductQuantityMutation();
  const [addToCart] = useAddToCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  let selector = useSelector((state) => state.authModal.accessToken);

  useEffect(() => {
    const getProduct = async () => {
      let resp = await getCartProducts(token);
      setCartItems(resp.data);
    };
    getProduct();
    console.log(selector);
  }, [getCartProducts]);

  const decreaseQTY = async (id) => {
    let decrease = await decreaseProductQuantity({ id, token });
  };

  const increaseQTY = async (id) => {
    try {
      let increase = await addToCart({ id, token });
      console.log(increase);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    let remove = await removeFromCart({ id, token });
  };

  if (isLoading) {
    return <h1>LOADING....</h1>;
  }

  return (
    <div>
      <h2 className="user_page_title">savatcha</h2>
      <div className={cart.cart_page}>
        {cartItems.length > 0 ? (
          <div className={`${cart.main_div_cart}`}>
            <div className={cart.products_div}>
              {cartItems?.map((card) => {
                return (
                  <div className={cart.product_card} key={card.id}>
                    <div className={cart.product_left}>
                      <img src={card.product.image} alt="" />
                      <div>
                        <p className={cart.product_name}>{card.product.name}</p>
                        <p className={cart.product_price}>
                          {" "}
                          {card.product.price * card.quantity} <span>so'm</span>
                        </p>
                      </div>
                    </div>
                    <div className={cart.product_right}>
                      <div className={cart.actions}>
                        <button onClick={() => decreaseQTY(card.id)}>
                          <FaMinus />
                        </button>
                        <p>{card.quantity}</p>
                        <button onClick={() => increaseQTY(card.product.id)}>
                          <FaPlus />
                        </button>
                      </div>
                      <div
                        className={cart.delete_btn}
                        onClick={() => deleteProduct(card.id)}
                      >
                        <span>
                          <RiDeleteBin6Fill />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={cart.order_box}>
              <p className={cart.orderbox_title}>Buyurtmangiz</p>
              <div className={cart.order_info}>
                <div className={cart.address}>
                  <span>Manzil</span>
                  <p></p>
                </div>
                <div className={cart.devider}></div>
                <div className={cart.order_datas}>
                  <div className={cart.data}>
                    <span>tovarlar</span>{" "}
                    <div>
                      <p></p> <span>so'm</span>{" "}
                    </div>
                  </div>

                  <div className={cart.data}>
                    <span>yetkazib berish</span>{" "}
                    <div>
                      <p></p> <span>so'm</span>{" "}
                    </div>
                  </div>

                  <div className={cart.data}>
                    <span>to'lash uchun</span>{" "}
                    <div>
                      <p></p> <span>so'm</span>{" "}
                    </div>
                  </div>
                </div>
                <div className={cart.devider}></div>

                <div className={cart.checkout_btns}>
                  <button className={`${cart.white_btn} ${cart.order_btn}`}>
                    Buyurtmani Davom ettirish
                  </button>
                  <button className={`${cart.red_btn} ${cart.order_btn}`}>
                    Buyurtmani tasdiqlash
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cart.empty_cart}>
            <p className={cart.emty_ttitle}>Savatchangiz bo'sh :(</p>
            <img
              src="https://oqtepalavash.uz/assets/images/empty_cart.png"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
