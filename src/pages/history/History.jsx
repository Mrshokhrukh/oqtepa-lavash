import React, { useState } from "react";
import his from "./history.module.scss";
const History = () => {
  const [historyOrders, setHistoryOrders] = useState();
  return (
    <div>
      <h2 className="user_page_title">buyurtmalar tarixi</h2>
      <div className={his.history_page}>
        <div className={his.empty_history}>
          <p className={his.empty_history_title}>
            Afsuski, siz hali hech narsa buyurtma qilmagansiz. :(
          </p>
          <img
            src="https://oqtepalavash.uz/assets/images/empty_order_history.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default History;
