import React, { useEffect, useRef, useState } from "react";
import cat from "./cat.module.scss";
import { catalogs } from "../../assets/data";

const Nav_catalogs = () => {
  const [selected, setSelect] = useState("lavash");

  let myRef = useRef();
  useEffect(() => {
    myRef.current.children[0].className = `${cat.cat_items} ${cat.active}`;
  }, []);
  function hey({ event, item }) {
    for (let i = 0; i < 10; i++) {
      myRef.current.children[i].className = `${cat.cat_items}`;
    }
    event.target.className = `${cat.cat_items} ${cat.active}`;
    setSelect(item);
  }

  return (
    <div className={cat.catalog_items_box} ref={myRef}>
      {catalogs.map((item, i) => {
        return (
          <div
            key={i}
            className={cat.cat_items}
            onClick={() => hey({ event, item })}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Nav_catalogs;
