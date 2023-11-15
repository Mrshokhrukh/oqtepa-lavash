import React, { useEffect, useState } from "react";
import { useGetCartProductsMutation } from "../../redux/authAPI";

const Cart = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  const [getCartProducts, { isLoading }] = useGetCartProductsMutation();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      let resp = await getCartProducts(token);
      setCartItems(resp.data);
    };
    getProduct();
  }, []);

  return (
    <div>
      <h2>savatcha</h2>
    </div>
  );
};

export default Cart;
